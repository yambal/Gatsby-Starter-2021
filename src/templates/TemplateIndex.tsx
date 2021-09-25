import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../components/xBootStyle/Container"
import { PageContainer } from "../components/PageContainer"

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplateIndexQuery>> = (props) => {
  const html = String(props.data.markdownRemark?.html)
  return (
    <PageContainer pageProps={props}>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
  }
`