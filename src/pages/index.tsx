import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Container } from "../components/xBootStyle/Container"
import { ThemeProvider } from "styled-components"
import { theme } from "../style/theme"

// markup
const IndexPage:React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = (props) => {
  const siteTitle = props.data.site?.siteMetadata?.title

  return (
    <ThemeProvider theme={theme} >
      <Container>
        <h1>{siteTitle}</h1>
        <h2>Hello</h2>
      </Container>
    </ThemeProvider>
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
