---
title: "はじめての記事"
date: "2020-08-18"
feature_image: "/static/images/first-article.jpg"
template: "TemplatePost"
---

## Gatsbyとは
Gatsby は高速で安全なWebサイトを構築できるジェネレーター（SSG）です。
つまり入力したデータで、公開用のHTMLやJavaScriptを生成してくれるというものですね。

SSGは配信時のサーバ側での処理が無く、HTMLやJavaScriptといった基本的な静的ファイルが配信出来ればよいので、高速でありコストも低い。
一般的にSSGは、ページ量が多かったり、更新頻度の高いサイトには向かないとされています。Gatsby も傾向としてはその通りですが、ビルドキャッシュなどの工夫で、比較的緩和されています。

## このドキュメントについて
Gatsby でサイトを構築する方法としては、本サイトのほか、様々な入門情報を参考にすることができます。
しかし、フロントエンジニアとして快適と思う環境・状態にするにはソコソコの知恵が必要であり、理想的な雛形はなかなかありません。

- TypeScript
- xStyled + Styled-Component と Theming
- Storybook
- [WIP] テスト
- その他、Gatsby文脈上でのべストプラクティス

本ドキュメントは GitHub 上の Template そのものでもあり、いつでもこれを再利用する事ができます

## 解説
### TypeScript化
#### 基本的対処
- Gatsby 3 では `gatsby-plugin-typescript` は必要ない
- `gatsby-plugin-graphql-codegen` ではなく `gatsby-plugin-typegen` を使う
- `gatsby-***.js` の TS化
  - `gatby-config.js` だけは基本的にTS化できないが `esbuild-register` を介してTS化する
  - `/src/gatsby` 配下にまとめる
#### 詳細：GlaphQLレスポンスの型生成
- `gatsby-plugin-typegen` を利用する
- `yarn run deverop`時に（デフォルトで）`/src/__generated__` 配下に型定義を生成してくれるので、それを利用して型付けしていく。
- `tsconfig.json` は[こちら](https://github.com/yambal/Gatsby-Starter-2021/blob/main/tsconfig.json)のようにする
#### 参照
- [Gatsby.js を完全TypeScript化する](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb)
  - 注）`gatsby-plugin-typescript` は不要になっています
  - 注）`gatsby-plugin-graphql-codegen` は `gatsby-plugin-typegen` に移行
- [Gatsby で config ファイルを TypeScript化する](https://miyauchi.dev/ja/posts/gatsby-typescript/)
- [gatsby-plugin-typescript](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/)
- [WIP] [GatsbyをTypeScript化してESLintとPrettierを導入する](https://kohsuk.tech/2020/12/5/)
