import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'
import HeaderCheckOut from '~/app/component/stack/header/headerCheckout'
import FooterPaymentComponent from '~/app/component/stack/footer/paymentFooter.componet'

interface CheckOutProps {
    props?: any
}

const CheckOut: FunctionComponent<CheckOutProps> = () => {
    return (
        <div css={checkoutcss}>
            <div>
                <HeaderCheckOut />
            </div>
            <div css={formContainer}>
                <Outlet />
            </div>
            <hr className='text-gray-400'></hr>
            <FooterPaymentComponent />
        </div>
    )
}

export default CheckOut

const checkoutcss = css`
    background: rgb(245, 245, 250);
    margin: auto;
`

const formContainer = css`
    width: 1140px;
    margin: 0 auto;
`
