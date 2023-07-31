import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import ProductAddress from './components/product-address/product-address.component'
import PreviewImg from './components/preview-img/preview.img.component'
import DetailInformation from './components/detail-information/detail.infomation.component'
import DetailProduct from './components/details-product/details-product.component'
import Listproduct from './components/list-product/list-product.component'
import Description from './components/decription/description.component'
interface MainDetailProps {
    props?: any
}

const MainDetail: FunctionComponent<MainDetailProps> = () => {
  return (
    <div css={cssmain}>
        <div className='item-list-silder'>
            <ProductAddress/>
        </div>
        <div className="grid grid-cols-7 bg-white mt-3">
           <div className="col-span-3">
            <PreviewImg/>
          </div>
          <div className="col-span-4">
            <DetailInformation/>
          </div>
        </div>
        <div className='item-list-silder mt-5'>
          <Listproduct/>
        </div>
        <div className='item-list-silder mt-5'>
          <DetailProduct/>
        </div>
        <div className='item-list-silder mt-5'>
          <Description/>
        </div>
    </div>
  )
}

export default MainDetail
const cssmain = css`
height:100%;
position: sticky;
width: 80%;
margin: 0 auto;
overflow-x: hidden;
.item-list-slider{
    margin-bottom: 20px;
}
@media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
`