import CMS from 'netlify-cms-app'
import React from 'react'

const ArticlePreview = () => (
  <article>
    <h1>Custom article preview</h1>
    <p>This is my new article.</p>
  </article>
)

CMS.registerPreviewTemplate('index', ArticlePreview)