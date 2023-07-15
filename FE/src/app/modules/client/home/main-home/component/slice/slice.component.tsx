import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
interface SliceHomeProps {
    props?: any
}

const SliceHome: FunctionComponent<SliceHomeProps> = () => {
    const arrayImage = [
        'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/81/5b/de/73adeca62f7fd2e68845f22bc27a6569.png.webp',
        'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/41/53/9b/fed8abb98e278d80c8f6eb1221792ffe.png.webp',
        '	https://salt.tikicdn.com/cache/w1080/ts/tikimsp/27/b6/24/5837c868c90c04c684bbbe8ff6be58c2.png.webp',
        'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/2a/88/77/156868cd2cd250ee95e558147d8e2a25.png.webp',
        'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/6b/58/49/182ffd6d161124740267221c7fdf345e.png.webp',
        '	https://salt.tikicdn.com/cache/w1080/ts/tikimsp/ca/03/f3/09d0278aa8254513afcb7729e8f5e18c.jpg.webp',
        '	https://salt.tikicdn.com/cache/w1080/ts/tikimsp/d2/26/7e/32bb5aa4be07ea03ac7063274d3f40bc.png.webp',
        '	https://salt.tikicdn.com/cache/w1080/ts/tikimsp/37/f3/45/ac300232d581846367b836c209fde4b8.png.webp'
    ]
    return (
        <>
            <div css={cssSwiper} className='flex  justify-between'>
                <div css={cssSlider}>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {arrayImage?.map((item, index) => (
                            <SwiperSlide key={index}><img src={item} alt="" className='w-full h-full object-contain' /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='image-outstanding max-sm:hidden'>
                    <img
                        src='	https://salt.tikicdn.com/cache/w750/ts/tikimsp/2a/ca/26/bde4383edc6a8cb1393289b686ab9c81.jpg.webp'
                        alt=''
                        className='object-contain w-full h-full'
                    />
                </div>
            </div>
        </>
    )
}

export default SliceHome

const cssSwiper = css`
.image-outstanding {
    max-width: 280px;
    height: 280px;
    border-radius: 12px;
    overflow: hidden;
    flex-basis: 25%;
  }
`
const cssSlider = css`
flex-basis: 75%;
border-radius: 12px;
width: 900px;
overflow: hidden;
height: 280px;
`
