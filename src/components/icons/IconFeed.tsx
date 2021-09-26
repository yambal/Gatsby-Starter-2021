import * as React from 'react'
import { faRssSquare } from '@fortawesome/free-solid-svg-icons'
import { FaIconBase, FaIconBaseProps } from './IconBase'

export type IconFeedProps = Omit<FaIconBaseProps, 'icon'>

export function IconFeed(props: IconFeedProps) {
  return <FaIconBase icon={faRssSquare} {...props} />
}