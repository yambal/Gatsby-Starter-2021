/**
 * https://miyauchi.dev/ja/posts/gatsby-typescript/
 */

const { register } = require('esbuild-register/dist/node')

register({
  target: 'node16'
})

require("./src/__generated__/gatsby-types")

const { createPages } = require("./src/gatsby/createPages")
const { onCreateNode } = require("./src/gatsby/onCreateNode")

exports.createPages = createPages
exports.onCreateNode = onCreateNode