import {
    FileOutlined,
    UserOutlined,
    OrderedListOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
    MoneyCollectOutlined,
    BankOutlined,
    HomeOutlined

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
        key: '/admin/vorcher',
        icon: <MoneyCollectOutlined />,
        label: 'Vocher'
    },
    {
        key: '/admin/statistics',
        icon: <BarChartOutlined />,
        label: 'Statistical'
    },
    {
        key: '/admin/paymentvnpay',
        icon: <BankOutlined />,
        label: 'Payment VNPay'
    },
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'home'
    },

]