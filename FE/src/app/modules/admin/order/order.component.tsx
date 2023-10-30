import { Fragment, useEffect, useState } from 'react'
import { Form, Input, Button, Select, InputNumber } from 'antd'
import { createOrder, deleteOrder, getAllOrder, updateOrder } from './service/order.service'
import TemplateTable from '../common/template-table/template-table.component'
import { getAllProduct } from '../product/service/product.service'

const OrderManagement = () => {
  const [columns, setColumns] = useState([])
  const [dataOrder, setDataOrder] = useState<any>([])
  const [dataProduct, setDataProduct] = useState<any>([])
  const [reset, setReset] = useState<boolean>(true)
  const [form] = Form.useForm();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [availableColors, setAvailableColors] = useState<any>([]);
  const [availableSizes, setAvailableSizes] = useState<any>([]);
  const [productTotalPrices, setProductTotalPrices] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
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
      setDataProduct(res.data)
    })
  }, [reset])
  console.log(dataOrder)
  useEffect(() => {
    const dataColum: any = []
    if (dataOrder.length > 0) {
      Object.keys(dataOrder[0]).map((itemkey) => {
        if (!['_id', '__v', 'updatedAt', 'productOrder', 'user', 'createdAt'].includes(itemkey)) {
          dataColum.push({
            title: itemkey,
            dataIndex: itemkey,
            key: itemkey
          })
        }
      })
    }
    if (dataOrder[0]?.productOrder && dataOrder[0]?.productOrder.length > 0) {
      const firstItem = dataOrder[0].productOrder[0].product
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (
            ![
              '_id',
              'updatedAt',
              'price',
              'cost',
              'description',
              'images',
              'brand',
              'listQuantityRemain',
              'categoryId',
              'createdAt',
              '__v'
            ].includes(itemKey)
          ) {
            dataColum.push({
              title: `${itemKey}`,
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <>
                    {dataOrder[index]?.productOrder?.map((item: any, index: any) => (
                      <p key={index}>{item.product[itemKey]}</p>
                    ))}
                  </>
                )
              }
            })
          }
        })
      }
    }
    if (dataOrder[0]?.productOrder && dataOrder[0]?.productOrder.length > 0) {
      const firstItem = dataOrder[0].productOrder[0].quantityOrder
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (![''].includes(itemKey)) {
            dataColum.push({
              title: `${itemKey}`,
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <div className='flex gap-[8px]'>
                    {dataOrder[index]?.productOrder?.map((item: any, index: any) => (
                      <p key={index}>{item.quantityOrder[itemKey]}</p>
                    ))}
                  </div>
                )
              }
            })
          }
        })
      }
    }
    setColumns(dataColum)
  }, [dataOrder])

  const handelGetList = () => {
    setReset(!reset)
  }
  console.log(dataProduct)
  return (
    <div>
      <TemplateTable
        dataTable={dataOrder}
        columnTable={columns}
        changeFunc={(form: any, id: any) => updateOrder({ ...form, totalprice: grandTotal }, id)}
        deleteFunc={deleteOrder}
        handelGetList={handelGetList}
        createFunc={(form: any) => createOrder({ ...form, totalprice: grandTotal })}
        formEdit={
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
                            placeholder="Select Product"
                            onChange={(value) => handleProductChange(value)}
                          >
                            {dataProduct.map((product: any) => (
                              <Select.Option key={product._id} value={product._id}>
                                {product.name}
                              </Select.Option>
                            ))}
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
                        <Form.Item label="xoá">
                          {fields.length > 1 && (
                            <Button type="dashed" onClick={() => remove(name)}>
                              Remove
                            </Button>
                          )}
                        </Form.Item>
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
        }
      />
    </div >
  )
}

export default OrderManagement
