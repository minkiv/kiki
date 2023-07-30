import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import FooterPaymentComponent from '~/app/component/stack/footer/paymentFooter.componet'
interface DefaultPaymentProps {
  prop?: unknown
}

const DefaultCheckout: FunctionComponent<DefaultPaymentProps> = () => {
  return (
    <div>
      <Outlet />
      <FooterPaymentComponent />
    </div>
  )
}

export default DefaultCheckout
