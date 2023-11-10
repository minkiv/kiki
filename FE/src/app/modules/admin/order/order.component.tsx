import { Button, Form, Input, InputNumber, Modal, Segmented, Select, Typography } from 'antd'
import { Fragment, FunctionComponent, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { filterDataOrderByStatus } from '~/app/api/order/order.api'
import { TableOrderDetail } from '../common/component-order/table-order-detail.component'
import { createOrder, deleteOrder, getAllOrder, updateOrder } from './service/order.service'
import { PlusOutlined } from '@ant-design/icons';
import { getAllProduct } from '../product/service/product.service'


const { Title } = Typography

interface OrderManagementProps { }

const OrderManagement: FunctionComponent<OrderManagementProps> = () => {
  const [orderStatus, setOrderStatus] = useState<string | number>('đang chờ duyệt')
  const [dataTable, setDataTable] = useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dataProduct, setDataProduct] = useState<any>([])
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [availableColors, setAvailableColors] = useState<any>([]);
  const [availableSizes, setAvailableSizes] = useState<any>([]);
  const [listProduct, setListProduct] = useState<any>([]);
  const [productTotalPrices, setProductTotalPrices] = useState([]);
  const [dataOrder, setDataOrder] = useState<any>([])
  const [grandTotal, setGrandTotal] = useState(0);
  const [reset, setReset] = useState<boolean>(true)
  const [form] = Form.useForm()

  const handleProductChange = (value: any) => {
    const product = dataProduct.find((product: any) => product._id === value);
    setSelectedProduct(product);

    if (product) {
      const colors = product.listQuantityRemain.map((item: any) => item.nameColor);
      setAvailableColors([...new Set(colors)]);
    } else {
      setAvailableColors([]);
    }
    setSelectedColor(null);
    setSelectedSize(null);
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (selectedProduct) {
      const sizes = selectedProduct.listQuantityRemain
        .filter((item: any) => item.nameColor === color)
        .map((item: any) => item.nameSize);
      if (sizes.length === 0) {
        setSelectedSize(null);
      }
      setAvailableSizes(sizes);
    }
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  const getMaxQuantity = (color: any, size: any) => {
    if (selectedProduct && color && size) {
      const matchingItem = selectedProduct.listQuantityRemain.find((item: any) => {
        return item.nameColor === color && item.nameSize === size;
      })
      if (matchingItem) {
        return matchingItem.quantity;
      }
    }
    return 1;
  };

  const handelvalueQuantity = (event: any, index: number) => {
    const newTotalPrice = event * selectedProduct.price;
    const updatedTotalPrices: any = [...productTotalPrices];
    updatedTotalPrices[index] = newTotalPrice;
    setProductTotalPrices(updatedTotalPrices);
    const totalPricesSum = updatedTotalPrices.reduce((acc: any, curr: any) => acc + (curr || 0), 0);
    setGrandTotal(totalPricesSum);
  }

  useEffect(() => {
    getAllOrder().then((res) => {
      setDataOrder(res.data)
    })
    getAllProduct().then((res) => {
      setDataProduct(res.data);
      setListProduct(res.data.map((item: any) => {
        return { value: item._id, label: item.name }
      }));
    }).then(() => console.log(listProduct)
    )
  }, [])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {

    setIsModalOpen(false);
    form.validateFields().then((values: any) => {
      createOrder({ ...values, totalprice: grandTotal }).then((res) => {
        if (res) {
          setReset(!reset)
          toast.success("order thành công")
        }
      }, (err) => {
        toast.success("order thất bại")
      })
      form.resetFields()
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const changeStatusDataOrder = (value: string | number) => {
    setOrderStatus(value)
  }

  const callAllOrder = useCallback(() => {
    filterDataOrderByStatus(orderStatus).then((res) => {
      if (res) {
        setDataTable(res.data)
      }
    })
  }, [orderStatus, reset])

  useEffect(() => {
    callAllOrder()
  }, [orderStatus, reset])

  const handleUpdateStatusOrder = (orderId: string, orderStatus: string) => {
    updateOrder({ orderId, orderStatus }).then((res) => {
      if (res) {
        callAllOrder()
        toast.success('Đã cập nhật trạng thái đơn hàng')
      }
    })
  }


  const handelDeleteOrder = (orderId: any) => {
    deleteOrder(orderId).then((res) => {
      if (res) {
        setReset(!reset)
        toast.success("xoá thành công đơn hàng")
      }
    }, (err) => {
      toast.success("xoá đơn hàng lỗi")
    })
  }

  const buttonByStatus = (orderId: string, orderStatus: string) => {
    switch (orderStatus) {
      case 'đang chờ duyệt':
        return (
          <Fragment>
            <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'duyệt thành công')}> Chuyển duyệt thành công</Button>
            <Button danger onClick={() => handleUpdateStatusOrder(orderId, 'huỷ đơn')}>
              Chuyển huỷ đơn
            </Button>
          </Fragment>
        )
        break
      case 'duyệt thành công':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'đang vận chuyển')}>
            Chuyển đang vận chuyển
          </Button>
        )
        break
      case 'đang vận chuyển':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'hoàn thành')}>
            Chuyển hoàn thành
          </Button>
        )
      case 'hoàn thành':
        break
      case 'huỷ đơn':
        return (
          <Button danger onClick={() => handelDeleteOrder(orderId)}>
            xoá đơn hàng
          </Button>
        )
        break

      default:
        break
    }
  }

  return (
    <div className='py-5'>
      <Segmented
        options={[
          { value: 'đang chờ duyệt', label: 'đang chờ duyệt' },
          { value: 'duyệt thành công', label: 'duyệt thành công' },
          { value: 'đang vận chuyển', label: 'đang vận chuyển' },
          { value: 'hoàn thành', label: 'hoàn thành' },
          { value: 'huỷ đơn', label: 'Đã huỷ' }
        ]}
        size='large'
        value={orderStatus}
        onChange={changeStatusDataOrder}
      />
      <div className='float-right'>
        <Button
          onClick={showModal}
          type='primary'
          className='p-0 h-[40px]  w-[44px] rounded-[4px] bg-[#D4FF00]'
        >
          <PlusOutlined className='text-[20px] mb-[4px]' />
        </Button>
      </div>
      <div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form form={form} layout='vertical' name='form_in_modal' >
            <Fragment>
              <Form.Item
                label='fullname'
                name='fullname'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='phoneNumber'
                name='phoneNumber'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='city'
                name='city'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='district'
                name='district'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>


              <Form.Item
                label='locationDetail'
                name='locationDetail'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.List
                name="productOrder"
                initialValue={[]}
              >
                {(fields, { add, remove }) => (
                  <div>
                    {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                      <div key={key} >
                        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                          <Form.Item
                            {...restField}
                            name={[name, 'product']}
                            fieldKey={[fieldKey, 'product'] as any}
                            label="Select Product"
                            rules={[{ required: true, message: 'Please select a product' }]}
                          >
                            <Select
                              showSearch
                              style={{ width: 200 }}
                              placeholder="Search to Select"
                              optionFilterProp="children"
                              filterOption={(input, option: any) => (option?.label ?? '').toLowerCase().includes(input?.toLowerCase())}
                              filterSort={(optionA, optionB) =>
                                (optionA?.name ?? '').toLowerCase().localeCompare((optionB?.name ?? '').toLowerCase())
                              }
                              options={listProduct}
                              onChange={(value, label) => {
                                handleProductChange(value); console.log(value, label);
                              }}
                            >
                            </Select>
                          </Form.Item>



                          <Form.Item
                            {...restField}
                            name={[name, 'quantityOrder', 'nameColor']}
                            label="Color"
                            rules={[{ required: true, message: 'Please select a color' }]}
                          >
                            <Select
                              placeholder="Color"
                              onChange={(value) => handleColorChange(value)}
                            >
                              {availableColors.map((color: any) => (
                                <Select.Option key={color} value={color}>
                                  {color}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            {...restField}
                            name={[name, 'quantityOrder', 'nameSize']}
                            label="Size"
                            rules={[{ required: true, message: 'Please select a size' }]}
                          >
                            <Select
                              placeholder="Size"
                              onChange={(value) => handleSizeChange(value)}
                            >
                              {availableSizes.map((size: any) => (
                                <Select.Option key={size} value={size}>
                                  {size}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </div>
                        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                          {selectedProduct && selectedColor && selectedSize && (
                            <Form.Item
                              {...restField}
                              name={[name, 'quantityOrder', 'quantity']}
                              label="Quantity"
                              initialValue={1}
                            >
                              <InputNumber
                                placeholder="Quantity"
                                min={1}
                                max={getMaxQuantity(selectedColor, selectedSize)}
                                onChange={(value) => handelvalueQuantity(value, index)}
                              />

                            </Form.Item>
                          )}

                          {selectedProduct && (
                            <Form.Item
                              label='totalprice'
                              name='totalprice'
                            >
                              {productTotalPrices[index]}
                            </Form.Item>
                          )}
                          {fields.length > 1 && (
                            <Form.Item label="Xoá">
                              <Button type="dashed" onClick={() => remove(name)}>
                                Remove
                              </Button>
                            </Form.Item>
                          )}

                        </div>
                      </div>

                    ))}
                    <Button type="dashed" onClick={() => add()} block>
                      + Add Product
                    </Button>
                  </div>
                )}
              </Form.List>

              <Form.Item
                label='orderStatus'
                name='orderStatus'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select placeholder=' trạng thái'>
                  <Select.Option value='duyệt thành công'>duyệt thành công</Select.Option>
                  <Select.Option value='đang vận chuyển'>đang vận chuyển</Select.Option>
                  <Select.Option value='hoàn thành'>hoàn thành</Select.Option>
                </Select>
              </Form.Item>
            </Fragment>
          </Form>
        </Modal>
      </div>
      <Title className='py-5' level={3}>
        Đơn hàng: {dataTable.length}
      </Title>

      <TableOrderDetail buttonByStatus={buttonByStatus} dataTable={dataTable} />
    </div>
  )
}

export default OrderManagement