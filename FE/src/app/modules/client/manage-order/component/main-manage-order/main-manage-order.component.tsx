import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import { useOrderRedux } from '../../../redux/hook/useOrderReducer'
import moment from 'moment'
import { deleteOrder } from '~/app/api/order/order.api'
import toast from 'react-hot-toast'
import { Button, message, Popconfirm } from 'antd';
interface MainManangeOrderProps {
    props?: any
}

const MainManangeOrder: FunctionComponent<MainManangeOrderProps> = () => {
    const {
        data: { orders }, actions
    } = useOrderRedux()

    useEffect(() => {
        actions.getAllOrder()
    }, [])



    const confirm = (id: any) => {
        deleteOrder(id).then((res) => {
            if (res) {
                toast.success("huỷ thành công")
                actions.getAllOrder()
            }
        }, (err) => {
            toast.error(err?.response?.data)
        })
    };

    const cancel = (e: any) => {
        message.error('đã xác nhận không huỷ');
    };


    return (
        <div css={cssMainManangeOrder}>
            <h1>Quản lý đơn hàng</h1>
            <div>
                <table className='w-[1200px]'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ngày</th>
                            <th>Trạng thái đơn hàng</th>
                            <th className='w-[400px]'>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order: any, index: any) => {

                            return (
                                <tr key={order?._id}>
                                    <td>{index + 1}</td>
                                    <td>{moment.utc(order?.updatedAt).utcOffset(+7).format('YYYY-MM-DD HH:mm:ss')}</td>
                                    <td className={order?.orderStatus === 'đang chờ duyệt' ? 'text-red-700' : 'text-green-700'}>
                                        {order?.orderStatus}
                                    </td>

                                    <td>
                                        {order.productOrder.map((product: any) => (
                                            <div key={product?._id} className='title'>
                                                <div>
                                                    <p className='pb-4'>{product?.product?.name} <a href="#" className='text-green-600'>chi tiết</a></p>
                                                </div>
                                                <div className='news-product right-16'>
                                                    <p className="product-color">Màu sắc: {product?.quantityOrder?.nameColor}</p>
                                                    <p className="product-size">Kích thước: {product?.quantityOrder?.nameSize}</p>
                                                    <p className="product-quantity">Số lượng: {product?.quantityOrder?.quantity}</p>

                                                </div>

                                            </div>
                                        ))}
                                    </td>
                                    <td>{order?.totalprice?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                    <td>
                                        <Popconfirm
                                            title="Delete the task"
                                            description="Are you sure to delete this task?"
                                            onConfirm={() => confirm(order?._id)}
                                            onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Button danger>huỷ đơn hàng</Button>
                                        </Popconfirm></td>
                                </tr>)

                        })}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default MainManangeOrder

const cssMainManangeOrder = css`
padding:0 20px;
h1{
    font-weight: 600;
    font-size: 24px;
}
.product-color {
    font-weight: bold;
    color: #333;
  }
  
  .product-size {
    font-style: italic;
    color: #666;
  }
  
  .product-quantity {
    font-size: 14px;
    color: #999;
  }
.news-product{
    list-style: none;
    background-color: white;
    box-shadow: 0 0 7px gray;
    position: absolute;
    top: 100%;
     width:200px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
}
.title:hover .news-product {
    visibility: visible;
  }
  .title{
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    position: relative;
}
th{
    border-top: 1px solid #f7f8f9;
    border-bottom: 1px solid #f7f8f9;
    height: 55px;
    font-size: 14px;
    line-height: 16px;
    color: #6c6d70;
    vertical-align: top;
    padding-top: 21px;
    padding-bottom: 12px;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    text-align:center
}
td{
    text-align:center;
    padding-top:30px;
}
`