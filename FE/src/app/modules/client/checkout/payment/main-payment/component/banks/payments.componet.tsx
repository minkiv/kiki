import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
interface PaymentsProps {
  props?: any
}

const Payments: FunctionComponent<PaymentsProps> = () => {
  return (
    <div>
      <div css={delivercss} className='w-[463px] max-md:hidden'>
        <h3>Chọn hình thức thanh toán</h3>
        <div className='method-list'>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly checked value='cod' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/92/b2/78/1b3b9cda5208b323eb9ec56b84c7eb87.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' readOnly name='payment-method' value='viettelpay' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px]'
                  src='https://salt.tikicdn.com/ts/upload/5f/f9/75/d7ac8660aae903818dd7da8e4772e145.png'
                  width='32'
                  height='32'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán bằng ví Viettel Money</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly value='momo' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/ce/f6/e8/ea880ef285856f744e3ffb5d282d4b2d.jpg'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán bằng ví MoMo</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly value='zalopay' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/2f/43/da/dd7ded6d3659036f15f95fe81ac76d93.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán bằng ví Zalo</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly value='vnpay' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/77/6a/df/a35cb9c62b9215dbc6d334a77cda4327.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán bằng VNPAY</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly value='atm' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/de/61/37/aa26390d87be2ae0d5f1051ce59b3b90.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
        </div>
      </div>
      <div css={respaymentcss} className='md:hidden'>
        <div className='block-header mb-[16px] flex items-center justify-between space-between'>
          <h3>Phương thức thanh toán</h3>
          <a href='#'>Xem tất cả</a>
        </div>
        <div className='method-list'>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly checked value='cod' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/92/b2/78/1b3b9cda5208b323eb9ec56b84c7eb87.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán tiền mặt</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Payments

const delivercss = css`
  width: 900px;
  padding: 16px;
  background-color: var(--color-white);
  border-radius: 4px;
  font-size: 16px;
  h3 {
    color: rgb(56, 56, 61);
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .method-list {
    position: relative;
  }
  .radio-button {
    align-item: center;
    height: 64px;
    cursor: pointer;
  }

  input[type='radio']:checked + .radio-fake {
    border-color: rgb(11, 116, 229);
  }

  input[type='radio']::before {
    content: '';
    width: 8px;
    height: 8px;
  }
  input[type='radio'] {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    margin: auto 8px;
  }
`
const respaymentcss = css`
  padding: 16px;
  background-color: var(--color-white);
  font-size: 16px;
  h3 {
    color: rgb(56, 56, 61);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .block-header a {
    color: rgb(11, 116, 229);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .method-list {
    position: relative;
    padding: 10px 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    border-radius: 4px;
    width: 327px;
    height: 64px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(240, 248, 255);
    border: 1px solid rgb(11, 116, 229);
  }
  .radio-button {
    align-item: center;
    height: 64px;
    cursor: pointer;
  }

  input[type='radio']:checked + .radio-fake {
    border-color: rgb(11, 116, 229);
  }

  input[type='radio']::before {
    content: '';
    width: 8px;
    height: 8px;
  }
  input[type='radio'] {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    margin: auto 8px;
  }
`
