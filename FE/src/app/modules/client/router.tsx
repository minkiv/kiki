
import { RouteObject } from 'react-router-dom'
import Home from './home/home.component'
import InstructSeller from './instruct-seller/instruct-seller.component'
import Cart from './cart/cart.component'
import Detail from './detail/detail.component'
export const clientRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/seller',
    element: <InstructSeller />
  },
  {      
    path: "/cart",
  element: <Cart/>
  },
  {      
    path: "/detail",
  element: <Detail/>
  }


]




