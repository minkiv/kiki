import { ClassNames, css } from '@emotion/react'
import { FunctionComponent } from 'react'
import StarIcon from '../rating/star.component'
interface ItemProductProps {
    props?: any,
    className?: string,
    itemProduct?: any
}
const ItemProduct: FunctionComponent<ItemProductProps> = ({ className, itemProduct }) => {
    return (
        <div css={cssProduct} className={className}>
            <div  >
                <img src={itemProduct?.images[0]} alt="" width={183}
                    height={183} />
            </div>
            <div className='main'>
                <div className='text-item'>
                    <h3>{itemProduct?.name}</h3>
                </div>
                <div className='title flex '>
                    5 <StarIcon />| đã bán 4
                </div>
                <div className='price'>
                    {itemProduct?.price?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                </div>
                <div className='asa'>Hoàn 12 ASA</div>
            </div>
            <hr />
            <div className='time'>
                giao chủ nhật, ngày 18/07
            </div>
        </div>
    )
}
export default ItemProduct
const cssProduct = css`
overflow: hidden;
border-radius: 4px;
background: rgb(255, 255, 255);
.main{
    padding:0px 10px;
}
   .text-item{
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 150%;
    color: rgb(39, 39, 42);
   }
   .title{
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 150%;
    color: rgb(128, 128, 137);
   }
   .price{
    text-align: left;
    font-size: 2rem;
    line-height: 24px;
    font-weight: 500;
    margin-top: 6px;
    color: var(--color-red-primary);
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