import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import SliceHome from './component/slice/slice.component'
import FeaturedCategory from './component/list-banner/list-banner.component'
import { useProductRedux } from '../../redux/hook/useProductReducer'
import { Skeleton } from 'antd'
import NewProduct from './component/new-product/new-product.component'
import SaleProduct from './component/sale-product/sale-product.component'
import ListBanner from './component/list-banner/list-banner.component'
import Gallery from './component/gallery/gallery.component'


interface MainHomeProps {
    props?: any
}

const MainHome: FunctionComponent<MainHomeProps> = () => {
    const {
        data: { products },
        actions
    } = useProductRedux()
    useEffect(() => {
        actions.getAllProduct()
    }, [])
    return (
        <div css={cssmain}>
            <div className='item-list-slider'>
                <SliceHome />
            </div>
            <div className='item-list-slider'>
                {
                    products.length > 0 ? (
                        <div className='item-list-slider'>
                            <NewProduct />
                        </div>) : (<Skeleton active />)
                }
            </div>
            <div className='item-list-slider'>
                {
                    products.length > 0 ? (
                        <div className='item-list-slider'>
                            <SaleProduct />
                        </div>) : (<Skeleton active />)
                }
            </div>
            <div className='item-list-slider'>
                <img className='banner-img' src="https://pubcdn.ivymoda.com/files/news/2023/09/13/47a6150be24f777953274d9aad96ea7f.jpg" alt="" />
            </div>

            <div className='item-list-slider'>
                <ListBanner />
            </div>
            <div className='item-list-slider'>
                <Gallery />
            </div>
        </div>
    )
}

export default MainHome

const cssmain = css`
height:100%;
position: sticky;
top: 0px;
width: 90%;
margin:auto;
overflow-x: hidden;
.item-list-slider{
    margin-bottom: 20px;
}
.banner-img{
    border-radius:80px 0;
}
@media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
`