import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
interface DefaultHomeProps {
    prop?: unknown
}

const DefaultHome: FunctionComponent<DefaultHomeProps> = () => {
    return (
        <div className=''>
            HEADER
            <Outlet />
        </div>
    )
}

export default DefaultHome