import * as React from "react"
import { GlobalStyle } from "../style/GlobalStyle"
import {
  Preflight,
  ThemeProvider,
} from '@xstyled/styled-components'
import { theme } from '../style/theme'

export const StyleProvider: React.FC = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}