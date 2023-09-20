import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
import { Link } from "react-router-dom"
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
interface SaleProductProps {
    props?: any
}
const SaleProduct: FunctionComponent<SaleProductProps> = () => {
    const {
        data: { products },
        actions
    } = useProductRedux()
    useEffect(() => {
        actions.getAllProduct()
    }, [])
    return (
        <div css={cssProduct}>
            <div className='titles'>ĐỒNG GIÁ TỪ 99K | GIẢM THÊM 9% TỪ 3SP | CHỈ CÓ TẠI ONLINE</div>
            <div className='list-product'>
                {products.slice(0, 5).map((item: any, index: any) => (
                    <Link to={`/detail/${item._id}`} key={index}>
                        <ItemProduct itemProduct={item} />
                    </Link>

                ))}
            </div>
            <div className='text-center mt-10'>
                <ButtonSqua children="Xem tất cả" css={cssButton} />
            </div>
        </div>
    )
}
export default SaleProduct
const cssProduct = css`

padding: 12px 0px;
border-radius: 8px;
background-color: var(--color-white);
.titles {
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  line-height: 32px;
  font-family: 'Montserrat';
  color: #221F20;
  margin-bottom:20px;
}
.list-product {
    display: grid;
    justify-content:center;
    align-self: stretch;
    gap: 12px;
    grid-template-columns: repeat(5, 264px);
  }
  @media (min-width: 0) and (max-width: 739px) {
    .list-product {
      grid-template-columns: repeat(2, 1fr);
      padding:5px 10px;
    }
  }
`
const cssButton = css`
    border: 1px solid #221F20;
    box-sizing: border-box;
    border-radius: 24px 0px;
    padding: 13px 24px;
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    position: relative;
`