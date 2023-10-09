import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
interface SliceHomeProps {
  props?: any
}

const SliceHome: FunctionComponent<SliceHomeProps> = () => {
  const arrayImage = [
    'https://pubcdn.ivymoda.com/files/news/2023/09/18/763adf6054c6f80388f529ab509315d4.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/09/08/4fc7664285a1fa2ba47f9671afe955d9.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/10/04/ff74da15a8c24facbaeb14418c38360a.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/09/12/85a22eb8724d03a769ca210448b1ed79.jpg'
  ]
  return (
    <>
      <div className=' flex justify-between'>
        <div css={cssSlider}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className='mySwiper'
          >
            {arrayImage?.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt='' className='w-full h-full object-contain ' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default SliceHome

const cssSlider = css`
  border-radius: 80px 0;
  width: 100%;
  overflow: hidden;
  .swiper-button-prev {
    color: white;
  }
  .swiper-button-next {
    color: white;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  @media (min-width: 0) and (max-width: 739px) {
    flex-basis: unset;
    margin: 10px;
  }
`
