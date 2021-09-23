import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { Container } from "../components/xBootStyle/Container"
import { StyleProvider } from "../providers/StyleProvider"
import { Navbar } from "../components/xBootStyle/Nav/Navbar"

// markup
const IndexPage:React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = (props) => {
  const siteTitle = props.data.site?.siteMetadata?.title

  return (
    <StyleProvider>
      <Navbar
        brand={<Link to="/" className="brand">{siteTitle}</Link>}
        bg="primary"
        color="white"
      >
        {siteTitle}
      </Navbar>
      <Container>
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
