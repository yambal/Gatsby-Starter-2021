---
title: "このドキュメントについて"
date: "2020-08-18"
feature_image: "/static/images/first-article.jpg"
template: "TemplatePost"
---

## このドキュメントについて
Gatsby でサイトを構築する方法としては、本サイトのほか、様々な入門情報を参考にすることができます。
しかし、フロントエンジニアとして快適と思う環境・状態にするにはソコソコの知恵が必要であり、理想的な雛形はなかなかありません。

- TypeScript
- xstyled + Styled-Component と Theming
- [WIP] Storybook
- [WIP] テスト
- その他、Gatsby文脈上でのべストプラクティス

本ドキュメントは [GitHub 上の Template](https://github.com/yambal/Gatsby-Starter-2021) そのものでもあり、いつでもこれを再利用する事ができます

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

### Markdown対応
Gatsby には Markdown に関するパワフルなプラグインがあり、主にそれを利用する。
#### 使用プラグイン
- ファイルシステム
  - gatsby-source-filesystem
- MarkDown
  - gatsby-transformer-remark
- 画像
  - gatsby-transformer-sharp
  - gatsby-plugin-sharp
- Markdown + 画像
  - gatsby-remark-images

#### 特記事項
本リポジトリでは、Markdown上の**画像パスを絶対パスで記述**するよう[カスタマイズ](https://github.com/yambal/Gatsby-Starter-2021/blob/main/src/gatsby/onCreateNode.ts)している。<br />
`gatsby-remark-images`は、相対パスで指定しないと機能しないが、`onCreateNode`で絶対パスを相対パスに変換し、機能させている。これは Netlify CMS を使用したとき、それが相対パスに対応していない事に対応する事を考慮したものです。（定番の対処方法としては `gatsby-remark-relative-images` を使用する情報が多いが、振る舞いがよく分らないので自分で書きました）

### Theming
本リポジトリはテンプレートであるので、スタイリッシュで完成度の高いUIを目指してはいない。<br />
`xstyled` + `Styled-Component` で コンポーネント指向の CSS in JS と 使い勝手の良いスタイリング手段とする。<br />
利用者に存分にカスタマイズしてもらうとして、雛形として利用しやすいものを [xBootStyle](https://github.com/yambal/xBootStyle) として切り出し、submodule化した。
解説や利用方法などはそちらのリポジトリに記載するものとする。

`styled-components` の `ThemeProvider` は、`gatsby-browser.ts`もしくは`gatsby-ssr.ts`に配置すべきである。<br />
が、それでは `xstyled` を使用したコンポーネントにテーマが反映されない現象が発生する。原因を突き止めるには至らなかったが、`ThemeProvider` をそれらから外し、node となる tsx に記載する事にする。
