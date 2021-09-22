   
import { normalize } from "polished"
import { createGlobalStyle } from "styled-components"
import { xBootGlobalStyle } from "../components/xBootStyle/styles/xBootGlobalStyle"

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${xBootGlobalStyle}
`