import { x } from "@xstyled/styled-components"
import React from "react"
import styled from "styled-components"
import { ThemeAndGlobalStyleProbider } from "../providers/ThemeAndGlobalStyleProbider"
import { graphql, Link, PageProps } from "gatsby"
import { Navbar } from "./xBootStyle/Nav/Navbar"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Helmet } from "react-helmet"

type PageContainerProps = {
  brand?: React.ReactNode
  pageTitle?: string
}

const _PageContainer: React.FC<PageContainerProps> = ({
  brand,
  pageTitle,
  children,
  ...restProps
}) => {
  
  const siteMetadata = useSiteMetadata()
  const brandNode: React.ReactNode = brand || String(siteMetadata?.title)

  const mataTitle = React.useMemo(() => {
    return pageTitle ? `${pageTitle} | ${siteMetadata?.title}` : String(siteMetadata?.title)
  },[siteMetadata?.title, pageTitle])

  return (
    <ThemeAndGlobalStyleProbider>
      <>
        <Helmet>
          <title>{mataTitle}</title>
        </Helmet>
        <Navbar
          brand={<Link to="/" className="brand">{brandNode}</Link>}
          bg="primary"
          color="white"
        >
          siteTitle
        </Navbar>
        {children}
      </>
    </ThemeAndGlobalStyleProbider>
  )
}

export const PageContainer = styled(_PageContainer)``