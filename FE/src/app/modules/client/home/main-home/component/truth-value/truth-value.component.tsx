import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperListFiveProduct from '~/app/component/stack/swiper-list/swiperList-fiveProduct.component'

interface TruthValueProps {
  props?: any
}

const TruthValue: FunctionComponent<TruthValueProps> = () => {
  const listTruthValue = [
    {
      id: 1,
      name: 'Sang Trọng',
      img: 'https://pubcdn.ivymoda.com/files/news/2023/10/05/bf77ab02aa0d76266784c54c5c23142f.jpg'
    },
    {
      id: 2,
      name: 'Đẳng Cấp',
      img: 'https://pubcdn.ivymoda.com/files/news/2023/10/05/eafa905f60a379488f3dcd322bd549d5.jpg'
    },
    {
      id: 3,
      name: 'Thời Thượng',
      img: 'https://im.uniqlo.com/global-cms/spa/resb997dad121efc1a79b5add0a372f3737fr.jpg'
    },
    {
      id: 4,
      name: 'Lôi Cuốn',
      img: '//im.uniqlo.com/global-cms/spa/res9c6e0c00d9100404d60bdc1664e078dcfr.jpg'
    }
  ]
  return (
    <div className='mt-4' css={cssValue}>
      <h3 className='text-center text-[30px] pb-12'>LỜI BÀY TỎ TỪ GIÁ TRỊ ĐÍCH THỰC</h3>
      <div className='list-value'>
        {listTruthValue.map((value: any) => (
          <div key={value.id}>
            <div className='img-block'>
              <img src={value.img} alt='' />
            </div>
            <p>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TruthValue

const cssValue = css`
  h3 {
    font-weight: 600;
    letter-spacing: 1px;
  }
  .list-value {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  .img-block {
    height: 256px;
    width: 327px;
    overflow: hidden;
    border-radius: 50px 0;
  }
  .list-value p {
    text-align: center;
    margin-top: 12px;
    font-weight: 550;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
`
