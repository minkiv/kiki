import { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import SidePayment from './component/side-payment/side-payment.component'
import Shipping from './component/shipping/shipping.component'
import Payments from './component/payments/payments.componet'
import { useForm } from 'react-hook-form'
import { schema } from '../utils/validateForm'
import { yupResolver } from '@hookform/resolvers/yup';
import { addOrder } from '~/app/api/order/order.api'
import { useCartRedux } from '../redux/hook/useCartReducer'

interface CheckOutProps {
    props?: any
}

const CheckOut: FunctionComponent<CheckOutProps> = () => {
    const {
        data:{listProductBuy}
    }=useCartRedux()
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        const cartData={
            ...data,
            productOrder:listProductBuy
        }
        console.log(cartData)
       addOrder(cartData).then((res)=>{
        if(res){
            alert("mua thành công")
            localStorage.removeItem("listSelectCart")
        }
       })
    }
    return (
        <div css={checkoutcss}>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex justify-center'>
                     <div className='flex w-[64%]'>
                       <Shipping control={control}/>
                        <Payments />
                     </div>
                  <div className='w-[25%]'>
                       <SidePayment />
                   </div>
                 </div>
            </form>
            

        </div>
    )
}

export default CheckOut

const checkoutcss = css`
    margin: auto;
    width:1440px;
`


