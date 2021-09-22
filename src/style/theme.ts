

import { xBootTheme } from '../components/xBootStyle/styles/xBootTheme'

export const theme = {
    ...xBootTheme
}

console.log(theme)

export type AppTheme = typeof theme

declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}

/*
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
*/