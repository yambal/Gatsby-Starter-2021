import * as React from "react"
import { PageProps } from "gatsby"
import { useRecoilState, useRecoilValue } from "recoil"
import { siteMetadataState } from "../providers/state/siteMetadata/siteMetadataAtom"

// markup
const IndexPage:React.FC<PageProps> = (props) => {
  const siteMatadata = useRecoilValue(siteMetadataState)
  const siteTitle = siteMatadata?.title

  return (
    <>
      <h1>{siteTitle}</h1>
      <h2>Hello</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default IndexPage
