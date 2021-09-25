import { graphql, useStaticQuery } from "gatsby"

type useGrovalMenuPageProps = {
  pathName: string
}

export const useGrovalMenuPage = (props: useGrovalMenuPageProps) => {
  const { pathName } = props
  const { allMarkdownRemark } = useStaticQuery<GatsbyTypes.useGlovalMenuPageQuery>(graphql`
    query useGlovalMenuPage {
      allMarkdownRemark(filter: {frontmatter: {global_navi: {gt: 0}}}) {
        edges {
          node {
            frontmatter {
              global_navi
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const grovalMenuPage = allMarkdownRemark.edges.map((edge) => {
    const isActive = pathName === edge.node.fields?.slug || pathName + "/" === edge.node.fields?.slug
    return {
      title: String(edge.node.frontmatter?.title),
      path: String(edge.node.fields?.slug),
      sort: String(edge.node.frontmatter?.global_navi || 999),
      isActive
    }
  }).sort((a, b) => {
    if(a.sort > b.sort){
      return 1
    } else {
      return -1
    }
  })

  return grovalMenuPage
}