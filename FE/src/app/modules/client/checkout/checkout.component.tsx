import { FunctionComponent, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import SidePayment from './component/side-payment/side-payment.component'
import Shipping from './component/shipping/shipping.component'
import Payments from './component/payments/payments.componet'
import { useForm } from 'react-hook-form'
import { schema } from '../utils/validateForm'
import { yupResolver } from '@hookform/resolvers/yup';
import { addOrder } from '~/app/api/order/order.api'
import { useCartRedux } from '../redux/hook/useCartReducer'
import toast from 'react-hot-toast'
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd'
import { getOneUserSystem } from '~/app/api/auth/auth.api'

interface CheckOutProps {
    props?: any
}

const CheckOut: FunctionComponent<CheckOutProps> = () => {
    const [loadingCreate, setLoadingCreate] = useState(false)
    const accessToken = localStorage.getItem("accessToken")
    const navigate = useNavigate()
    const id = localStorage.getItem("userID")
    const arrayField = ["fullname", "phoneNumber"]
    const [totalPrice, setTotalPrice] = useState<any>(0)
    const {
        data: { listProductBuy }, actions
    } = useCartRedux()
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: async () => {
            const userData = (await getOneUserSystem(id)).data;
            const filteredData: any = {};
            arrayField.forEach((key: any) => {
                if (userData.hasOwnProperty(key)) {
                    filteredData[key] = userData[key];
                }
            })
            return filteredData
        }
    });
    useEffect(() => {
        if (listProductBuy) {
          const calculatedTotal = listProductBuy.reduce(
            (total: any, item: any) => total + item?.product?.price * item?.quantityOrder.quantity,
            0
          )
          setTotalPrice(calculatedTotal)
        }
      }, [listProductBuy])
      console.log(totalPrice)
    const onSubmit = (data: any) => {
        setLoadingCreate(true)
        const cartData = {
            ...data,
            totalprice: totalPrice,
            productOrder: listProductBuy
        }
        addOrder(cartData).then((res) => {
            if (res) {
                setTimeout(() => {
                    setLoadingCreate(false)
                    localStorage.removeItem("listSelectCart")
                    actions.clearCart()
                    toast.success('tạo đơn hàng thành công')
                    navigate("/thankcustomers")
                }, 4000)
            }
            else {
                toast.error('tạo đơn hàng lỗi')
            }
        })
    }
    return (
        <>
            {accessToken ? (<LayoutLoading condition={loadingCreate}>
                <div css={checkoutcss}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex justify-center'>
                            <div className='flex w-[64%]'>
                                <Shipping control={control} />
                                <Payments />
                            </div>
                            <div className='w-[25%]'>
                                <SidePayment />
                            </div>
                        </div>
                    </form>
                </div>
            </LayoutLoading>) : (<Skeleton active />)}

        </>


    )
}

export default CheckOut

const checkoutcss = css`
    margin: auto;
    width:1440px;
`


