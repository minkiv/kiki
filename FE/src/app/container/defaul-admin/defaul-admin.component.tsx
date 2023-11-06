import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuDashBoard } from '~/app/modules/admin/constance/menu-dashboard'

const { Header, Sider, Content } = Layout

const DefaultAdmin: React.FC = () => {
  let navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const handleClickMenuDashboard = (data: any) => {
    navigate(data.key)
  }
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => { }, [accessToken])

  return (
    <Layout css={cssLayout} style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div css={cssLogoAdmin}>
          <img
            src='https://media.licdn.com/dms/image/C5616AQFKA9K5XNDHng/profile-displaybackgroundimage-shrink_200_800/0/1635300349670?e=2147483647&v=beta&t=dJrpp04w-OXIfj7vAS9pqfgsizt5TRlVNU1hXCDaf0A'
            alt=''
          />
        </div>
        <hr />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={menuDashBoard}
          onSelect={handleClickMenuDashboard}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,

            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
          <div className='author flex mr-[24px] gap-[24px]'>
            <div className='flex gap-[4px]'>
              <img
                className='author-img h-[36px] m-auto object-cover'
                width={'36px'}
                src='https://cdn1.iconfinder.com/data/icons/flags-36/512/Vietnam_Country_flag-512.png'
              />
              <p className=''>Việt Nam</p>
            </div>
            <div className='border-[1px] h-[40px] m-auto'></div>
            <img
              className='author-img h-[36px] m-auto rounded-[50%] object-cover'
              width={'36px'}
              src='https://tse1.mm.bing.net/th?id=OIP.-aZACU3d2yerjekwxJYCiwHaFj&pid=Api&P=0&h=220'
            />
            <p className=''>Nguyễn Thị Hiệp</p>
          </div>
        </Header>
        {/* <Breadcrumb style={{ margin: '16px' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          style={{
            margin: '0 16px',
            marginBottom: '24px',
            padding: 24,
            minHeight: 280,
            overflowY: 'auto',
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  )
}

export default DefaultAdmin

const cssLogoAdmin = css`
  color: white;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  background-color: white;
  .ant-menu-item-selected {
    background-color: #fff;
  }
`
const cssLayout = css`
  .ant-menu {
    margin-top: 20px;
  }
  .ant-menu-item-selected,
  .ant-menu-item-active,
  .ant-menu-item-selected:active {
    background-color: #ffaa00 !important;
    font-size: 16px;
  }
  .ant-menu-item-icon {
    font-size: 16px !important;
    margin-right: 8px;
  }
`
