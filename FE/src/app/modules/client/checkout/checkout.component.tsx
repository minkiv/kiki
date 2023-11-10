import { FunctionComponent, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import SidePayment from './component/side-payment/side-payment.component';
import Shipping from './component/shipping/shipping.component';
import Payments from './component/payments/payments.componet';
import { useForm } from 'react-hook-form';
import { schema } from '../utils/validateForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { addOrder } from '~/app/api/order/order.api';
import toast from 'react-hot-toast';
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
import { getOneUserSystem } from '~/app/api/auth/auth.api';
import { useVorcherRedux } from '../redux/hook/useVorcherReducer';
import { useOrderRedux } from '../redux/hook/useOrderReducer';
import { createPayment } from '~/app/api/payment/payment.api';
import { useCartRedux } from '../redux/hook/useCartReducer';

interface CheckOutProps {
    props?: any;
}

const CheckOut: FunctionComponent<CheckOutProps> = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const id = localStorage.getItem('userID');
    const arrayField = ['fullname', 'phoneNumber'];
    const [totalPrice, setTotalPrice] = useState<any>(0);
    const { data: { vorchers }, actions: actionsVorcher } = useVorcherRedux();
    const { data: { infoOrder }, actions: actionsOrder } = useOrderRedux();

    useEffect(() => {
        actionsVorcher.getVorcher();
    }, []);

    const {
        data: { listProductBuy },
        actions,
    } = useCartRedux();

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
            });
            return filteredData;
        },
    });

    useEffect(() => {
        if (listProductBuy) {
            const calculatedTotal = listProductBuy.reduce(
                (total: any, item: any) => total + item?.product?.price * item?.quantityOrder.quantity,
                0
            );
            setTotalPrice(calculatedTotal);
        }
    }, [listProductBuy]);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Thanh toán khi nhận hàng');

    const handlePaymentMethodChange = (method: string) => {
        setSelectedPaymentMethod(method);
    };

    const onSubmit = async (data: any) => {
        const voucherCode = localStorage.getItem('voucherCode');
        const voucher = vorchers?.find((item: any) => item.code === voucherCode);
        const discount = voucher?.discount;
        let sumOrderPrice = discount ? totalPrice - discount : totalPrice;

        if (!voucher && voucherCode) {
            toast.error('Voucher không khớp');
            return;
        }

        setLoadingCreate(true);

        const cartData = {
            ...data,
            totalprice: sumOrderPrice,
            productOrder: listProductBuy,
            payment_methods: selectedPaymentMethod,
        };
        actionsOrder.addressOrder({ ...data });

        if (selectedPaymentMethod === 'vnpay') {
            try {
                const response: any = await createPayment({ infoOrder, productOrder: sumOrderPrice });
                const vnpayUrl = response.data;
                window.location.href = vnpayUrl;
            } catch (error: any) {
                setLoadingCreate(false);
                toast.error('Lỗi khi tạo đơn hàng: ' + error.message);
            }
            const res = await addOrder(cartData);

            if (res) {
                setLoadingCreate(false);
                localStorage.removeItem('listSelectCart');
                localStorage.removeItem('voucherCode');
                actions.clearCart();
                toast.success('Tạo đơn hàng thành công');
                navigate('/thankcustomers');
            } else {
                toast.error('Tạo đơn hàng lỗi');
            }
        } else {
            const res = await addOrder(cartData);
            if (res) {
                setLoadingCreate(false);
                localStorage.removeItem('listSelectCart');
                localStorage.removeItem('voucherCode');
                actions.clearCart();
                toast.success('Tạo đơn hàng thành công');
                navigate('/thankcustomers');
            } else {
                toast.error('Tạo đơn hàng lỗi');
            }

        }
    };

    return (
        <>
            {accessToken ? (
                <LayoutLoading condition={loadingCreate}>
                    <div css={checkoutcss}>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex justify-center'>
                                <div className='flex w-[64%]'>
                                    <Shipping control={control} />
                                    <Payments
                                        selectedPaymentMethod={selectedPaymentMethod}
                                        handlePaymentMethodChange={handlePaymentMethodChange}
                                    />
                                </div>
                                <div className='w-[25%]'>
                                    <SidePayment />
                                </div>
                            </div>
                        </form>
                    </div>
                </LayoutLoading>
            ) : (
                <Skeleton active />
            )}
        </>
    );
};

export default CheckOut;

const checkoutcss = css`
  margin: auto;
  width: 1440px;
`;
