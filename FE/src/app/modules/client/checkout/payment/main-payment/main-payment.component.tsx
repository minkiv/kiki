import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import SwiperList from '~/app/component/stack/swiper-list/swiper-list.component'
import DeliverPayment from './component/deliver/deliver.component'
import Payments from './component/banks/payments.componet'

interface MainPaymentProps {
  props?: any
}

const MainPayment: FunctionComponent<MainPaymentProps> = () => {
  return (
    <div css={cssmain}>
      <div className='item-list-slider'>
        <DeliverPayment />
      </div>
      <div className='item-list-slider'>
        <Payments />
      </div>
    </div>
  )
}

export default MainPayment

const cssmain = css`
  height: 100%;

  overflow-x: hidden;
  .item-list-slider {
    margin-bottom: 20px;
  }
  @media (min-width: 0) and (max-width: 739px) {
    width: 100%;
  }
`
