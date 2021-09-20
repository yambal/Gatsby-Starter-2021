import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: resolve(__dirname, '../images'),
      },
      /* @ts-ignore */
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: resolve(__dirname, '../pages'),
      },
      /* @ts-ignore */
      __key: "pages",
    },
    `gatsby-plugin-typegen`,
]

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'https://miyauchi.dev/',
  title: "Title"
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config