import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import SliceHome from './component/slice/slice.component'
import CollectionHome from './component/collection/collection.component'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import UnderstandHome from './component/understand/understand.component'
import FeaturedCategory from './component/featured-category/featured-category.component'
import ListProduct from './component/list-product/list-product.component'
import { useProductRedux } from '../../redux/hook/useProductReducer'
import { Skeleton } from 'antd'


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
                <CollectionHome />
            </div>
            <div className='item-list-slider'>
                <UnderstandHome />
            </div>

            <div className='item-list-slider'>
                <FeaturedCategory />
            </div>

            {
                products.length > 0 ? (
                    <div className='item-list-slider'>
                        <ListProduct />
                    </div>) : (<Skeleton active />)
            }
        </div>
    )
}

export default MainHome

const cssmain = css`
height:100%;
position: sticky;
top: 0px;
width: calc(100% - 254px);
overflow-x: hidden;
.item-list-slider{
    margin-bottom: 20px;
}
@media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
`