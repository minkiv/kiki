import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'
import { FaFacebook, FaYoutube, FaTelegram } from 'react-icons/fa'

interface FooterPaymentComponentProps {
  props?: any
}

const FooterPaymentComponent: FunctionComponent<FooterPaymentComponentProps> = () => {
  return (
    <footer css={cssFooter}>
      <div className='h-[70px] sm:w-[1240px] mx-auto'>
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
