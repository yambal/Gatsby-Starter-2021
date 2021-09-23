import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site} = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  console.log(site?.siteMetadata)
  return site?.siteMetadata
}