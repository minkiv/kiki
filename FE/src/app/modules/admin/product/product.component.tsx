import { Button, Form, Input, InputNumber, Select, Space, Upload, UploadFile, ColorPicker } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import { CloseOutlined } from '@ant-design/icons'
import { getAllProduct, createProduct, deleteProduct, editProduct, searchProduct } from './service/product.service'
import axios from 'axios'
import { getAllCategory } from '../category/service/category.service'
const { Option } = Select
import { css } from '@emotion/react'

const ProductManagemnet = () => {
  const [column, setColumn] = useState([])
  const [dataProduct, setDataProduct] = useState<any>([])
  const [categories, setCategories] = useState([])
  const [reset, setReset] = useState<boolean>(true)
  useEffect(() => {
    getAllProduct().then((res) => {
      setDataProduct(res.data)
    })
    getAllCategory().then((res: any) => {
      setCategories(res.data)
    })
  }, [reset])
  useEffect(() => {
    const columTemp: any = []
    const title = ['', 'Tên sản phẩm', 'Mã SP', 'Giá mới', 'Giá gốc', 'Mô tả', 'Ảnh', '', '', 'Danh mục', 'Thương hiệu']
    if (dataProduct.length > 0) {
      Object?.keys(dataProduct[0]).map((itemKey, key = 0) => {
        if (!['_id', '__v', 'updatedAt', 'createdAt', 'listQuantityRemain'].includes(itemKey)) {
          return columTemp.push({
            title: title[key++],
            dataIndex: itemKey,
            key: itemKey,
            render: (text: any, record: any, index: any) => {
              if (itemKey === 'images' && dataProduct[index]?.images && dataProduct[index].images.length > 0) {
                return <img src={dataProduct[index].images[0]} alt='Product Image' style={{ maxWidth: '50px' }} />
              }
              return text
            }
          })
        }
      })
    }
    if (dataProduct[0]?.listQuantityRemain && dataProduct[0]?.listQuantityRemain.length > 0) {
      const firstItem = dataProduct[0].listQuantityRemain[0]
      const title = ['', 'Size', 'Màu', 'Số lượng']
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey, key = 0) => {
          if (!['_id', 'updatedAt'].includes(itemKey)) {
            columTemp.push({
              title: title[key++],
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <div>
                    {dataProduct[index]?.listQuantityRemain?.map((item: any, index: any) => (
                      <div className='flex items-center h-[29px]'>
                        <p className='mt-0 mb-3'>{item[itemKey]}</p>
                      </div>
                    ))}
                  </div>
                )
              }
            })
          }
        })
      }
    }
    setColumn(columTemp)
  }, [dataProduct])

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const customRequestUpload = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options

    const fmData = new FormData()
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        onProgress({ percent: (event.loaded / event.total) * 100 })
      }
    }
    fmData.append('file', file)
    fmData.append('upload_preset', 'r17fcf7k')
    fmData.append('cloud_name', 'df3xmajf8')
    fmData.append('folder', 'ECMA')
    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/df3xmajf8/image/upload`, fmData, config)
      console.log(res)
      onSuccess(res.data.url)
      setFileList((prevFileList: any) => [
        ...prevFileList,
        {
          uid: file.uid,
          name: file.name,
          status: res.status,
          url: res.data.url
        }
      ])
    } catch (err) {
      onError({ err })
    }
  }

  const onRemove = (file: any) => {
    setFileList((prevFileList) => prevFileList.filter((item) => item.uid !== file.uid))
  }
  const handelGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable
        dataTable={dataProduct}
        columnTable={column}
        createFunc={(form: any) =>
          createProduct({
            ...form,
            listQuantityRemain: [
              ...form.listQuantityRemain.map((list: { colorRbg: any }) => ({
                ...list,
                colorRbg: list.colorRbg.toHexString()
              }))
            ]
          })
        }
        deleteFunc={deleteProduct}
        changeFunc={editProduct}
        handelGetList={handelGetList}
        searchFunc={searchProduct}
        setData={setDataProduct}
        formEdit={
          <Fragment>
            <Form.Item label='Tên sản phẩm' name='name' rules={[{ required: true, message: 'Please input name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label='Mã sản phẩm' name='code' rules={[{ required: true, message: 'Please input Code!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label='Giá' name='price' rules={[{ required: true, message: 'Please input price!' }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label='Cost' name='cost'>
              <InputNumber />
            </Form.Item>
            <Form.Item label='Mô tả' name='description'>
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label='Ảnh'
              name='images'
              getValueFromEvent={(event) => event.fileList}
              rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
              valuePropName={'fileList'}
              initialValue={fileList}
            >
              <Upload customRequest={customRequestUpload} listType='picture-card' onRemove={onRemove}>
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </Form.Item>
            <Form.Item label='Thương hiệu' name='brand'>
              <Input />
            </Form.Item>
            <Form.Item
              label='Danh mục'
              name='categoryId'
              rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
            >
              <Select placeholder='Please select'>
                {categories?.map((itemCate: any) => <Option value={itemCate._id}>{itemCate.name}</Option>)}
              </Select>
            </Form.Item>
            <Form.List
              name='listQuantityRemain'
              rules={[
                {
                  validator: async (_, names) => {
                    if (names.length < 1) {
                      return Promise.reject(new Error('Ít nhất phải có 1 biến thể'))
                    }
                  }
                }
              ]}
              initialValue={[]}
            >
              {(fields, { add, remove }, { errors }) => (
                <div css={formcss} style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space className='space' key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
                      <Form.Item className='colorFormItem' {...restField} name={[name, 'colorRbg']}>
                        <ColorPicker defaultValue={'fff'} showText={(color) => color.toHexString()} format='hex' />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'nameColor']}>
                        <Input placeholder='Name Color' />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'nameSize']}>
                        <Input placeholder='nameSize' />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'quantity']}>
                        <InputNumber placeholder='quantity' />
                      </Form.Item>

                      <CloseOutlined
                        onClick={() => {
                          remove(name)
                        }}
                      />
                    </Space>
                  ))}

                  <Button type='dashed' onClick={() => add()} block>
                    + Thêm biến thể
                  </Button>
                  <Form.ErrorList className='text-red-500' errors={errors} />
                </div>
              )}
            </Form.List>
          </Fragment>
        }
      />
    </div>
  )
}
export default ProductManagemnet
const formcss = css`
  .ant-space-item {
    margin: auto;
  }
  .ant-form-item {
    margin: auto;
  }
  .anticon-close {
    margin-bottom: 8px;
  }
`
