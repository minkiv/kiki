import { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import SidePayment from './component/side-payment/side-payment.component'
import Shipping from './component/shipping/shipping.component'
import Payments from './component/payments/payments.componet'

interface CheckOutProps {
    props?: any
}

const CheckOut: FunctionComponent<CheckOutProps> = () => {
    return (
        <div css={checkoutcss}>

            <div className='flex justify-center'>
                <div className='flex w-[64%]'>
                    <Shipping />
                    <Payments />
                </div>
                <div className='w-[25%]'>
                    <SidePayment />
                </div>
            </div>

        </div>
    )
}

export default CheckOut

const checkoutcss = css`
    margin: auto;
    width:1440px;
`


