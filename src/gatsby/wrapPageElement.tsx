import React from "react"
import { GatsbyBrowser } from "gatsby"

/**
 * Provider などをここに記載する
 * @param props 
 * @returns 
 */

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (props) => {
  const { element, props: pageProps, getResourceURLsForPathname } = props
  return (
    <>
      {element}
    </>
  )
}