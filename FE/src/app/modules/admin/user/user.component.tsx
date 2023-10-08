import { Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from "../common/template-table/template-table.component"
import { createUser, deleteUser, getAllUser } from "./service/user.service"


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
        if (!['_id', '__v', 'password', 'updatedAt', 'nationality'].includes(itemKey)) {
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
      <TemplateTable dataTable={dataUser} columnTable={column} createFunc={createUser} deleteFunc={deleteUser}
        formEdit={
          <Fragment>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>
            <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select placeholder='Please select'>
                <Select.Option value='ADMIN'>ADMIN</Select.Option>
                <Select.Option value='USER_STORE'>USER_STORE</Select.Option>
                <Select.Option value='USER'>USER</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='PhoneNumber'
              name='phoneNumber'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='nickname'
              name='nickname'
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
              label='address'
              name='address'
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