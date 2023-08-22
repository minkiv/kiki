import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import { SwiperSlide } from 'swiper/react'

interface Listproduct {
  props?: any
}

const Listproduct: FunctionComponent<Listproduct> = () => {
  const arrayImage = ['1', '2','3','4','5','6','7']

  return (
    <div className='bg-slate-50 p-5'>
      <h2 className='text-3xl pb-5'>Sản phẩm tương tự</h2>
      <div>
        <SwiperList css={cssSlide}>
          {arrayImage?.map((item, index) => (
            <SwiperSlide key={index}>
              <ItemProduct className='product'/>
            </SwiperSlide>
          ))}
        </SwiperList>
      </div>
    </div>
  )
}

export default Listproduct

const cssSlide = css`
`