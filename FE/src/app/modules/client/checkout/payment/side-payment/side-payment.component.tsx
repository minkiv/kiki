import { css } from '@emotion/react'
import { FunctionComponent, useState } from 'react'

interface SidePaymentProps {
  props?: any
}

const SidePayment: FunctionComponent<SidePaymentProps> = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [textContent, setTextContent] = useState('Xem thông tin')

  const handleClick = () => {
    if (isClicked) {
      setTextContent('Xem thông tin')
    } else {
      setTextContent('Thu gọn')
    }
    setIsClicked(!isClicked)
  }
  return (
    <div css={cssSidebar} className=''>
      <div className='sidebar-wrapper p-[16px] mb-4 max-sm:hidden'>
        <div className='block-header'>
          <h3 className='block-header-title'>Giao tới</h3>
          <a href='/checkout/shipping' className='block-header-nav'>
            Thay đổi
          </a>
        </div>
        <div className='customer-info'>
          <p className='customer-info-name'>Nguyễn Thị Hiệp</p> <i></i>
          <p className='customer-info-phone'>0989328421</p>
        </div>
        <div className='address'>
          <span className='address-type flex'>Nhà</span>
          4, ngách 3/8A, Phương Canh, Nam Từ Liêm, Hà Nội
        </div>
      </div>

      {/*  Đơn hàng */}

      <div className='sidebar-wrapper max-sm:hidden'>
        <div className='header'>
          <div className='block-header'>
            <h3 className='block-header-title'>Đơn hàng</h3>
            <a href='/checkout/shipping' className='block-header-nav'>
              Thay đổi
            </a>
          </div>
          <div className='block-header-subtitle flex'>
            <p className='sub-title-text'>4 sản phẩm.</p>
            <p className='sub-title-link ' onClick={handleClick}>
              {textContent}
              <svg
                className='sub-title-link__arrow'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z'
                  fill='#0B74E5'
                ></path>
              </svg>
            </p>
          </div>
        </div>
        {isClicked && (
          <div className='itemLists'>
            <div className='list-container '>
              <div className='item flex items-center justify-between mx-auto'>
                <div className='item-info flex mr-[8px] flex-start'>
                  <div className='item-info-qty'>2x</div>
                  <div className='item-info-name'>
                    Miếng Lót Chuột Phím Tắt Văn Phòng Cao Cấp , Bàn Di Chuột Công Thức , Pad Chuột - 25x30 cm
                  </div>
                </div>
                <div className='item-price'>51.000 đ</div>
              </div>
              <div className='item flex items-center justify-between mx-auto'>
                <div className='item-info flex mr-[8px] flex-start'>
                  <div className='item-info-qty'>2x</div>
                  <div className='item-info-name'>
                    Miếng Lót Chuột Phím Tắt Văn Phòng Cao Cấp , Bàn Di Chuột Công Thức , Pad Chuột - 25x30 cm
                  </div>
                </div>
                <div className='item-price'>51.000 đ</div>
              </div>
            </div>
          </div>
        )}
        <div className='summary'>
          <div className='summary-flexRow'>
            <div className='summary-label'>Tạm tính</div>
            <div className='summary-value'>2.798.000đ</div>
          </div>
          <div className='summary-flexRow'>
            <div className='summary-label'>Phí vận chuyển</div>
            <div className='summary-value'>136.000đ</div>
          </div>
          <div className='summary-flexRow'>
            <div className='summary-label'>
              Khuyễn mãi vận chuyển{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                className='info-icon inline-block'
                aria-describedby='popup-148'
              >
                <path
                  d='M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z'
                  fill='#808089'
                ></path>
                <path
                  d='M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z'
                  fill='#808089'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z'
                  fill='#808089'
                ></path>
              </svg>
            </div>
            <div className='summary-value summary-value-positive'>-65.000đ</div>
          </div>
          <div className='summary-flexRow'>
            <div className='summary-label'>Giảm giá</div>
            <div className='summary-value summary-value-positive'>-152.000đ</div>
          </div>
        </div>
        <div className='styles_Divider'></div>
        <div className='order-total'>
          <div className='order-total-label'>Tổng tiền</div>
          <div className='order-total-value'>
            <div className='order-total-total'>2.717.000 đ</div>
            <div className='order-total-additional-text'>(Đã bao gồm VAT nếu có)</div>
          </div>
        </div>
        <div className='astra-summary'>
          <div className='sub-data'></div>
          <div className='flexRow'>
            <div className='label'>Thưởng Astra*</div>
            <div className='value'>
              <span className='value-main'>
                <svg
                  className='value__astra-icon inline-block'
                  width='16'
                  height='16'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='10' cy='10' r='10' fill='non'></circle>
                  <g clip-path='url(#clip0_17203_537963)'>
                    <path
                      d='M11.4017 8.33958H12.9358L10 1L7.06418 8.33958H8.76754C8.97199 8.33958 9.15584 8.2151 9.23177 8.02527L10 6.1047L10.7054 7.86812C10.8193 8.15286 11.0951 8.33958 11.4017 8.33958Z'
                      fill='url(#paint0_linear_17203_537963)'
                    ></path>
                    <path
                      d='M12.6745 12.7909L10 11.2125L7.3255 12.7909L8.20759 10.5857C8.29842 10.3586 8.21168 10.0992 8.00256 9.97243L6.72163 9.19591L3.5 17.25L10 13.4139L16.5 17.25L13.2784 9.19591L11.9974 9.97243C11.7883 10.0992 11.7016 10.3586 11.7924 10.5857L12.6745 12.7909Z'
                      fill='url(#paint1_linear_17203_537963)'
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_17203_537963'
                      x1='10'
                      y1='6.5'
                      x2='10'
                      y2='17'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#FF424E'></stop>
                      <stop offset='1' stop-color='#5E5CE6'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_17203_537963'
                      x1='10'
                      y1='6.5'
                      x2='10'
                      y2='17'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#FF424E'></stop>
                      <stop offset='1' stop-color='#5E5CE6'></stop>
                    </linearGradient>
                    <clipPath id='clip0_17203_537963'>
                      <rect width='13' height='16.25' fill='white' transform='translate(3.5 1)'></rect>
                    </clipPath>
                  </defs>
                </svg>
                29,43
              </span>
              <span className='value-xu'>≈ 5.291 đ</span>
            </div>
          </div>
        </div>
        <div className='styleWrapper'>
          <p>* Số Astra thực nhận có thể thay đổi theo chính sách thưởng khi nhận hàng</p>
        </div>
        <div className='freeship-plus'>
          <img
            src='https://salt.tikicdn.com/ts/upload/70/f9/77/3b172be9ee58c8104fe8a4d40c4f5633.png'
            alt=''
            className='inline-block w-[81px] mr-[5px]'
          />
          đã được áp dụng!
        </div>
        <div className='flexRow'>
          <button className='button-order'>Đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default SidePayment

const cssSidebar = css`
  width: 320px;
  top: 0px;

  .sidebar-wrapper {
    background-color: var(--color-white);
    border-radius: 4px;
  }
  .header {
    padding: 16px;
    border-bottom: 1px solid rgb(235, 235, 240);
  }
  .block-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .block-header-title {
    color: rgb(128, 128, 137);
    font-weight: normal;
  }
  .block-header-nav {
    color: rgb(11, 116, 229);
  }
  .customer-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(56, 56, 61);
    margin-bottom: 2px;
    font-weight: 600;
  }
  .customer-info i {
    display: block;
    width: 1px;
    height: 20px;
    background-color: rgb(235, 235, 240);
    margin: 0px 8px;
  }
  .address {
    color: rgb(128, 128, 137);
    font-weight: normal;
  }
  .address-type {
    color: rgb(0, 171, 86);
    background-color: rgb(239, 255, 244);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding: 0px 6px;
    border-radius: 100px;
    margin-right: 4px;
    height: 18px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .sub-title-text {
    color: rgb(128, 128, 137);
    font-weight: 400;
    margin: 0px 4px 0px 0px;
  }
  .sub-title-link {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(11, 116, 229);
    font-weight: 400;
    margin: 0px;
    cursor: pointer;
  }
  .sub-title-link__arrow {
    transform: rotate(90deg);
    transition-duration: 0.5s;
  }
  .summary {
    padding: 8px 16px;
    display: grid;
    gap: 4px;
    font-size: 14px;
    line-height: 20px;
  }
  .summary-label {
    color: rgb(128, 128, 137);
  }
  .summary-flexRow,
  .order-total,
  .flexRow {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .summary-value-positive {
    color: rgb(0, 171, 86);
  }
  .styles_Divider {
    width: calc(100% - 32px);
    height: 1px;
    background-color: rgb(235, 235, 240);
    margin: 0px auto;
  }
  .order-total {
    padding: 8px 16px;
  }
  .order-total-label {
    font-size: 14px;
    line-height: 20px;
    color: rgb(56, 56, 61);
  }
  .order-total-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .order-total-total {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: rgb(255, 66, 78);
  }
  .order-total-additional-text {
    font-size: 12px;
    line-height: 16px;
    color: rgb(128, 128, 137);
  }
  .astra-summary {
    background-color: rgb(242, 240, 254);
    padding: 12px;
    border-radius: 8px;
    margin: 0 16px 8px;
  }
  .label {
    color: rgb(64, 45, 161);
  }
  .value {
    text-align: right;
  }
  .value-main {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: end;
    font-weight: 500;
    color: rgb(111, 85, 237);
  }
  .value-xu {
    display: block;
    font-size: 12px;
    color: rgb(128, 128, 137);
  }
  .styleWrapper {
    margin: 0 16px 12px;
    display: grid;
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(100, 100, 109);
  }
  .freeship-plus {
    padding: 0px 16px 12px;
    font-weight: 600;
  }
  .button-order {
    margin: 0px 16px 16px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 66, 78);
    border: none;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 44px;
    outline: 0px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
  }
  .list-container {
    border-bottom: 1px solid rgb(235, 235, 240);
    padding: 12px 16px;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 12px;
    display: grid;
    gap: 4px;
  }
  .item-info-qty {
    width: 30px;
    margin-right: 8px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .item-info-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    max-width: 156px;
    font-weight: 400;
  }
  .item-price {
    font-weight: 600;
  }
`
