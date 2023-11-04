import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Button, Form, Input, Popconfirm, Space, Table, Tag, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import TemplateModal from '../template-modal/template-modal.component'
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

interface ITemplateTableProp {
  dataTable: any[]
  createFunc?: any
  deleteFunc?: any
  changeFunc?: any
  searchFunc?: any
  columnTable?: any
  formEdit?: ReactNode
  handelGetList?: any
  dataPage?: any,
  setData?: any
}

const TemplateTable: FC<ITemplateTableProp> = ({
  dataPage,
  handelGetList,
  dataTable,
  createFunc,
  deleteFunc,
  searchFunc,
  changeFunc,
  columnTable,
  formEdit,
  setData
}) => {
  const [defaultValue, setDefaultValue] = useState<any>(null)
  const [form] = Form.useForm()
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [triggerLoadding, setTriggerLoadding] = useState(false)
  const [type, setType] = useState('CREATE')
  const [keyword, setKeyword] = useState("")
  const [errorSearch, setErrorSearch] = useState("")
  const confirmDelete = (idItem: any) => {
    setTriggerLoadding(true)
    deleteFunc(idItem).then(
      (res: any) => {
        if (res) {
          console.log(res)
          setTimeout(() => {
            setTriggerLoadding(false)
            message.success('Xóa thành công')
            handelGetList()
          }, 1000)
        }
      },
      (err: any) => {
        setTimeout(() => {
          setTriggerLoadding(false)
          message.error(err.response.data)
        }, 1000)
      }
    )
  }
  const cancel = (e: any) => {
    message.error('Đã hủy xoá')
  }
  const handleOk = () => {
    setIsModelOpen(false)
    setTriggerLoadding(true)
    if (type == 'CREATE') {
      form
        .validateFields()
        .then((values: any) => {
          createFunc(values).then(
            (res: any) => {
              if (res) {
                setTimeout(() => {
                  setTriggerLoadding(false)
                  message.success('thêm thành công')
                  handelGetList()
                }, 1000)
              }
            },
            (err: any) => {
              setTimeout(() => {
                setTriggerLoadding(false)
                message.error(' thêm thất bại')
              }, 1000)
            }
          )
          form.resetFields()
        })
        .catch((info: any) => {
          console.log('Validate Failed:', info)
        })
    }

    if (type === 'CHANGE') {
      form
        .validateFields()
        .then((values: any) => {
          form.resetFields()
          changeFunc(values, defaultValue._id).then(
            (res: any) => {
              if (res) {
                setTimeout(() => {
                  setTriggerLoadding(false)
                  message.success('sửa thành công')
                  handelGetList()
                }, 1000)
              }
            },
            (err: any) => {
              setTimeout(() => {
                setTriggerLoadding(false)
                message.error('sửa thất bại ')
              }, 1000)
            }
          )
        })
        .catch((info: any) => {
          console.log('Validate Failed:', info)
        })
    }
  }
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setKeyword(event.target.value);
  }
  const handleSearchItem = () => {
    setTriggerLoadding(true)
    searchFunc(keyword).then(
      (res: any) => {
        if (res) {
          setTimeout(() => {
            setTriggerLoadding(false)

            setData(res.data)
            setErrorSearch("")
          }, 1000)
        }
      },
      (err: any) => {
        setTimeout(() => {
          setTriggerLoadding(false)
          console.log(err.response.data.message);
          setErrorSearch(err.response.data.message)
        }, 1000)
      }
    )
  }
  const handleCancel = () => {
    setIsModelOpen(false)
  }
  const showModel = (typeAction: any, recordTable?: any) => {
    setIsModelOpen(true)
    setType(typeAction)
    if (typeAction === 'CHANGE') {
      setDefaultValue(recordTable)
      form.setFieldsValue(recordTable)
    } else {
      form.resetFields()
    }
  }
  const columns: ColumnsType<DataType> = [
    ...columnTable,
    {
      title: 'Action',
      key: 'action',
      render: (_, record: any) => (
        <Space size='middle' css={cssTemplateTable}>
          <Button type='primary' onClick={() => showModel('CHANGE', record)}>
            Edit
          </Button>
          <Popconfirm
            title='Thông báo'
            description='Bạn có chắc muốn xóa không?'
            onConfirm={() => confirmDelete(record?._id)}
            onCancel={cancel}
            okText='Yes'
            cancelText='No'
          >
            <Button className='btn-delete'>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  return (
    <LayoutLoading condition={triggerLoadding}>
      <div className='flex pb-4 justify-between'>
        <Button
          type='primary'
          onClick={() => showModel('CREATE')}
          className='p-0 h-[40px] w-[44px] rounded-[4px] bg-[#D4FF00]'
        >
          <PlusOutlined className='text-[20px] mb-[4px]' />
        </Button>
        <div>
          <Input placeholder='search item here' className='w-[350px]' onChange={handleValue} prefix={<SearchOutlined />} />
          <Button type='primary' className='ml-3' onClick={handleSearchItem} >
            Search
          </Button>
        </div>
      </div>
      {!errorSearch && <div className=''>
        <div className='overflow-auto'>
          <Table columns={columns} dataSource={dataTable} pagination={{ pageSize: dataPage }} />
        </div>
        <div>
          <TemplateModal isModelOpen={isModelOpen} handleOk={handleOk} handleCancel={handleCancel}>
            <Form form={form} layout='vertical' name='form_in_modal' >
              {formEdit}
            </Form>
          </TemplateModal>
        </div>
      </div>
      }
      {errorSearch && <div>{errorSearch}</div>
      }
    </LayoutLoading>
  )
}
const cssTemplateTable = css`
  .btn-delete {
    color: #ff2a00;
    border-color: #ff2a00;
  }
  .btn-delete:hover {
    color: #fff !important;
    background-color: #ff2a00;
    border-color: #ff2a00 !important;
  }
`
export default TemplateTable
