import * as React from "react"
import { useSiteMetadata } from "./useSiteMedatada"
import { useSetRecoilState } from "recoil"
import { siteMetadataState } from "./siteMetadataAtom"

export const FetcherSiteMetadata:React.FC = ({
  children
}) => {
  const siteNetadata = useSiteMetadata()
  const setSiteMetadata = useSetRecoilState(siteMetadataState)

  React.useEffect(() => {
    setSiteMetadata(siteNetadata)
  }, [siteNetadata])

  return (
    <></>
  )
}