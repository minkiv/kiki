import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { BsShopWindow } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
interface leftCartProps {
  props?: any
}

const LeftCart: FunctionComponent<leftCartProps> = () => {
  return (
    <div css={cssLeftCart}>
      <div className='style-heading mb-[20px] flex  justify-between max-sm:mt-5'>
        <div className='flex'>
          <input type='checkbox' className='sm:w-[18px] max-sm:w-[17px] max-sm:h-[17px] sm:mr-[5px]' />
          <span className='lable sm:mr-[290px] max-sm:ml-3'>Tất cả (2 sản phẩm)</span>
        </div>

        {/* <div className='sm:flex justify-between w-[20%]'> */}
        <span className='taitle-table mr-[100px]'>Đơn giá</span>
        <span className='taitle-table mr-[70px]'>Số lượng</span>
        {/* </div> */}
        <span className='taitle-table mr-[90px]'>Thành tiền</span>
        <span className='remove-all'>
          <RiDeleteBinLine size={17} className='delete-icon sm:mr-4 max-sm:mr-5' />
        </span>
      </div>

      {/*  */}
      <div className='container'>
        <div className='sub-title sm:flex max-sm:flex px-6  py-3'>
          <input type='checkbox' className='w-[18px] mr-3' />
          <BsShopWindow className='icon-home w-6 h-6 mr-2' />

          <a href='#'>Shop Name</a>
        </div>
        <div className='box items-center sm:flex max-sm:flex justify-between text-center mr-auto py-4'>
          <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />

          <div className='sm:flex max-sm:flex items-center max-sm:mr-1'>
            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='#' className='max-sm:mr-5'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices '>156.000 ₫</span>

          <div className='sm:flex w-[20%] justify-between max-sm:mr-7 '>
            <p className=''>Số lượng</p>
            <span className='product-final-prices'>156.000 ₫</span>
          </div>

          <span className='product-delete'>
            <RiDeleteBinLine size={17} className='delete-icon mr-11' />
          </span>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='sub-title sm:flex max-sm:flex px-6  py-3'>
          <input type='checkbox' className='w-[18px] mr-3' />
          <BsShopWindow className='icon-home w-6 h-6 mr-2' />

          <a href='#'>Shop Name</a>
        </div>
        <div className='box items-center sm:flex max-sm:flex justify-between text-center mr-auto py-4'>
          <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />

          <div className='sm:flex max-sm:flex items-center max-sm:mr-1'>
            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='#' className='max-sm:mr-5'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices '>156.000 ₫</span>

          <div className='sm:flex w-[20%] justify-between max-sm:mr-7 '>
            <p className=''>Số lượng</p>
            <span className='product-final-prices'>156.000 ₫</span>
          </div>

          <span className='product-delete'>
            <RiDeleteBinLine size={17} className='delete-icon mr-11' />
          </span>
        </div>
        <div className='box items-center sm:flex max-sm:flex justify-between text-center mr-auto py-4'>
          <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />

          <div className='sm:flex max-sm:flex items-center max-sm:mr-1'>
            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='#' className='max-sm:mr-5'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices '>156.000 ₫</span>

          <div className='sm:flex w-[20%] justify-between max-sm:mr-7 '>
            <p className=''>Số lượng</p>
            <span className='product-final-prices'>156.000 ₫</span>
          </div>

          <span className='product-delete'>
            <RiDeleteBinLine size={17} className='delete-icon mr-11' />
          </span>
        </div>
      </div>
    </div>
  )
}
export default LeftCart

const cssLeftCart = css`
  .style-heading {
    background-color: var(--color-white);
    padding: 9px 16px;
    border-radius: 4px;
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 12px;
    top: 105px;
    z-index: 99;
  }
  .box {
    background-color: var(--color-white);
  }
  .sub-title {
    background-color: var(--color-white);
    margin-button: 20px;
    border-radius: 4px;
  }
  .sellername {
    font-size: 15px;
    color: rgb(36, 36, 36);
    font-weight: 500;
  }
  .product-final-prices {
    color: red;
  }
  .delete-icon:hover {
    color: red;
  }

  // Mobile: w< 740px
  @media only screen and (max-width: 739px) {
    .style-heading {
      display: flex;
      -webkit-box-pack: justify;
      ustify-content: space-between;
      top: 122px;
      left: 0px;
      width: 100%;
      z-index: 5;
      background: rgb(255, 255, 255);
      padding: 11px 16px;
    }
    .taitle-table {
      display: none;
    }
    .real-prices {
      display: none;
    }
  }
`
