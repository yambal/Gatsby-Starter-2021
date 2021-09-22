
import React from "react"
import { GatsbyBrowser } from "gatsby"
import { StyleProvider } from "../providers/StyleProvider"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (props) => {
  console.info(`wrapPageElement`)
  const { element, props: pageProps, getResourceURLsForPathname } = props
  return (
    <>
      {element}
    </>
  )
}