import { x } from "@xstyled/styled-components"
import React from "react"
import styled from "styled-components"
import { ThemeAndGlobalStyleProbider } from "../providers/ThemeAndGlobalStyleProbider"
import { graphql, Link, PageProps } from "gatsby"
import { Navbar } from "./xBootStyle/Nav/Navbar"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Helmet } from "react-helmet"
import { useGrovalMenuPage } from "../hooks/useGrovalMenuPage"

type PageContainerProps = {
  brand?: React.ReactNode
  pageTitle?: string
  pageProps: PageProps
}

const _PageContainer: React.FC<PageContainerProps> = ({
  brand,
  pageTitle,
  children,
  pageProps
}) => {
  const siteMetadata = useSiteMetadata()
  const globalMenuPages = useGrovalMenuPage({
    pathName: String(pageProps.location.pathname)
  })

  const brandNode: React.ReactNode = brand || String(siteMetadata?.title)
  /**
   * ページタイトル (META) を返す
   */
  const mataTitle = React.useMemo(() => {
    return pageTitle ? `${pageTitle} | ${siteMetadata?.title}` : String(siteMetadata?.title)
  },[siteMetadata?.title, pageTitle])
  
  /**
   * メニューのリスト配列を返す
   **/
  const menuLinks = React.useMemo(() => {
    return globalMenuPages.map((page) => {
      return (
        <Link to={page.path} className={page.isActive ? 'active' : undefined}>{page.title}</Link>
      )
    })
  },[globalMenuPages])

  return (
    <ThemeAndGlobalStyleProbider>
      <>
        <Helmet>
          <title>{mataTitle}</title>
        </Helmet>
        <Navbar
          brand={<Link to="/" className="brand">{brandNode}</Link>}
          menuLinks={menuLinks}
          bg="primary"
          color="white"
        >
          Work in progress
        </Navbar>
        {children}
      </>
    </ThemeAndGlobalStyleProbider>
  )
}

export const PageContainer = styled(_PageContainer)``