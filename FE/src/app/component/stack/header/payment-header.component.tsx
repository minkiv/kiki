import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'
import InputComponent from '../../parts/input/input.component'
import { ImHome } from 'react-icons/im'
import { FaCartPlus } from 'react-icons/fa'
interface PaymentHeaderComponentProps {
  props?: any
}

const PaymentHeaderComponent: FunctionComponent<PaymentHeaderComponentProps> = () => {
  return (
    <div className='flex items-center justify-between sm:w-[1240px] h-[100px] mx-auto'>
      <div className='logo flex' css={cssLogo}>
        <img
          src='https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png'
          className='w-[60px] h-[40px] '
        />
        <span className='divider'></span>
        <span className='title'>Thanh toán</span>
      </div>

      <div className='ml-12 flex align-items:center max-sm:hidden'>
        <img
          src='https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png'
          className='w-[185px] h-[56px] '
          alt='hotline'
        />
      </div>
    </div>
  )
}

export default PaymentHeaderComponent

const cssLogo = css`
  .divider {
    width: 1px;
    height: 43px;
    background-color: rgb(26, 148, 255);
    margin: 0px 16px;
    display: block;
  }
  .title {
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    color: rgb(26, 167, 255);
  }
`
