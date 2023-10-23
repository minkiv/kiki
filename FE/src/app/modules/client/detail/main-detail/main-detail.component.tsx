import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import ProductAddress from './components/product-address/product-address.component'
import PreviewImg from './components/preview-img/preview.img.component'
import DetailInformation from './components/detail-information/detail.infomation.component'
import ListSeenProduct from './components/list-seen-product/list-seen-product.component'
import ListSimilarProduct from './components/list-similar-product/list-similar-product.component'
interface MainDetailProps {
  props?: any
}

const MainDetail: FunctionComponent<MainDetailProps> = () => {
  return (
    <div css={cssmain}>
      <div className='grid xl:grid-cols-7 bg-white sm:grid-cols-12'>
        <div className='xl:col-span-3 sm:grid-cols-7 '>
          <PreviewImg />
        </div>
        <div className='md:col-span-4 sm:grid-cols-5 '>
          <DetailInformation />
        </div>
      </div>
      <div className='item-list-silder mt-5'>
        <ListSimilarProduct />
      </div>
      <div className='item-list-silder mt-5'>
        <ListSeenProduct />
      </div>
      <div className='banner mt-[70px]'>
        <img src='https://pubcdn.ivymoda.com/files/news/2023/09/20/98aeda6d6c19f27a692226be8a0fb3a0.jpg' alt='' />
      </div>
    </div>
  )
}

export default MainDetail
const cssmain = css`
  height: 100%;
  position: sticky;
  width: 80%;
  margin: 0 auto;
  overflow-x: hidden;
  .item-list-slider {
    margin-bottom: 20px;
  }
  .banner img {
    border-radius: 80px 0;
  }
  @media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
`
