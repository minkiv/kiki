import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import TitleProducts from './titleProducts/titleProducts.component'
import SidebarProducts from './sidebarProducts/sidebarProducts.component'
import ListProducts from './listProduct/listProducts.component'
import { useProductRedux } from '../redux/hook/useProductReducer'

interface ProductProps {
  props?: any
}

const Products: FunctionComponent<ProductProps> = () => {
  const {
    data: { products },
    actions
  } = useProductRedux()
  const [data, setData] = useState([])
  useEffect(() => {
    actions.getAllProduct()
  }, [])
  useEffect(() => {
    setData(products)
  }, [products])
  const handleDataUpdate = (id: any) => {
    const listPro = products.filter((pro: any) => pro.categoryId === id)
    setData(listPro)
  }
  return (
    <div css={cssProduct}>
      <TitleProducts>All PRODUCTS</TitleProducts>
      <div className='flex'>
        <SidebarProducts data={data} onDataUpdate={handleDataUpdate} />
        <ListProducts data={data} />
      </div>
    </div>
  )
}

export default Products

const cssProduct = css`
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  justify-content: center;
`
