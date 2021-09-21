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