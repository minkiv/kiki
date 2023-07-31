import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import { SwiperSlide } from 'swiper/react'

interface Listproduct {
    props?: any
}
const Listproduct: FunctionComponent<Listproduct> = () => {
    const arrayImage = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]
    return (
        <div className='bg-slate-50 p-5 bg-white'>
            <h2 className='text-3xl pb-5'>Sản phẩm tương tự</h2>
            <div className='flex'>
                <SwiperList>
                    {arrayImage?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ItemProduct />
                        </SwiperSlide>
                    ))}
                </SwiperList>
            </div>
        </div>
    )
}

export default Listproduct
const cssList = css`

`