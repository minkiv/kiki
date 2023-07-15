import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import SliceHome from './component/slice/slice.component'
import CollectionHome from './component/collection/collection.component'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import UnderstandHome from './component/understand/understand.component'
import FeaturedCategory from './component/featured-category/featured-category.component'
import ListProduct from './component/list-product/list-product.component'


interface MainHomeProps {
    props?: any
}

const MainHome: FunctionComponent<MainHomeProps> = () => {
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


            <div className='item-list-slider'>
                <ListProduct />
            </div>
        </div>
    )
}

export default MainHome

const cssmain = css`
width: calc(100% - 254px);
overflow-x: hidden;
.item-list-slider{
    margin-bottom: 20px;
}
`