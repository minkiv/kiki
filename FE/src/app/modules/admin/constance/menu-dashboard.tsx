import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'

export const menuDashBoard = [
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: 'User'
    },
    {
        key: '/admin/product',
        icon: <VideoCameraOutlined />,
        label: 'Product'
    },
    {
        key: '/admin/order',
        icon: <UploadOutlined />,
        label: 'Order'
    }
]