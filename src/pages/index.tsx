import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Container } from "../components/xBootStyle/Container"
import { StyleProvider } from "../providers/StyleProvider"

// markup
const IndexPage:React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = (props) => {
  const siteTitle = props.data.site?.siteMetadata?.title

  return (
    <StyleProvider>
      <Container>
        <h1>{siteTitle}</h1>
        <h2>Hello</h2>
      </Container>
    </StyleProvider>
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
