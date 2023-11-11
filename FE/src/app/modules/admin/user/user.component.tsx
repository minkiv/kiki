import { DatePicker, Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import { changeUser, createUser, deleteUser, getAllUser, searchUser } from './service/user.service'

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
    const title = ['Giới tính', 'Địa chỉ', '', 'Tên', 'Email', '', 'Vai trò', '', 'Số điện thoại']
    if (dataUser.length > 0) {
      Object?.keys(dataUser[0]).map((itemKey, key = 0) => {
        if (!['_id', '__v', 'password', 'updatedAt', 'createdAt', 'nationality'].includes(itemKey)) {
          return columTemp.push({
            title: title[key++],
            dataIndex: itemKey,
            key: itemKey
          })
        }
      })
    }
    setColumn(columTemp)
  }, [dataUser])

  const handelGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable
        searchFunc={searchUser}
        setData={setDataUser}
        dataTable={dataUser}
        columnTable={column}
        handelGetList={handelGetList}
        createFunc={createUser}
        deleteFunc={deleteUser}
        changeFunc={changeUser}
        formEdit={
          <Fragment>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label='Vai trò' name='role' rules={[{ required: true, message: 'Vui lòng chọn Vai trò!' }]}>
              <Select placeholder='Please select'>
                <Select.Option value='ADMIN'>ADMIN</Select.Option>
                <Select.Option value='USER_STORE'>USER_STORE</Select.Option>
                <Select.Option value='USER'>USER</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='Mật khẩu'
              name='password'
              rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Số điện thoại'
              name='phoneNumber'
              rules={[{ required: true, message: 'Vui lòng nhập Số điện thoại!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Họ và tên'
              name='fullname'
              rules={[{ required: true, message: 'Vui lòng nhập Họ và tên!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Biệt danh'
              name='nickname'
              rules={[{ required: true, message: 'Vui lòng nhập Biệt danh!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Giới tính'
              name='gender'
              rules={[{ required: true, message: 'Vui lòng chọn Giới tính!' }]}
            >
              <Select placeholder='Please select'>
                <Select.Option value='Nam'>Nam</Select.Option>
                <Select.Option value='Nữ'>Nữ</Select.Option>
                <Select.Option value='Khác'>Khác</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Địa chỉ' name='address' rules={[{ required: true, message: 'Vui lòng nhập Địa chỉ!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='Ngày tháng năm sinh '
              name='birthday'
              rules={[{ required: true, message: 'Vui lòng nhập Ngày tháng năm sinh!' }]}
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
