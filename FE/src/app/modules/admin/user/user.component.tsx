import { DatePicker, Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from "../common/template-table/template-table.component"
import { changeUser, createUser, deleteUser, getAllUser } from "./service/user.service"

const UserManagemnet = () => {
  const [column, setColumn] = useState([])
  const [dataUser, setDataUser] = useState([])
  const [reset, setReset] = useState<boolean>(true)
  useEffect(() => {
    getAllUser().then((res) => {
      setDataUser(res.data)
    })
  }, [reset])

  useEffect(() => {
    const columTemp: any = []
    if (dataUser.length > 0) {
      Object?.keys(dataUser[0]).map((itemKey) => {
        if (!['_id', '__v', 'password', 'updatedAt', 'createdAt', 'nationality'].includes(itemKey)) {
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

  const handelGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable dataTable={dataUser} dataPage={6} columnTable={column} handelGetList={handelGetList} createFunc={createUser} deleteFunc={deleteUser} changeFunc={changeUser}
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
              label='fullname'
              name='fullname'
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
            <Form.Item label='gender' name='gender' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select placeholder='Please select'>
                <Select.Option value='Nam'>Nam</Select.Option>
                <Select.Option value='Nữ'>Nữ</Select.Option>
                <Select.Option value='Khác'>Khác</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='address'
              name='address'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Ngày tháng năm"
              name="birthday"
              rules={[{ required: true, message: 'Please input your date of birth!' }]}
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