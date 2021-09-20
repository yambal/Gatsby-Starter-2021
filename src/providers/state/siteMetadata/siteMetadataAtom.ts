import { atom } from "recoil"


type tSiteMetadata = GatsbyTypes.Maybe<Pick<GatsbyTypes.SiteSiteMetadata, "title">> 

export const siteMetadataState = atom<tSiteMetadata>({
  key: "siteMetadataState",
  default: undefined,
});
