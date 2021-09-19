import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}