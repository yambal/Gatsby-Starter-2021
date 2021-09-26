import { x } from "@xstyled/styled-components"
import React from "react"
import styled from "styled-components"
import { ThemeAndGlobalStyleProbider } from "../providers/ThemeAndGlobalStyleProbider"
import { graphql, Link, PageProps } from "gatsby"
import { Navbar } from "./xBootStyle/Nav/Navbar"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Helmet } from "react-helmet"
import { useGrovalMenuPage } from "../hooks/useGrovalMenuPage"
import { IconFeed } from "./icons/IconFeed"

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
          <link rel="alternate" type="application/atom+xml" href="/rss.xml" title="Atom" />
        </Helmet>
        <Navbar
          brand={<Link to="/" className="brand">{brandNode}</Link>}
          menuLinks={menuLinks}
          bg="primary"
          color="white"
        >
          <Link to="/rss.xml"><IconFeed mr="0.25rem"/>Feed</Link>
        </Navbar>
        {children}
      </>
    </ThemeAndGlobalStyleProbider>
  )
}

export const PageContainer = styled(_PageContainer)``