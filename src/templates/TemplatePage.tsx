import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../components/xBootStyle/Container"
import { PageContainer } from "../components/PageContainer"

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplatePageQuery>> = (props) => {
  const TopImage = React.useMemo(() => {
    const gImage = props.data.markdownRemark?.frontmatter?.feature_image?.childImageSharp?.gatsbyImageData
    if(gImage){
      const image = getImage(gImage)
      if(image){
        return (
          <GatsbyImage
            image={image}
            alt={'title'}
          />
        )
      }
    }
    return null
  },[props.data.markdownRemark])
  
  const html = String(props.data.markdownRemark?.html)


  return (
    <PageContainer
      pageProps={props}
      pageTitle={props.data.markdownRemark?.frontmatter?.title}
    >
      <Container>
        {TopImage}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </PageContainer>
  )
}

export default TemplatePost

export const pageQuery = graphql`
  query TemplatePage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        feature_image {
          childImageSharp {
            gatsbyImageData(
              width: 1024
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`