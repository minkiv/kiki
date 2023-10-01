import { RouteObject } from 'react-router-dom'
import UserManagemnet from './user/user.component'
import OrderManagement from './order/order.component'
import ProductManagement from './product/product.component'

export const adminRouter: RouteObject[] = [
    {
        path: 'user',
        element: <UserManagemnet />,
        children: []
    },
    {
        path: 'product',
        element: <OrderManagement />,
        children: []
    },
    {
        path: 'order',
        element: <ProductManagement />,
        children: []
    }
]