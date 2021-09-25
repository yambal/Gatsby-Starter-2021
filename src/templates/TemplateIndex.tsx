import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container } from "../components/xBootStyle/Container"
import { PageContainer } from "../components/PageContainer"
import { PostItem, PostLists } from "../containers/PostLists"

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplateIndexQuery>> = (props) => {
  const html = String(props.data.markdownRemark?.html)

  const postEdges = props.data.allMarkdownRemark.edges
  const postItems:PostItem[] = postEdges.map((postEdge) => {
    return {
      path: String(postEdge.node.fields?.slug),
      title: String(postEdge.node.frontmatter?.title),
      imageData: postEdge.node.frontmatter?.feature_image?.childImageSharp?.gatsbyImageData
    }
  })

  return (
    <PageContainer pageProps={props}>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <PostLists postItems={postItems}/>
      </Container>
    </PageContainer>
  )
}

export default TemplatePost

export const pageQuery = graphql`
  query TemplateIndex($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "TemplatePost"}}}
      sort: {fields: frontmatter___date}
    ) {
      edges {
        node {
          frontmatter {
            title
            feature_image {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1
                  placeholder: TRACED_SVG
                  formats: WEBP
                  layout: CONSTRAINED
                )
              }
            }
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`