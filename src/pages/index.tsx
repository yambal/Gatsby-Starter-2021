import * as React from "react"
import { graphql, PageProps } from "gatsby"

// markup
const IndexPage:React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = (props) => {
  const siteTitle = props.data.site?.siteMetadata?.title

  return (
    <>
      <h1>{siteTitle}</h1>
      <h2>Hello</h2>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexPage {
  site {
    siteMetadata {
      title
    }
  }
}
`
