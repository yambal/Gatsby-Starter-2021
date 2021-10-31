import { x, ThemeProvider } from '@xstyled/styled-components'
import CMS from 'netlify-cms-app'
import React from 'react'

import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from '../style/theme'

/**
 * https://www.stephenlewis.me/notes/custom-netlify-cms-preview-gatsby/
 * @returns 
 */
const ArticlePreview = ({ entry }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <x.article backgroundColor="red">
      <h1>Custom article preview</h1>
      <p>This is my new article.</p>
      <pre>{JSON.stringify(entry, null, 2)}</pre>
    </x.article>
  </ThemeProvider>
)

CMS.registerPreviewTemplate('index', ArticlePreview)