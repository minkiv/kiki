import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import SideBarHome from './sidebar-home/sidebar-home.component'
import MainHome from './main-home/main-home.component'

interface HomeProps {
    props?: any
}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div css={cssHome}>
            <SideBarHome />
            <MainHome />
        </div>
    )
}

export default Home

const cssHome = css`
display: flex;
justify-content: space-between;
padding-top: 16px;
width: 1440px;
margin-right: auto;
margin-left: auto;
@media (min-width: 0) and (max-width: 739px) {
    display: unset;
    width: auto;
  }
`