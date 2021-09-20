import * as React from "react"
import { RecoilRoot } from "recoil"
import { FetcherSiteMetadata } from "./siteMetadata/FetcherSiteMetadata"

export const StateProvider: React.FC = ({
  children
}) => {
  return (
    <RecoilRoot>
      <FetcherSiteMetadata />
        {children}
    </RecoilRoot>
  )
} 