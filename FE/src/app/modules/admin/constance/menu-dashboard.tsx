import {
    FileOutlined,
    UserOutlined,
    OrderedListOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
    MoneyCollectOutlined,
    BankOutlined,
    HomeOutlined,
    CommentOutlined,
    CustomerServiceOutlined

} from '@ant-design/icons'
import { SiAdminer } from 'react-icons/si';

export const menuDashBoard = [
    {
        key: '/admin',
        icon: <SiAdminer />,
        label: 'DashBoard'
    },
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
        key: '/admin/comment',
        icon: <CommentOutlined />,
        label: 'Comment & Review'
    },
    {
        key: '/admin/order',
        icon: <ShoppingCartOutlined />,
        label: 'Order'
    },
    {
        key: '/admin/support',
        icon: <CustomerServiceOutlined />,
        label: 'Contact'
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