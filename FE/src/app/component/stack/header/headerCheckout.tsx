import { FunctionComponent } from 'react'
import { css } from '@emotion/react'

interface HeaderCheckOutProps {
    props?: any
}

const HeaderCheckOut: FunctionComponent<HeaderCheckOutProps> = () => {
    return (
        <div css={HeaderCheckOutcss}>
            <div className='flex items-center justify-between max-w-1170 mx-auto'>
                <div css={imageContainer}>
                    <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" alt="" className='w-[100px] h-[60px]' />
                </div>
                <div css={imageContainer} >
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/hotline.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeaderCheckOut

const HeaderCheckOutcss = css`
    padding: 25px 0px 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
    background: rgb(255, 255, 255);
    position: relative;
    z-index: 1;
    @media (min-width: 0) and (max-width: 739px) {
        display: none;
    }
`

const imageContainer = css`
    display: flex;
    justify-content: center;
    margin-left: 170px;
    margin-right: 180px;
`
