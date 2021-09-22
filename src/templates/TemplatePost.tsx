import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../components/xBootStyle/Container"

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplatePostQuery>> = (props) => {

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
    <Container>
      {TopImage}
      
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/*
      <pre>{JSON.stringify(props, null, 2)}</pre>
      */}
    </Container>
  )
}

export default TemplatePost

export const pageQuery = graphql`
  query TemplatePost($slug: String!) {
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