import { css } from '@emotion/react'
import { FunctionComponent } from 'react'

interface HomeProps {
    props?: any
}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div css={cssHome}>
            HELLO KIKI
        </div>
    )
}

export default Home

const cssHome = css`
color:red
`