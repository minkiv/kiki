import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
import { Link } from "react-router-dom"
interface ListProductProps {
  props?: any
}
const ListProduct: FunctionComponent<ListProductProps> = () => {
  const {
    data: { products },
    actions
  } = useProductRedux()
  useEffect(() => {
    actions.getAllProduct()
  }, [])
  console.log(products)
  return (
    <div css={cssProduct}>
      <div className='titles'>Gợi ý hôm nay</div>
      <div className='list-product'>
        {products.map((item: any) => (
          <Link to={`/detail/${item._id}`}>
            <ItemProduct itemProduct={item} />
          </Link>

        ))}


      </div>
    </div>
  )
}
export default ListProduct
const cssProduct = css`
padding: 12px 0px;
border-radius: 8px;
background-color: var(--color-white);
.titles {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: rgb(39, 39, 42);
}
.list-product {
    display: grid;
    align-self: stretch;
    gap: 8px;
    background-color: rgb(245, 245, 250);
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 0) and (max-width: 739px) {
    .list-product {
      grid-template-columns: repeat(2, 1fr);
      padding:5px 10px;
    }
  }
`