import { RouteObject } from 'react-router-dom'
import Home from './home/home.component'
import Cart from './cart/cart.component'
import Detail from './detail/detail.component'
import Search from './search/search.component'
import ManageOrder from './manage-order/manage-order.component'
import Products from './products/products.component'
import CheckOut from './checkout/checkout.component'
import GeneralIntroduction from './aboutUs/generalIntroduction.component'
import FashionShow from './aboutUs/fashionShow.component'
import CommunityActivities from './aboutUs/communityActivities.component'

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
  },
  {
    path: "/payment",
    element: <CheckOut />
  },
  {
    path: "/general",
    element: < GeneralIntroduction />
  },
  {
    path: "/fashion-Show",
    element: <FashionShow />
  },
  {
    path: "/Community-Activities",
    element: <CommunityActivities />
  },
]




