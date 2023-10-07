import { Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from "../common/template-table/template-table.component"
import { getAllUser } from "./service/user.service"


const UserManagemnet = () => {
  const [column, setColumn] = useState([])
  const [dataUser, setDataUser] = useState([])
  useEffect(() => {
    getAllUser().then((res) => {
      setDataUser(res.data)
    })
  }, [])

  useEffect(() => {
    const columTemp: any = []
    if (dataUser.length > 0) {
      Object?.keys(dataUser[0]).map((itemKey) => {
        if (!['_id', '__v', 'password', 'createdAt'].includes(itemKey)) {
          return columTemp.push({
            title: itemKey,
            dataIndex: itemKey,
            key: itemKey
          })
        }
      }
      )
    }
    setColumn(columTemp)
  }, [dataUser])
  return (
    <div>
      <TemplateTable dataTable={dataUser} columnTable={column}
        formEdit={
          <Fragment>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select placeholder='Please select'>
                <Option value='ADMIN'>ADMIN</Option>
                <Option value='USER_STORE'>USER_STORE</Option>
                <Option value='USER'>USER</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label='PhoneNumber'
              name='phoneNumber'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='nickName'
              name='nickName'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='gender'
              name='gender'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='nationality'
              name='nationality'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
          </Fragment>
        }
      />
    </div>
  )
}

export default UserManagemnet