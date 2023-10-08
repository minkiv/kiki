import {
    FileOutlined,
    UserOutlined,
    OrderedListOutlined,
    ShoppingCartOutlined

} from '@ant-design/icons'

export const menuDashBoard = [
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: 'User'
    },
    {
        key: '/admin/category',
        icon: <FileOutlined />,
        label: 'Category'
    },
    {
        key: '/admin/product',
        icon: <OrderedListOutlined />,
        label: 'Product'
    },
    {
        key: '/admin/order',
        icon: <ShoppingCartOutlined />,
        label: 'Order'
    },
    {
        key: '/admin/vocher',
        icon: <ShoppingCartOutlined />,
        label: 'Vocher'
    },
    {
        key: '/admin/statistical',
        icon: <ShoppingCartOutlined />,
        label: 'Statistical'
    },
    {
        key: '/',
        icon: <ShoppingCartOutlined />,
        label: 'home'
    },

]