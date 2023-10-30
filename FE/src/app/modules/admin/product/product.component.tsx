import { Button, Form, Input, Select, Space, Upload, UploadFile } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import { CloseOutlined } from '@ant-design/icons'
import axios from 'axios'
import { getAllCategory } from '../category/service/category.service'
const { Option } = Select

import { getAllProduct, searchProduct } from './service/product.service'

const ProductManagemnet = () => {

  const [column, setColumn] = useState([])
  const [dataProduct, setDataProduct] = useState<any>([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAllProduct().then((res) => {
      setDataProduct(res.data)
    })
    getAllCategory().then((res: any) => {
      setCategories(res.data)
    })
  }, [])

  useEffect(() => {
    const columTemp: any = []
    if (dataProduct.length > 0) {
      Object?.keys(dataProduct[0]).map((itemKey) => {
        if (!['_id', '__v', 'updatedAt', 'createdAt', 'listQuantityRemain'].includes(itemKey)) {
          return columTemp.push({
            title: itemKey,
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
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (!['_id', 'updatedAt'].includes(itemKey)) {
            columTemp.push({
              title: `${itemKey}`,
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
    fmData.append('upload_preset', "r17fcf7k")
    fmData.append('cloud_name', "df3xmajf8")
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
  return (
    <div>
      <TemplateTable
        dataTable={dataProduct}
        columnTable={column}
        searchFunc={searchProduct}
        setData={setDataProduct}
        formEdit={
          <Fragment>
            <Form.Item
              label='Images'
              name='images'
              getValueFromEvent={(event) => event.fileList}
              rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
              valuePropName={'fileList'}
              initialValue={fileList}
            >
              <Upload
                customRequest={customRequestUpload}
                listType='picture-card'
                onRemove={onRemove}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </Form.Item>
            <Form.Item label='Category' name='category' rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}>
              <Select placeholder='Please select'>
                {categories?.map((itemCate: any) => (
                  <Option value={itemCate._id}>{itemCate.name}</Option>
                ))}
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
                <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
                      <Form.Item {...restField} noStyle name={[name, 'nameColor']}>
                        <Input placeholder='nameColor' />
                      </Form.Item>
                      <Form.Item {...restField} noStyle name={[name, 'nameSize']}>
                        <Input placeholder='nameSize' />
                      </Form.Item>
                      <Form.Item {...restField} noStyle name={[name, 'quantity']}>
                        <Input placeholder='quantity' />
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
