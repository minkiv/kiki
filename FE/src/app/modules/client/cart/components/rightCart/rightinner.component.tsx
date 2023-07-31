import { css } from '@emotion/react'
import { FunctionComponent } from 'react'

interface RightCartProps {
  props?: any
}

const RightCart: FunctionComponent<RightCartProps> = () => {
  return (
    <div css={cssRightCart}>
      <div className='information'>
        <div className='block-header flex'>
          <p className='title-right px-4'>Giao tới</p>
          <a href='#' className='nav py-[16px] ml-52'>
            Thay đổi
          </a>
        </div>
        <div className='info flex justify-between'>
          <p className='name px-4'>Phan Huy Hiệp</p>
          <i></i>
          <p className='phoneNumber mr-16'>0971080029</p>
        </div>

        <div className='address flex px-4 py-4'>
          <span className='home'>Nhà</span>
          <p>Phường Cổ Nhuế 2, Quận Bắc Từ Liêm, Hà Nội</p>
        </div>
      </div>
      <div className='prices-item'>
        <ul className='price'>
          <li className='flex justify-between py-5'>
            <div className='text'>Tạm tính</div>
            <div className='value'>156.000đ</div>
          </li>
          <li className='flex justify-between'>
            <div className='text'>Giảm giá</div>
            <div className='value'>0đ</div>
          </li>
        </ul>
        <div className='prices-total flex justify-between'>
          <span className='text-total'>Tổng tiền</span>
          <div className='content'>
            <p className='price-total'>156.000 ₫</p>
            <p className='note pt-2'>(Đã bao gồm VAT nếu có)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightCart

const cssRightCart = css`
  .information {
    border-radius: 4px;
    margin-bottom: 12px;
    background-color: var(--color-white);
  }
  .prices-item {
    border-radius: 4px;
    margin-bottom: 12px;
    background-color: var(--color-white);
  }
  i {
    display: block;
    width: 1px;
    height: 13px;
    background-color: rgb(235, 235, 240);
    margin: 1px 8px;
  }

  .price-total {
    color: rgb(254, 56, 52);
    font-size: 22px;
    font-weight: 400;
    text-align: right;
  }
  .note {
    font-weight: 300;
    font-style: normal;
    display: block;
    font-size: 12px;
    color: rgb(51, 51, 51);
    margin-top: 3px;
    text-align: right;
  }
  .address .home {
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
  .address p {
    color: rgb(128, 128, 137);
  }
  .title-right {
    color: rgb(128, 128, 137);
    font-weight: normal;
    margin: 0px;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .nav {
    color: rgb(11, 116, 229);
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
  }
  .name {
    text-transform: uppercase;
  }
  .price {
    list-style: none;
    margin: 0px;
    padding: 17px 20px;
    border-bottom: 1px solid rgb(244, 244, 244);
  }
  .prices-total {
    padding: 17px 20px;
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
  }
`
