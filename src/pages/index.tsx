import * as React from "react"
import { graphql, PageProps } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage:React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = (props) => {

  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
