import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus } from 'react-icons/ai';

interface TitleProductProps {
    props?: any
}

const TitleProducts: FunctionComponent<TitleProductProps> = () => {
    return (
        <div css={cssTitleProduct}>
            <ol className='arrival'>
                <li>
                    <Link className='arrival_link text-[#6c6d70;]' to={'/'}>Trang chủ</Link>
                </li>
                <li>
                    <AiOutlineMinus className='mx-6' />
                </li>
                <li>
                    <Link className='arrival_link text-[#221f20]' to={'/products'}>NEW ARRIVAL</Link>
                </li>
            </ol>
        </div>
    )
}

export default TitleProducts

const cssTitleProduct = css`
.arrival{
    display: flex;
    list-style-type: none;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f7f8f9
}
.arrival_link{
    font-size: 17px;
    line-height: 24px
}
`