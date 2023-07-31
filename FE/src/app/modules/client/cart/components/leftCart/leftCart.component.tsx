import { css } from '@emotion/react'
import { FunctionComponent } from 'react'

interface leftCartProps {
  props?: any
}

const LeftCart: FunctionComponent<leftCartProps> = () => {
  return (
    <div css={cssLeftCart}>
      <div className='style-heading mb-[20px] flex justify-between px-2'>
        <input type='checkbox' className='w-[18px]' />
        <span className='lable'>Tất cả (2 sản phẩm)</span>
        <span>Đơn giá</span>
        <span>Số lượng</span>
        <span>Thành tiền</span>
        <span className='remove-all'>
          <img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg' alt='deleted' />
        </span>
      </div>

      {/*  */}
      <div className='container'>
        <div className='sub-title flex px-6  py-3 '>
          <input type='checkbox' className='w-[18px] mr-3' />

          <img
            src='https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png'
            alt=''
            className='icon-home w-6 h-6 mr-2'
          />
          <a href='#' className='sellername'>
            Shop Name
          </a>
        </div>
        <div className='box flex justify-between text-center mr-auto py-4'>
          <div className='product-img flex px-[3px] '>
            
              <input type='checkbox' className='w-[18px] mr-3 ml-5' />
          

            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='' className='product-name'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices'>156.000 ₫</span>
          Số Lượng
          <span className='product-final-prices'>156.000 ₫</span>
          <span className='product-delete'>
            <img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg' alt='deleted' className='px-6'  />
          </span>
        </div>
        
      </div>
      <div className='container mt-5'>
        <div className='sub-title flex px-6  py-3 '>
          <input type='checkbox' className='w-[18px] mr-3' />

          <img
            src='https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png'
            alt=''
            className='icon-home w-6 h-6 mr-2'
          />
          <a href='#' className='sellername'>
            Shop Name
          </a>
        </div>
        <div className='box flex justify-between text-center mr-auto py-4'>
          <div className='product-img flex px-[3px] '>
            
              <input type='checkbox' className='w-[18px] mr-3 ml-5' />
          

            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='' className='product-name'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices'>156.000 ₫</span>
          Số Lượng
          <span className='product-final-prices'>156.000 ₫</span>
          <span className='product-delete'>
            <img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg' alt='deleted' className='px-6'  />
          </span>
        </div>
        <div className='box flex justify-between text-center mr-auto'>
          <div className='product-img flex px-[3px] '>
            
              <input type='checkbox' className='w-[18px] mr-3 ml-5' />
          

            <img
              src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
              alt=''
              className='w-[76px] h-20'
            />

            <a href='' className='product-name'>
              The Magic - Phép màu
            </a>
          </div>
          <span className='real-prices'>156.000 ₫</span>
          Số Lượng
          <span className='product-final-prices'>156.000 ₫</span>
          <span className='product-delete'>
            <img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg' alt='deleted' className='px-6'  />
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
  }
  
  .style-heading {
    padding: 9px 16px;
    border-radius: 4px;
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 12px;
    top: 105px;
    z-index: 99;
  }
  .box{
    background-color: var(--color-white);

  }
  .sub-title{
    background-color: var(--color-white);
    margin-button: 20px;
    border-radius: 4px;
  }
  .sellername {
    font-size: 15px;
    color: rgb(36, 36, 36);
    font-weight: 500;
  }
.product-final-prices{
  color: red;
}
  // chỉnh màu img remove
.product-delete img: hover{
  filter: brightness(100%) hue-rotate(0deg) saturate(100%) sepia(100%) hue-rotate(0deg) saturate(100000%) brightness(100%);
}
.remove-all img: hover{
  filter: brightness(100%) hue-rotate(0deg) saturate(100%) sepia(100%) hue-rotate(0deg) saturate(100000%) brightness(100%);
}
`
