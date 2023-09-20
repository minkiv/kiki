import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperListTwoProduct from '~/app/component/stack/swiper-list/swiperList-twoProduct.component'

interface ListBannerProps {
    props?: any
}

const ListBanner: FunctionComponent<ListBannerProps> = () => {
    const arrayImage = [
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/1a2b7a74c2765e96afc9b80ba8345dd4.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/1a2b7a74c2765e96afc9b80ba8345dd4.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/1a2b7a74c2765e96afc9b80ba8345dd4.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/1a2b7a74c2765e96afc9b80ba8345dd4.jpg',

    ]
    return (
        <div className='mt-4 mb-[107px]'>
            <SwiperListTwoProduct >
                {arrayImage?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img css={cssImg} src={item} alt='' className='w-full h-full rou' />
                    </SwiperSlide>
                ))}
            </SwiperListTwoProduct>

            <hr className=' text-gray h-[4px] mt-14' />
        </div>
    )
}

export default ListBanner

const cssImg = css`
border-radius:50px 0;
`

