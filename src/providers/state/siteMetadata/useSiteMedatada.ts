import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery<GatsbyTypes.UseSiteMetadataQuery>(graphql`
    query UseSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site?.siteMetadata
}