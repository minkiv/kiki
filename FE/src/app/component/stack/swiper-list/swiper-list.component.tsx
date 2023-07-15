import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
interface SwiperListProps {
    props?: any
    title?: string
    children?: any
}

const SwiperList: FunctionComponent<SwiperListProps> = ({ title, children }) => {
    return (
        <>
            <div css={cssSwiper}>
                <div className='title'>{title}</div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {children}
                </Swiper>

            </div>
        </>
    )
}

export default SwiperList

const cssSwiper = css`
padding: 12px 16px;
border-radius: 8px;
height: 100%;
width: 100%;
background-color: var(--color-white);
.title{
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: rgb(39, 39, 42);
}

`