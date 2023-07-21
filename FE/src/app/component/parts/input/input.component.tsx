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
            <div className='px-2'>
                <BsSearch className='text-gray-500' />
            </div>
            <input className='text' type="text" placeholder='Bạn tìm gì hôm nay ?' />
            <ButtonComponent />
        </div >
    )
}

export default InputComponent
const cssInput = css`
    width: full;
    display: flex;
    position: relative;
    border: 1px solid rgb(221, 221, 227);
    border-radius: 8px;
    align-items: center;
    flex: 1;
.text{
    width: 92px;
    height:full;
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