import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import TitleProducts from './titleProducts/titleProducts.component'
import SidebarProducts from './sidebarProducts/sidebarProducts.component'
import ListProducts from './listProduct/listProducts.component'

interface ProductProps {
    props?: any
}

const Products: FunctionComponent<ProductProps> = () => {
    return (
        <div css={cssProduct}>
            <TitleProducts>
                All PRODUCTS
            </TitleProducts>
            <div className='flex'>
                <SidebarProducts />
                <ListProducts />
            </div>
        </div>
    )
}

export default Products

const cssProduct = css`
max-width: 1440px;
box-sizing: border-box;
margin:auto;
justify-content:center;
`