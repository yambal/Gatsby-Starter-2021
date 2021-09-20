
import { defaultTheme } from '@xstyled/styled-components'
// import { xBootTheme } from '../components/xBootStyle/xBootTheme'

export const theme = {
    ...defaultTheme,
    /* ...xBootTheme */
}

export type AppTheme = typeof theme

declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}

/*
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
*/