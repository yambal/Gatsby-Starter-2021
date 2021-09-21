import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

console.log(resolve(__dirname, '../images'))

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
        icon: resolve(__dirname, '../../static/images/icon.png'),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
        path: resolve(__dirname, '../../static/images'),
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
