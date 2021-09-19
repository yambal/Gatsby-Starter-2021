import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplatePostQuery>> = (props) => {
  
  const html = String(props.data.markdownRemark?.html)
  const topImage = props.data.markdownRemark?.frontmatter?.topImage?.childImageSharp?.gatsbyImageData
  let image
  if(topImage){
    image = getImage(topImage)
  }

  return (
    <>
      {image && <GatsbyImage image={image} alt={'title'} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TemplatePost

export const pageQuery = graphql`
  query TemplatePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        topImage {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`