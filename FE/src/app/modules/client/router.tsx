import { RouteObject } from 'react-router-dom'
import Home from './home/home.component'
import Cart from './cart/cart.component'
import Detail from './detail/detail.component'
import Search from './search/search.component'
import MenuSideBar from '~/app/component/stack/menu-sidebar/menu-sidebar.component'
import ManageOrder from './manage-order/manage-order.component'
import Products from './products/products.component'
export const clientRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/detail/:id",
    element: <Detail />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/manage",
    element: <ManageOrder />
  },
  {
    path: "/products",
    element: <Products />
  }
]




