import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { Container } from "../components/xBootStyle/Container"
import { ThemeAndGlobalStyleProbider } from "../providers/ThemeAndGlobalStyleProbider"
import { Navbar } from "../components/xBootStyle/Nav/Navbar"
import { Button } from "../components/xBootStyle/buttons/Button"
import { PageContainer } from "../components/PageContainer"

// markup
const IndexPage:React.FC<PageProps> = (props) => {
  console.log(props)
  return (
    <PageContainer>
      <>
        <Container>
          <h2>Hello</h2>
          <Button valiant="primary">Button</Button>
          <Button valiant="primary" disabled>Button</Button>
        </Container>
      </>
    </PageContainer>
  )
}

export default IndexPage