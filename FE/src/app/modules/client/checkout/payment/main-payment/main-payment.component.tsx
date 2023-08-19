import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import DeliverPayment from './component/deliver/deliver.component'
import Payments from './component/banks/payments.componet'

interface MainPaymentProps {
  props?: any
}

const MainPayment: FunctionComponent<MainPaymentProps> = () => {
  return (
    <div css={cssmain}>
      <div className=' sidebar-wrapper p-[16px] mb-4 md:hidden flex items-center justify-between'>
        <div className='user-block'>
          <div className='customer-info'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              color='#0B74E5'
              height='18'
              width='18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
            </svg>
            <p className='customer-info-name'>Nguyễn Thị Hiệp</p> <i></i>
            <p className='customer-info-phone'>0989328421</p>
          </div>
          <div className='address'>
            <span className='address-type flex'>Nhà</span>
            4, ngách 3/8A, Phương Canh, Nam Từ Liêm, Hà Nội
          </div>
        </div>
        <div className='arrow-nav'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            color='#787878'
            height='24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
          </svg>
        </div>
      </div>
      <div className='item-list-slider'>
        <DeliverPayment />
      </div>
      <div className='item-list-slider'>
        <Payments />
      </div>
      <div className=' sidebar-wrapper p-[16px] mb-4 md:hidden'>
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
        <div className='row last-row flex items-center justify-between space-between'>
          <div className='last-row-title'>Tổng cộng</div>
          <div className='last-row-value'>222.640đ</div>
        </div>
      </div>
      <div className='lazy-load md:hidden'>
        <p className='lazy-load-message'>
          Bằng việc tiến hành đặt mua, bạn đồng ý với &nbsp;
          <a href='#'>Điều kiện giao dịch chung</a>
        </p>
      </div>
    </div>
  )
}

export default MainPayment

const cssmain = css`
  height: 100%;

  overflow-x: hidden;
  .item-list-slider {
    margin-bottom: 20px;
  }
  @media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
  .sidebar-wrapper {
    background-color: var(--color-white);
  }
  .customer-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 15px;
    line-height: 24px;
    color: rgb(36, 36, 36);
    margin-bottom: 2px;
    font-weight: 500;
  }
  .customer-info-name {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: 5px;
  }
  .customer-info i {
    display: block;
    width: 1px;
    height: 20px;
    background-color: rgb(235, 235, 240);
    margin: 0px 8px;
  }
  .address {
    font-size: 13px;
    line-height: 20px;
    color: rgb(120, 120, 120);
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
  .summary {
    display: grid;
    gap: 4px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
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
  .row.last-row {
    padding-top: 8px;
    border-top: 1px solid rgb(242, 242, 242);
  }
  .lazy-load {
    position: relative;
    margin-bottom: 134px;
    margin-top: -8px;
    padding: 8px 16px;
  }
  .lazy-load-message {
    font-size: 12px;
    line-height: 16px;
    padding: 0px;
    margin: 5px 0px 0px;
    color: rgb(120, 120, 120);
  }
  .lazy-load-message a {
    color: rgb(11, 116, 229);
  }
`
