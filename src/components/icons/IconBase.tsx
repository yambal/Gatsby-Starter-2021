   
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import styled, { SystemProps } from '@xstyled/styled-components'
import { system } from '@xstyled/system'

export type FaIconBaseProps = SystemProps & FontAwesomeIconProps

export const FaIconBase = styled(FontAwesomeIcon)<FaIconBaseProps>`
  && {
    ${system}
  }
`