import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'



interface FeaturedCategoryProps {
    props?: any
}

const FeaturedCategory: FunctionComponent<FeaturedCategoryProps> = () => {
    const arrayImage = [
        'https://salt.tikicdn.com/ts/brickv2og/dc/f3/d2/c4980fdbed728c4e5a37d3dddf4f8f6e.png',
        '	https://salt.tikicdn.com/ts/brickv2og/fb/7b/98/b4eab7e52a786472da2dc45dc3385c99.png',
        '	https://salt.tikicdn.com/ts/brickv2og/a5/78/8b/b0e3b15e641d47233365dcb79075ff52.png',
        '	https://salt.tikicdn.com/ts/brickv2og/a6/77/3e/6d9a10321a921200be87eb190c99d590.png',
        '	https://salt.tikicdn.com/ts/brickv2og/ce/37/7c/c1c9ceed4377c190c6caa6df2ab71dbe.png',
        '	https://salt.tikicdn.com/ts/brickv2og/ce/37/7c/c1c9ceed4377c190c6caa6df2ab71dbe.png',
        '	https://salt.tikicdn.com/ts/brickv2og/a8/e0/23/1b48fab980d3c907e3b9beb744960e17.png'
    ]
    return (
        <div className='mt-4'>
            <SwiperList title='Danh mục nổi bật' >
                {arrayImage?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt='' className='w-full h-full object-contain' />
                    </SwiperSlide>
                ))}
            </SwiperList>
        </div>
    )
}

export default FeaturedCategory

