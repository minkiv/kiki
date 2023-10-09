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
  const [data, setData] = useState<any>([])
  useEffect(() => {
    actions.getAllProduct()
  }, [])
  useEffect(() => {
    setData(products)
  }, [products])
  const handleDataUpdate = (id: any) => {
    const listPro = products.filter((pro: any) => pro.categoryId === id)
    setData(listPro)
    if (id === 'all') setData(products)
  }
  return (
    <div css={cssProduct}>
      <TitleProducts>TẤT CẢ SẢN PHẨM</TitleProducts>
      <div className='title relative'>
        <h1 className='text-title absolute'>TẤT CẢ SẢN PHẨM </h1>
      </div>
      <div className='flex mt-[48px]'>
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
  .title {
    margin-bottom: 32px;
  }
  .text-title {
    right: 28%;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #221f20;
    padding: 12px 40px 12px 16px;
    text-transform: uppercase;
  }
`
