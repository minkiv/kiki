import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import ButtonComponent from '../button/button.component'
interface Iinput {
    prop?: unknown
}

const InputComponent: FunctionComponent<Iinput> = () => {
    return (
        <div css={cssInput}>
            <BsSearch />
            <input className='text' type="text" placeholder='Bạn tìm gì hôm nay ?' />
            <ButtonComponent />
        </div >
    )
}

export default InputComponent
const cssInput = css`
    width: 100%;
    display: flex;
    position: relative;
    border: 1px solid rgb(221, 221, 227);
    border-radius: 8px;
    -webkit-box-align: center;
    align-items: center;
    flex: 1;

.text{
    border: 0px;
    padding: 0px 8px;
    font-weight: 400;
    font-size: 0.875 rem;
    line-height: 150%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    flex: 1 1 0%;
    outline: none;
    background: transparent;
    border-right: 1px solid rgb(221, 221, 227);
}
`