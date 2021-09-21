import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode } from "gatsby"

const getRootRelativePrefix = (absolutePath: string, srcDir: string) => {
  const a = absolutePath.split(`${srcDir}/`)
  if (a.length >= 2){
    return a[1].split('/').map(() => { return '..' }).join('/')
  }
  return '..'
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, getNodesByType, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    /**
     * MD 上の Absolute Path を 相対パスに置き換える
     */
    // 画像保存Dir
    const staticDir = '/static/images'

    // DM の親ディレクトリのうち、ルート直下のもの
    // 相対パスの推察に使う
    const srcDir = '/src'

    // 該当ファイルのディレクトリから、ルートへの相対のための文字列を得る
    // ../..　等が返り、staticDir を連結すれば相対パスとして使える
    const rootRelativePrefix = getRootRelativePrefix(String(node.fileAbsolutePath), srcDir)

    // frontmatter
    if(node.frontmatter){
      const frontMatterReg = new RegExp(`"${staticDir.replace('/', '\/')}\/`, 'i')
      const oldFrontmatter = Object(node.frontmatter)
      const oldFrontmatterJson = JSON.stringify(oldFrontmatter)
      const newFrontmatterJson = oldFrontmatterJson.replace(frontMatterReg, `"${rootRelativePrefix}${staticDir}/`)
      const newFrontmatter = JSON.parse(newFrontmatterJson)
      node.frontmatter = newFrontmatter
    }

    // content
    if(node.internal.content){
      const mdReg = new RegExp(`\\(${staticDir.replace('/', '\/')}\/`, 'g')
      const oldContent = node.internal.content
      const newContent = oldContent.replace(mdReg, `(${rootRelativePrefix}${staticDir}/`)
      node.internal.content = newContent
    }


    /**
     * Slug 生成
     */    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}