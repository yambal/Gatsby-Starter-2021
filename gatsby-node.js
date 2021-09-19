  /**
 * TypeScript化
 * https://zenn.dev/ryo_kawamata/articles/gatsby-ts-2020
 */

 require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
})

require("./src/__generated__/gatsby-types")

const { createPages } = require("./src/gatsby-node/createPages")
const { onCreateNode } = require("./src/gatsby-node/onCreateNode")

exports.createPages = createPages
exports.onCreateNode = onCreateNode