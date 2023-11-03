import { type } from 'os'
import React, { Children, FunctionComponent } from 'react'
import { css } from '@emotion/react'
interface ButtonComponent {
  props?: any
  className?: string,
  children?: React.ReactNode
  outline?: boolean
  onClick?: any
  title?: String
}

const ButtonComponent: FunctionComponent<ButtonComponent> = ({ children, className, outline = false, onClick }) => {
  return (
    <button css={cssButton(outline)} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default ButtonComponent
const cssButton = (outline: boolean) => css`
background-color: ${outline ? '#EF4444' : '#fff'};
color: ${outline ? 'white' : 'black'};
    height: auto;
    font-size: 15px;
`