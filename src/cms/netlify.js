import { x, ThemeProvider } from '@xstyled/styled-components'
import CMS from 'netlify-cms-app'

/**
 * https://www.stephenlewis.me/notes/custom-netlify-cms-preview-gatsby/
 * @returns 
 */
const ArticlePreview = ({ entry }) => (
    <x.article backgroundColor="red">
      <h1>Custom article preview</h1>
      <p>This is my new article.</p>
      <pre>{JSON.stringify(entry, null, 2)}</pre>
    </x.article>
)

CMS.registerPreviewTemplate('index', ArticlePreview)