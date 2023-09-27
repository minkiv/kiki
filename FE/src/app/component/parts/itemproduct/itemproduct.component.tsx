import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { PiHandbagSimpleThin } from "react-icons/pi"
import { AiOutlineHeart } from "react-icons/ai"
import ButtonSqua from '../button/ButtonSqua'
interface ItemProductProps {
    props?: any,
    className?: string,
    itemProduct?: any
}
const ItemProduct: FunctionComponent<ItemProductProps> = ({ className, itemProduct }) => {
    return (
        <div css={cssProduct} className={className}>
            <div className=' mb-[17px]'>
                <img src={itemProduct?.images[0]} alt="" className='w-[260px] h-[300px] m-auto' />
            </div>
            <div className='main'>
                <div className='flex justify-between mb-[13px]'>
                    {/* <ul className='color flex'>
                        <li className='bg-red-500'></li>
                        <li className='bg-blue-600'></li>
                        <li className='bg-yellow-400'></li>
                    </ul> */}
                    <div>
                        <AiOutlineHeart className='text-[20px] text-red-600' />
                    </div>
                </div>
                <div className='text-item'>
                    <h3 className='truncate'>{itemProduct?.name}</h3>
                </div>
                <div className='flex justify-between items-end'>
                    <div className='price'>
                        {itemProduct?.price?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                    </div>
                    <div>
                        <ButtonSqua css={cssBtn} children={<PiHandbagSimpleThin className='text-[16px] ' />} outline={true} />
                    </div>
                </div>
            </div>
            <hr />

        </div>
    )
}
export default ItemProduct
const cssProduct = css`
overflow: hidden;
border-radius: 4px;
// background: rgb(255, 255, 255);
    .color li{
       width:18px;
       height:18px; 
       border-radius:50%;
       margin-right: 10px;
    }
   .text-item{
    color: #373737;;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: capitalize;
   }
   .price{
    font-size: 100%;
    font-size: 16px;
    color: #3E3E3F;
    font-weight: 600;
    vertical-align: baseline;
   }
   .asa{
    margin-top:5px;
    text-align: left;
    font-size: 1rem;
    color: rgb(39, 39, 42);
   }
   .time{
    margin-top:5px;
    text-align: left;
    font-size: 1rem;
    color: rgb(128, 128, 137);
    padding:10px 10px;
   }
   &:hover {
    transition: transform 0.3s, box-shadow 0.3s;
    transform: translateY(-3px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  }
`
const cssBtn = css`
padding:8px;
border-radius:8px 0;
`