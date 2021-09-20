import { createGlobalStyle } from "styled-components"
import { normalize } from 'polished'
// import { xBootGlobalStyle } from "../components/xBootStyle/xBootGlobalStyle"

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
`