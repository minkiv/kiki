import { useRoutes } from 'react-router-dom'
import DefaultLayout from './app/container/default-layout/default-layout.component'
import { clientRouter } from './app/modules/client/router'
import DefaultHome from './app/container/default-home/default-home.component'
import DefaultCheckout from './app/container/default-checkout/default-checkout.component'
import { Children } from 'react'
import CheckOut from "./app/modules/client/checkout/checkout.component";
import Shipping from './app/modules/client/checkout/shipping/shipping.component'
import Payment from './app/modules/client/checkout/payment/payment.component'

function App() {
  let element: any = useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '',
          element: <DefaultHome />,
          children: clientRouter
        },
        {
          path: 'checkout',
          element: <DefaultCheckout />,
          children: [
            
            { path: 'payment', element: <Payment /> }],

           
        },
        {
          path: 'checkout',
          element: <CheckOut />,
          children: [
            {
              path: "shipping",
              element: <Shipping />
            }
          ]
        }
      ]
    }
  ])

  return element
}

export default App
