
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../component/stack/header/header.component';
import SubHeader from '~/app/component/stack/header/sub-header.component';
import VorcherHeade from '~/app/component/stack/header/vocher-header.component';
interface DefaultHomeProps {
    prop?: unknown
}

const DefaultHome: FunctionComponent<DefaultHomeProps> = () => {
    return (
        <div>
            <div className='px-[50px] py-3 bg-white'>
                <HeaderComponent />
                <SubHeader />
            </div>
            <VorcherHeade />
            <Outlet />

        </div>
    )
}

export default DefaultHome