import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import MainPayment from './main-payment/main-payment.component'
import SidePayment from './side-payment/side-payment.component'
import PaymentHeaderComponent from '~/app/component/stack/header/payment-header.component'

interface PaymentProps {
  props?: any
}

const Payment: FunctionComponent<PaymentProps> = () => {
  return (
    <div>
      <div className='sm:px-[50px] max-sm:px-[10px] py-3 bg-white'>
        <PaymentHeaderComponent />
      </div>
      <div css={cssPayment}>
        <MainPayment />
        <SidePayment />
      </div>
    </div>
  )
}

export default Payment

const cssPayment = css`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  width: 1240px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 0) and (max-width: 739px) {
    width: 100%;
    display: unset;
    width: auto;
  }
`
