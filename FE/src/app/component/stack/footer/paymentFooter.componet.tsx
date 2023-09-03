import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
interface FooterPaymentComponentProps {
  props?: any
}

const FooterPaymentComponent: FunctionComponent<FooterPaymentComponentProps> = () => {
  const [totalPrice, setTotalPrice] = useState<any>(0)
  const {
    data: { listProductBuy },
    actions
  } = useCartRedux()

  useEffect(() => {
    actions.getAllCart()
  }, [])
  useEffect(() => {
    if (listProductBuy) {
      const calculatedTotal = listProductBuy.reduce((total: any, item: any) => total + (item?.product?.price * item?.quantityOrder.quantity), 0);
      setTotalPrice(calculatedTotal);
    }
  }, [listProductBuy]);
  return (
    <>
      <footer css={cssFooter}>
        <div className='h-[70px] sm:w-[1240px] max-md:hidden mx-auto'>
          <p className='terms-text mb-[4px] px-5'>
            Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch chung:
          </p>
          <p className='terms'>
            <a href='https://tiki.vn/quy-che-hoat-dong-sgdtmdt' target='_blank'>
              Quy chế hoạt động
            </a>
            <i></i>
            <a href='https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai' target='_blank'>
              Chính sách giải quyết khiếu nại
            </a>
            <i></i>
            <a href='https://hotro.tiki.vn/s/article/chinh-sach-bao-hanh-tai-tiki-nhu-the-nao' target='_blank'>
              Chính sách bảo hành
            </a>
            <i></i>
            <a href='https://tiki.vn/bao-mat-thanh-toan' target='_blank'>
              Chính sách bảo mật thanh toán
            </a>
            <i></i>
            <a href='https://tiki.vn/bao-mat-thong-tin-ca-nhan' target='_blank'>
              Chính sách bảo mật thông tin cá nhân
            </a>
          </p>
          <p className='copyright mt-[18px] px-5'>© 2019 - Bản quyền của Công Ty Cổ Phần Ki Ki - Kiki.vn</p>
        </div>
      </footer>
      <footer css={cssFooterResponsive} className='md:hidden'>
        <div className='platformCoupon flex items-center justify-between space-between'>
          <div className='coupon-wrapper-left flex items-center'>
            <img
              src='https://salt.tikicdn.com/ts/upload/37/57/9d/17e29064bed5a5115d72e147b1257002.png'
              alt='icon'
              className='mr-[10px]'
              width='18px'
              height='14'
            />
            <span>Kiki khuyến mãi</span>
          </div>
          <div className='coupon-wrapper-right flex items-center'>
            <span>Nhập hoặc chọn mã</span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              color='#787878'
              height='20'
              width='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
            </svg>
          </div>
        </div>
        <div className='paymentBlock'>
          <div className='freeship-lable'>
            <img
              src='https://salt.tikicdn.com/ts/upload/70/f9/77/3b172be9ee58c8104fe8a4d40c4f5633.png'
              alt=''
              width='81'
            />{' '}
            đã được áp dụng!
          </div>
          <div className='left'>
            <div className='left-title'>Tổng cộng</div>
            <div className='left-total'>{totalPrice?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
          </div>
          <div className='right'>
            <button className='right-btn'>Đặt Hàng</button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterPaymentComponent

const cssFooter = css`
  margin: auto;
  margin-top: 16px;
  padding-top: 50px;
  padding-bottom: 40px;
  font-size: 12px;
  line-height: 16px;
  font-weight: normal;
  color: rgb(128, 128, 137);
  background-color: rgb(245, 245, 250);
  font-family: var(--ff-beviet);
  font-size: 1.4rem;

  @media (min-width: 0) and (max-width: 739px) {
    max-width: 100%;
    position: absolute;
  }
  .terms i {
    border: 1px solid rgb(221, 221, 227);
  }

  .terms a {
    padding: 0 12px;
  }
  .terms a:fist-child {
    padding-right: 12px;
    padding-left: 0;
  }
`
const cssFooterResponsive = css`
  .platformCoupon {
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 90px;
    z-index: 13;
    font-size: 13px;
    line-height: 20px;
    background: rgb(255, 255, 255);
    padding: 12px 16px;
    box-shadow: rgb(242, 242, 242) 0px 1px 0px inset;
  }
  .coupon-wrapper-right {
    width: calc(100% - 120px);
    color: rgb(120, 120, 120);
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .paymentBlock {
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 90px;
    padding: 9px 16px 34px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgb(242, 242, 242) 0px 1px 0px inset;
    z-index: 13;
    flex-wrap: wrap;
  }
  .freeship-lable {
    font-size: 14px;
    line-height: 20px;
    color: rgb(56, 56, 61);
    margin-bottom: 4px;
    flex-shrink: 0;
    flex-basis: 100%;
    font-weight: 600;
  }
  .freship-lable img {
    display: inline-block;
    margin-right: 5px;
  }
  .left-title {
    color: rgb(36, 36, 36);
    font-size: 13px;
    line-height: 20px;
  }
  .left-total {
    color: rgb(255, 66, 78);
    font-size: 20px;
    line-height: 28px;
  }
  .right-btn {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 66, 78);
    border-radius: 4px;
    width: 136px;
    height: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`
