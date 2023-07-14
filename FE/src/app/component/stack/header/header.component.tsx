import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'
import InputComponent from '../../parts/input/input.component'
import { ImHome } from "react-icons/im"
import { FaCartPlus } from "react-icons/fa"
interface HeaderComponentProps {
    props?: any
}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
    return (
        <div className='flex items-center justify-between sm:w-[1440px]'>
            <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" className='w-[57px] mr-12 max-sm:hidden' />
            <InputComponent />
            <div className='ml-12 flex align-items:center max-sm:hidden' css={cssWrapperMenu}>
                <div className='item-menu active'>
                    <div className='icon'>
                        <ImHome />
                    </div>
                    <div className='title'>Trang chủ</div>
                </div>

                <div className='item-menu'>
                    <div className='icon'>
                        <ImHome />
                    </div>
                    <div className='title'>Trang chủ</div>
                </div>

                <div className='item-menu'>
                    <div className='icon'>
                        <ImHome />
                    </div>
                    <div className='title'>Trang chủ</div>
                </div>
            </div>
            <div css={cssCartMain}>
                <FaCartPlus />
            </div>

        </div>
    )
}

export default HeaderComponent

const cssWrapperMenu = css`
 .item-menu{
    display: flex;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    justify-content: flex-end;
    .icon{
       margin-right: 4px;
      font-size: 22px;
      
    }
    .title{
        font-weight: 500;
        font-size: 14px;
    }
    &:hover {
        background-color: var(--color-blue-hover);
      }
      &.active {
        color: var(--color-blue-primary);
      }
 }
 
`
const cssCartMain = css`
position: relative;
display: block;
height: 100%;
padding: 8px 14px;
font-size: 22px;
border-radius: 8px;
color: var(--color-blue-primary);
cursor: pointer;
&:hover {
  background-color: var(--color-blue-hover);
}
@media (min-width: 0) and (max-width: 739px) {
    padding: 0;
    margin-left: 10px;
  }
`