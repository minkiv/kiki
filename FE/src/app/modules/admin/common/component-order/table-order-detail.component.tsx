import { Button, Descriptions, DescriptionsProps, Modal, Space, Typography } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import Table, { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { FC, Fragment, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography

interface PropsTypes {
    buttonByStatus?: any
    dataTable: any
    isStatistical?: boolean
}

export const TableOrderDetail: FC<PropsTypes> = ({ buttonByStatus, dataTable, isStatistical = false }) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [detailRecord, setDetailRecord] = useState({
        fullname: "",
        phoneNumber: "",
        district: "",
        commune: "",
        locationDetail: "",
        city: "",
        productOrder: []
    })

    const handleShowPopupProduct = (record: any) => {
        console.log(record)
        setIsShowModal(true)
        setDetailRecord({
            city: record?.city,
            fullname: record?.fullname,
            phoneNumber: record?.phoneNumber,
            district: record?.district,
            commune: record?.commune,
            locationDetail: record?.locationDetail,
            productOrder: record?.productOrder
        })
    }

    const columns: ColumnsType<AnyObject> = [
        {
            title: 'OrderCode / CreatedAt',
            key: '_id',
            render: (_, record: any) => (
                <div className=''>
                    {record._id} / {dayjs(record.createdAt).format('MM-DD-YYYY')}
                </div>
            )
        },
        {
            title: 'Status',
            key: 'orderStatus',
            dataIndex: 'orderStatus'
        },
        {
            title: 'Tổng số lượng',
            key: 'productOrder',
            render: (_, record: any) => {
                const orderTotal = record.productOrder.reduce((orderTotal: number, product: any) => {
                    return orderTotal + product.quantityOrder.quantity
                }, 0)

                return <strong className='block text-center'>{orderTotal}</strong>
            }
        },
        {
            title: 'Tổng tiền',
            key: 'productOrder',
            render: (_, record: any) => {
                const orderTotal = record.productOrder.reduce((orderTotal: number, productCur: any) => {
                    return orderTotal + productCur.quantityOrder.quantity * productCur.product.price
                }, 0)

                return <strong className='block text-center'>{orderTotal}</strong>
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record: any) => (
                <Space size='middle'>
                    <Button type='primary' onClick={() => handleShowPopupProduct(record)}>
                        Xem chi tiết
                    </Button>
                    {!isStatistical && (
                        <Space size='middle' direction='vertical'>
                            {buttonByStatus(record._id, record.orderStatus)}
                        </Space>
                    )}
                </Space>
            )
        }
    ]

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'FullName',
            children: detailRecord?.fullname
        },
        {
            key: '2',
            label: 'PhoneNumber',
            children: detailRecord?.phoneNumber
        },
        {
            key: '3',
            label: 'City',
            children: detailRecord?.city
        },
        {
            key: '4',
            label: 'District',
            children: detailRecord?.district
        },
        {
            key: '5',
            label: 'LocationDetail',
            children: detailRecord?.locationDetail
        }
    ]

    const columnListProduct = [
        {
            title: 'Name',
            key: 'name',
            render: (_: any, record: any) => <div className=''>{record.product.name}</div>
        },
        {
            title: 'Image',
            key: 'images',
            render: (_: any, record: any) => (
                <div style={{ width: 70 }}>
                    {record?.product.images?.[0] ? <img src={record?.product.images[0]} /> : 'Chưa có ảnh sản phẩm'}
                </div>
            )
        },
        {
            title: 'Price',
            key: 'Price',
            render: (_: any, record: any) => {
                return <strong className='block text-center'>{record.quantityOrder.quantity * record.product.price}</strong>
            }
        },
        {
            title: 'Color | size | Quantity',
            key: 'quantityOrder',
            render: (_: any, record: any) => (
                <div className=''>
                    {record.quantityOrder.nameColor} | {record.quantityOrder.nameSize} | {record.quantityOrder.quantity}
                </div>
            )
        }
    ]
    return (
        <Fragment>
            <div>

                <Table columns={columns} dataSource={dataTable} />
            </div>

            <Modal title={null} open={isShowModal} onCancel={() => setIsShowModal(false)} width={1000} footer={null}>
                <Descriptions title='Thông tin khách hàng' items={items} />
                <Title level={5}>Sản phẩm mua</Title>
                <div className='pt-5'>
                    <Table columns={columnListProduct} dataSource={detailRecord.productOrder} />
                </div>
            </Modal>
        </Fragment>
    )
}