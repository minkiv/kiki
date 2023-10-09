import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../component/stack/header/header.component'
import FooterComponent from '~/app/component/stack/footer/footer.component'
interface DefaultHomeProps {
  prop?: unknown
}

const DefaultHome: FunctionComponent<DefaultHomeProps> = () => {
  return (
    <div>
      <div className='sm:px-[50px] max-sm:px-[10px] bg-white'>
        <HeaderComponent />
      </div>
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default DefaultHome
