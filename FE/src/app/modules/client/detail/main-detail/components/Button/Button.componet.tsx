import { type } from 'os'
import React, { Children, FunctionComponent } from 'react'
import { css } from '@emotion/react'
interface ButtonComponent{
    props?: any
    className?: string,
    children?: React.ReactNode
    outline?: boolean
}

const ButtonComponent:FunctionComponent<ButtonComponent> = ({children, className, outline =false}) => {
  return (
    <button  css={cssButton(outline)} className={className}>
        {children}
    </button>
  )
}

export default ButtonComponent
const cssButton =(outline: boolean)=> css`
background-color: ${outline ? '#EF4444' : '#fff'};
color: ${outline ? 'white' : '#2597F3'};
    height: 50px;
    font-size: 15px;
`