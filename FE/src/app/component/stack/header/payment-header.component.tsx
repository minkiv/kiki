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
    <div className='header-responsive '>
      <div className='max-sm:px-[10px]  sm:px-[50px]  bg-white'>
        <div className='flex items-center py-3 justify-between w-[1240px] h-[100px] mx-auto max-md:hidden '>
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
      </div>
      <div className='py-3 px-8 flex items-center justify-between md:hidden h-[56px] mx-auto' css={cssMobile}>
        <button>
          <img
            alt='back'
            src='https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg'
            width={'20px'}
            height={'20px'}
          />
        </button>
        <div className='verify'>Xác Nhận Đơn Hàng</div>
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
const cssMobile = css`
  background-color: rgb(27, 168, 255);
  .verify {
    color: rgb(255, 255, 255);
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 0%;
    text-align: center;
    padding-right: 40px;
  }
`
