import React from "react"
import { x } from "@xstyled/styled-components"
import styled from "styled-components"
import { navigate } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"
import { PostListItem } from "./PostListItem"

export type PostItem = {
  path: string
  title: string
  imageData?: ImageDataLike
}

type PostListsProps = typeof x.div.defaultProps & {
  postItems: PostItem[]
}

const _PostLists: React.FC<PostListsProps> = React.forwardRef(function PostLists(
  {
    postItems,
    children,
    ...restProps
  },
  ref
) {
  const onPostItemClickHandler = React.useCallback((path: string) => {
    navigate(path)
  }, [])

  return (
    <x.div
      {...restProps}
      ref={ref}
    >
    { postItems.map((post) => {
      return (
        <PostListItem
          path={String(post.path)}
          title={String(post.title)}
          imageData={post.imageData}
          onItemClick={onPostItemClickHandler}
        />
      )
      
    })}
    </x.div>
  )
})

export const PostLists = styled(_PostLists)``