import { RouteObject } from 'react-router-dom'
import UserManagemnet from './user/user.component'
import OrderManagement from './order/order.component'
import ProductManagement from './product/product.component'
import CategoryManagement from './category/category.component'
import VocherManange from './vocher/vorcher.component'

export const adminRouter: RouteObject[] = [
    {
        path: 'user',
        element: <UserManagemnet />,
        children: []
    },
    {
        path: 'order',
        element: <OrderManagement />,
        children: []
    },
    {
        path: 'category',
        element: <CategoryManagement />,
        children: []
    },

    {
        path: 'product',
        element: <ProductManagement />,
        children: []
    },
    {
        path: 'vorcher',
        element: <VocherManange />,
        children: []
    }
]