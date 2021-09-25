import React from "react"
import { x } from "@xstyled/styled-components"
import styled from "styled-components"
import { getImage, ImageDataLike, GatsbyImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type PostListItemProps = typeof x.div.defaultProps & {
  path: string
  title: string
  imageData?: ImageDataLike
  onItemClick: (path: string) => void
}

const ThumbImage = styled(GatsbyImage)`
  border-radius: 1rem;
`

const _PostListItem: React.FC<PostListItemProps> = React.forwardRef(function PostListItem(
  {
    path,
    title,
    imageData,
    onItemClick,
    children,
    ...restProps
  },
  ref
) {
  const siteMetadata = useSiteMetadata()

  const onClickHandler = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    onItemClick(path)
  }, [path])
  
  const TopImage = React.useMemo(() => {
    if(imageData){
      const image = getImage(imageData)
      if(image){
        return (
          <ThumbImage
            image={image}
            alt={`${title} | ${siteMetadata?.title}`}
          />
        )
      }
    }
    return null
  },[imageData, siteMetadata, title])

  

  return (
    <x.div
      onClick={onClickHandler}
      display="flex" 
    >
      <x.div
        w="9.3rem"
      >
        {TopImage}
      </x.div>
      {title}
    </x.div>
  )
})

export const PostListItem = styled(_PostListItem)``