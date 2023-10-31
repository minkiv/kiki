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
    label: 'Người dùng'
  },
  {
    key: '/admin/category',
    icon: <FileOutlined />,
    label: 'Danh mục'
  },
  {
    key: '/admin/product',
    icon: <OrderedListOutlined />,
    label: 'Sản phẩm'
  },
  {
    key: '/admin/order',
    icon: <ShoppingCartOutlined />,
    label: 'Đặt hàng'
  },
  {
    key: '/admin/vorcher',
    icon: <MoneyCollectOutlined />,
    label: 'Khuyến mại'
  },
  {
    key: '/admin/statistics',
    icon: <BarChartOutlined />,
    label: 'Thống kê'
  },
  {
    key: '/admin/paymentvnpay',
    icon: <BankOutlined />,
    label: 'Thanh toán VNPay'
  },
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Trang chủ'
  }
]
