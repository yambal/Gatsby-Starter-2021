
import React from "react"
import { GatsbyBrowser } from "gatsby"
import { StyleProvider } from "../providers/StyleProvider"
import { StateProvider } from "../providers/state/StateProvider"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (props) => {
  const { element, props: pageProps, getResourceURLsForPathname } = props
  return (
    <StateProvider>
      <StyleProvider {...pageProps}>
        {element}
      </StyleProvider>
    </StateProvider>
  )
}