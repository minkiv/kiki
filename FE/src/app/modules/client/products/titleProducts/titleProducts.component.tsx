import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus } from 'react-icons/ai';

interface TitleProductProps {
    props?: any
    children?: React.ReactNode
}

const TitleProducts: FunctionComponent<TitleProductProps> = ({ children }) => {
    return (
        <div css={cssTitleProduct} >
            <ol className='arrival'>
                <li>
                    <Link className='arrival_link text-[#6c6d70;]' to={'/'}>Trang chủ</Link>
                </li>
                <li>
                    <AiOutlineMinus className='mx-6' />
                </li>
                <li>
                    <Link className='arrival_link text-[#221f20]' to={''}>
                        {children}
                    </Link>
                </li>
            </ol>
        </div>
    )
}

export default TitleProducts

const cssTitleProduct = css`
width:1440px;
.arrival{
    display: flex;
    list-style-type: none;
    align-items: center;
    padding: 16px 5px;
    border-bottom: 1px solid #f7f8f9
}
.arrival_link{
    font-size: 17px;
    line-height: 24px
}
@media (min-width: 0) and (max-width: 739px){    
    .arrival{
        text-align: center; 
        padding-left:15px;
    }
    .arrival_link{
        font-size: 15px;    
    }
}
@media (min-width: 740px) and (max-width: 1023px) {
    .arrival{
        text-align: center; 
        padding-left:15px;
    }
    .arrival_link{
        font-size: 15px;    
    }
}

`