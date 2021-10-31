import { x, ThemeProvider } from '@xstyled/styled-components'
import CMS from 'netlify-cms-app'

/**
 * https://www.stephenlewis.me/notes/custom-netlify-cms-preview-gatsby/
 * @returns 
 */
const ArticlePreview = ({ entry, widgetFor }) => (
    <x.article backgroundColor="#FF0000">
      <h1>{entry.getIn(['data', 'title'])}</h1>
      <section dangerouslySetInnerHTML={{ __html: widgetFor('body') }} />
      <pre>{JSON.stringify(entry, null, 2)}</pre>
    </x.article>
)

CMS.registerPreviewTemplate('index', ArticlePreview)