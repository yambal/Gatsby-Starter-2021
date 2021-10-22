import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/netlify.tsx`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            /* @ts-ignore */
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              /* @ts-ignore */
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {template: {eq: "TemplatePost"}}},
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "posts",
          },
        ],
      },
    },
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
  siteUrl: 'https://silly-bohr-becbfa.netlify.app/',
  title: "Gatsby Starter 2021",
  description: "description"
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config
