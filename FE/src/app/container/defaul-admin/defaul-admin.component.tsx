import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
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

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div css={cssLogoAdmin}><img src="https://media.licdn.com/dms/image/C5616AQFKA9K5XNDHng/profile-displaybackgroundimage-shrink_200_800/0/1635300349670?e=2147483647&v=beta&t=dJrpp04w-OXIfj7vAS9pqfgsizt5TRlVNU1hXCDaf0A" alt="" /></div>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={menuDashBoard}
                    onSelect={handleClickMenuDashboard}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
                </Header>
                <Breadcrumb style={{ margin: '16px' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        margin: '0 16px',
                        marginBottom: '24px',
                        padding: 24,
                        minHeight: 280,
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
`