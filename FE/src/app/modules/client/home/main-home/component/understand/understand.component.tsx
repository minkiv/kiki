import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'



interface UnderstandHomeProps {
    props?: any
}

const UnderstandHome: FunctionComponent<UnderstandHomeProps> = () => {
    const arrayImage = [
        'https://salt.tikicdn.com/ts/tikimsp/17/bc/d5/0ce0afc9f193b0a73f2d1281c6df4634.png',
        '	https://salt.tikicdn.com/ts/tikimsp/ab/78/6c/8420a999f11cc13d5a636691f4bc61f1.png',
        '	https://salt.tikicdn.com/ts/tikimsp/ab/78/6c/8420a999f11cc13d5a636691f4bc61f1.png',
        '		https://salt.tikicdn.com/ts/tikimsp/ab/78/6c/8420a999f11cc13d5a636691f4bc61f1.png',
        '	https://salt.tikicdn.com/ts/brickv2og/ce/37/7c/c1c9ceed4377c190c6caa6df2ab71dbe.png',
        '	https://salt.tikicdn.com/ts/brickv2og/ce/37/7c/c1c9ceed4377c190c6caa6df2ab71dbe.png',
        '	https://salt.tikicdn.com/ts/brickv2og/a8/e0/23/1b48fab980d3c907e3b9beb744960e17.png'
    ]
    return (
        <div className='mt-4'>
            <SwiperList title='Hàng thương hiệu giá tốt' >
                {arrayImage?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt='' className='w-full h-full object-contain' />
                    </SwiperSlide>
                ))}
            </SwiperList>
        </div>
    )
}

export default UnderstandHome

