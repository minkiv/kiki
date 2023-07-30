import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
interface DeliverPaymentProps {
  props?: any
}

const DeliverPayment: FunctionComponent<DeliverPaymentProps> = () => {
  return (
    <div css={delivercss}>
      <h3>Chọn hình thức giao hàng</h3>
      <div className='method-list'>
        <div className='shipping-method-list p-4 w-[463px]'>
          <div className='justify-between my-3'>
            <label htmlFor='radioButton'>
              <input type='radio' name='shipping-method' value={1} checked />
              <span className='lable'>
                <div className='styleLable inline-block px-2 py-0'>
                  <span className='method-logo'>FAST </span>
                  <span className='method-text'>Giao Tiết Kiệm </span>
                  <span className='freeship-badge'>-65K</span>
                </div>
              </span>
            </label>
          </div>
        </div>
        <img
          className='methods-arrow'
          src='https://salt.tikicdn.com/ts/upload/05/9e/d8/f13e86df128f19d197397e44924f9616.png'
          width='32'
        ></img>
      </div>
      <div className='shipments'>
        <div className='shippingPackage'>
          <div className='packageLeadTime'>
            <div className='package-title'>
              <img
                width='24'
                className='inline-block'
                height='24'
                alt='icon'
                src='https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png'
              />
              Gói : Giao vào Thứ Hai, 31/07
            </div>
          </div>
          <div className='left-content mr-[46px] sm:w-[482px]'>
            <div className='package-summary flex items-center justify-between mx-auto'>
              <div className='delivery-method'>
                <span className='method-logo'>FAST </span>
                <span className='method-text'>Giao Tiết Kiệm </span>
              </div>
              <div className='freeShipping-fee flex'>
                <del className='original-fee'>136.000 đ </del> &nbsp;
                <span className='current-fee'> 71.000 đ </span>
                <div className='tooltip inline-block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='info-icon'
                    aria-describedby='popup-129'
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
                  <span className='tooltiptext'>
                    <div className='detail-item'>
                      <div className='detail-item-label'>Phí ban đầu</div>
                      <div className='detail-item-value'>136.000 đ</div>
                    </div>
                    <div className='detail-item'>
                      <div className='detail-item-label'>Khuyến mãi vận chuyển</div>
                      <div className='detail-item-value'>-65.000 đ</div>
                    </div>
                    <div className='detail-item detail-item-last'>
                      <div className='detail-item-label'>Phí còn lại</div>
                      <div className='detail-item-value'>71.000 đ</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className='package-item-list'>
              <div className='packageItem flex py-[12px]'>
                <div className='item-icon inline-block mr-[8px]'>
                  <img
                    src='https://salt.tikicdn.com/cache/96x96/ts/product/47/e6/dc/f8efc9eeba9f708e6908404ddcda0755.jpg'
                    alt='icon'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='item-info'>
                  <div className='item-info-firstLine'>
                    <span
                      className='item-info_product-name'
                      title='Ghế xoay văn phòng công thái học ergonomic có ngả lưng Premium 02, ghế xoay Gaming cao cấp nhập
                      khẩu'
                    >
                      Ghế xoay văn phòng công thái học ergonomic có ngả lưng Premium 02, ghế xoay Gaming cao cấp nhập
                      khẩu
                    </span>
                  </div>
                  <div className='item-info-secondLine flex items-center justify-between  mx-auto'>
                    <div className='item-info_qty'>SL: x2</div>
                    <div className='item-info_price'>1.348.000 đ</div>
                  </div>
                </div>
              </div>
              <div className='packageItem flex py-[12px]'>
                <div className='item-icon inline-block mr-[8px]'>
                  <img
                    src='https://salt.tikicdn.com/cache/96x96/ts/product/47/e6/dc/f8efc9eeba9f708e6908404ddcda0755.jpg'
                    alt='icon'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='item-info'>
                  <div className='item-info-firstLine'>
                    <span
                      title='Ghế xoay văn phòng công thái học ergonomic có ngả lưng Premium 02, ghế xoay Gaming cao cấp nhập
                      khẩu'
                      className='item-info_product-name'
                    >
                      Ghế xoay văn phòng công thái học ergonomic có ngả lưng Premium 02, ghế xoay Gaming cao cấp nhập
                      khẩu
                    </span>
                  </div>
                  <div className='item-info-secondLine flex items-center justify-between  mx-auto'>
                    <div className='item-info_qty'>SL: x2</div>
                    <div className='item-info_price'>1.348.000 đ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-content'>
            <div className='fullfillments'>
              <svg
                className='fulfillment-icon mr-[8px]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5V6.75H16.5C16.8442 6.75 17.1441 6.98422 17.2276 7.3181L17.8939 9.98345L20.5854 11.3292C20.8395 11.4562 21 11.7159 21 12V16.5C21 16.9142 20.6642 17.25 20.25 17.25H17.25C17.25 18.9069 15.9069 20.25 14.25 20.25C12.5931 20.25 11.25 18.9069 11.25 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM12.8306 16.7635C12.834 16.7546 12.8372 16.7455 12.8402 16.7364C13.0499 16.1609 13.602 15.75 14.25 15.75C14.898 15.75 15.4501 16.1609 15.6598 16.7364C15.6628 16.7455 15.666 16.7546 15.6694 16.7635C15.7216 16.9161 15.75 17.0797 15.75 17.25C15.75 18.0784 15.0784 18.75 14.25 18.75C13.4216 18.75 12.75 18.0784 12.75 17.25C12.75 17.0797 12.7784 16.9161 12.8306 16.7635ZM16.8487 15.75C16.3299 14.8533 15.3604 14.25 14.25 14.25C13.1396 14.25 12.1701 14.8533 11.6513 15.75H11.25V8.25H15.9144L16.5224 10.6819C16.5755 10.8943 16.7188 11.0729 16.9146 11.1708L19.5 12.4635V15.75H16.8487ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H3.75C3.33579 9 3 8.66421 3 8.25ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V10.5H15C15.4142 10.5 15.75 10.8358 15.75 11.25C15.75 11.6642 15.4142 12 15 12H13.5C13.0858 12 12.75 11.6642 12.75 11.25V9.75C12.75 9.33579 13.0858 9 13.5 9ZM4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12ZM6 15.75C6 15.3358 6.33579 15 6.75 15H7.5C7.91421 15 8.25 15.3358 8.25 15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z'
                  fill='#38383D'
                ></path>
              </svg>
              <p className='fullfillment-text'>Được giao bởi Tanni Ghế Xoay Làm Việc Văn Phòng</p>
            </div>
          </div>
        </div>
      </div>
      <div className='sellerCoupons cursor-pointer flex mt-[20px]'>
        <div className='seller-coupons-heading flex'>
          <span className='seller-coupon-heading-title inline-block mr-[10px] my-auto'>Shop khuyến mãi</span>

          <div className='seller-coupons-heading_hint flex'>
            <div className='smallCoupons'>
              <div className='inner w-[49px] mr-[16px]'>
                <i className='semicircle semicircle--left'></i>
                <i className='semicircle semicircle--right'></i>
                <img
                  src='https://salt.tikicdn.com/ts/upload/5c/50/ce/bab71210dd41a417824c5844420306e2.jpg'
                  alt='icon'
                  className='icon'
                ></img>
                <div className='content'>50K</div>
              </div>
            </div>
          </div>
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            className='more'
            color='#787878'
            height='24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DeliverPayment

const delivercss = css`
  width: 900px;
  padding: 16px;
  background-color: var(--color-white);
  border-radius: 4px;
  h3 {
    color: rgb(56, 56, 61);
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .method-list {
    margin-bottom: 56px;
    position: relative;
  }
  .shipping-method-list {
    background: rgb(240, 248, 255);
    border: 1px solid rgb(194, 225, 255);
    border-radius: 10px;
    padding: 16px;
    display: grid;
    row-gap: 12px;
  }
  .method-logo {
    color: #ffb700;
    font-weight: 700;
  }
  .freeship-badge {
    background-color: rgb(255, 255, 255);
    align-items: center;
    color: rgb(0, 171, 86);
    padding: 0px 4px;
    margin-left: 4px;
    border-radius: 4px;
  }
  .methods-arrow {
    z-index: 1;
    position: absolute;
    bottom: -10px;
    margin-left: 210px;
  }
  .shippingPackage {
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 227);
    margin-top: 20px;
    padding: 20px 16px 16px;
    position: relative;
    display: flex;
    z-index: 0;
  }
  .packageLeadTime {
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    color: rgb(7, 148, 73);
    padding: 0px 4px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: -12px;
    left: 12px;
  }
  .package-summary {
    margin-top: 8px;
  }
  .original-fee {
    color: rgb(128, 128, 137);
  }
  .item-info {
    font-size: 14px;
    line-height: 20px;
    color: rgb(128, 128, 137);
    flex: 1 1 0%;
  }
  .item-info_price {
    color: rgb(56, 56, 61);
    font-weight: 500;
  }
  .item-info_product-name {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .fullfillments {
    display: flex;
    width: 100%;
    align-items: flex-start;
    background: rgb(245, 245, 250);
    border-radius: 8px;
    padding: 8px 16px;
  }
  .fullfillment-text {
    margin: 0px;
    font-size: 14px;
    line-height: 20px;
    color: rgb(128, 128, 137);
  }
  .inner {
    border: 1px solid rgb(13, 92, 182);
    border-radius: 4px;
    height: 24px;
    background-color: rgb(240, 248, 255);
    position: relative;
  }
  .inner .semicircle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  .inner .semicircle--left {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(13, 92, 182) rgb(13, 92, 182) rgb(255, 255, 255) rgb(255, 255, 255);
    left: -6px;
    transform: translateY(-50%) rotate(45deg);
  }
  .inner .semicircle--right {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(13, 92, 182) rgb(13, 92, 182);
    right: -6px;
    transform: translateY(-50%) rotate(45deg);
  }
  .inner .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: -5px;
    top: -5px;
    display: inline-block;
  }
  .inner .content {
    padding: 0px 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    color: rgb(13, 92, 182);
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 239px;
    background-color: rgb(11, 116, 229);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 12px;
    position: absolute;
    z-index: 1;
    top: 115%;
    right: -113px;
    opacity: 0;
    transition: opacity 2s;
  }
  .tooltip .tooltiptext::after {
    content: ' ';
    position: absolute;
    bottom: 100%; /* mũi tên ở phía trên của tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgb(11, 116, 229) transparent;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .detail-item {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    margin-bottom: 4px;
    font-size: 12px;
  }
  .detail-item-last {
    border-top: 1px solid white;
    padding-top: 5px;
  }
`
