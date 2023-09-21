import { useRoutes } from 'react-router-dom'
import DefaultLayout from './app/container/default-layout/default-layout.component'
import { clientRouter } from './app/modules/client/router'
import DefaultHome from './app/container/default-home/default-home.component'

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
        }

      ]
    }
  ])

  return element
}

export default App
