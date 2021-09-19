import path from "path"
import { GatsbyNode, Actions, Reporter } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<{ allMarkdownRemark: Pick<GatsbyTypes.Query["allMarkdownRemark"], 'edges'>} >(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  if (result.data) {
    const {data: { allMarkdownRemark: {edges}}} = result
    edges.forEach(({ node }) => {
      if(node.fields && node.fields.slug) {

        const templateName = node.frontmatter?.template || 'TemplateDefault'
        const templatePath = path.resolve(`./src/templates/${templateName}.tsx`)

        const { fields: {slug} } = node
        reporter.info(`createPage : ${slug} template : ${templateName}`)
        createPage({
          path: String(slug),
          component: templatePath,
          context: {
            slug: String(slug),
          },
        })
      }
    })
  }
}