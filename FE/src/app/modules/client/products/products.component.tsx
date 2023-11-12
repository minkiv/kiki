import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import TitleProducts from './titleProducts/titleProducts.component'
import SidebarProducts from './sidebarProducts/sidebarProducts.component'
import ListProducts from './listProduct/listProducts.component'
import { useProductRedux } from '../redux/hook/useProductReducer'
import { searchProduct } from '../../admin/product/service/product.service'

interface ProductProps {
  props?: any
}

const Products: FunctionComponent<ProductProps> = () => {
  let keyword = new URLSearchParams(location.search).get('q')

  const {
    data: { products },
    actions
  } = useProductRedux()
  const [data, setData] = useState<any>([])
  const [defaultData, setDefaultData] = useState<any>([])
  const [searchError, setSearchError] = useState("")
  useEffect(() => {
    actions.getAllProduct()
  }, [])
  useEffect(() => {
    setData(products)

  }, [keyword])
  useEffect(() => {
    if (keyword && keyword !== "") {
      searchProduct(keyword).then(
        (res: any) => { setData(res.data), setDefaultData(res.data), setSearchError("") },
        (err: any) => {
          setSearchError(err.response.data.message)
        }
      )

    }
  }, [keyword])
  const handleDataUpdate = (id: any) => {
    if (!keyword) {
      const listPro = products.filter((pro: any) => pro.categoryId === id)
      setData(listPro)
      if (id === 'all') setData(products)
    }
    else {
      const listPro = defaultData.filter((pro: any) => pro.categoryId === id)
      setData(listPro)
      if (id === 'all') setData(defaultData)
    }
  }
  const handleSortPrice = (type: any) => {
    console.log(type)
    if (type == 'decending') {
      const listPrice = data.map((p: any) => p.price).sort((a: any, b: any) => b - a)
      const listSorted: any = []
      const sort = listPrice.map((price: any) =>
        products.map((pro: any) => (price === pro.price ? listSorted.push(pro) : null))
      )
      setData(listSorted)
    } else if (type == 'acending') {
      const listPrice = data.map((p: any) => p.price).sort((a: any, b: any) => a - b)
      const listSorted: any = []
      const sort = listPrice.map((price: any) =>
        products.map((pro: any) => (price === pro.price ? listSorted.push(pro) : null))
      )
      setData(listSorted)
    }
  }
  const handleGetPrice = (price: any) => {
    if (!keyword) {
      const rangePro = products.filter((pro: any) => {
        if (price[1]) {
          return pro.price >= price[0] && pro.price <= price[1]
        } else {
          return pro.price >= price[0]
        }
      })
      setData(rangePro)
    }
    else {
      const rangePro = defaultData.filter((pro: any) => {
        if (price[1]) {
          return pro.price >= price[0] && pro.price <= price[1]
        } else {
          return pro.price >= price[0]
        }
      })
      setData(rangePro)

    }

  }
  const reverseProducts = (type: string) => {
    if (type === 'new') {
      const currentDate: Date = new Date();

      const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        const timeDifferenceA = currentDate.getTime() - dateA.getTime();
        const timeDifferenceB = currentDate.getTime() - dateB.getTime();

        return timeDifferenceA - timeDifferenceB;
      });

      setData(sortedData);

    }
  };

  return (
    <div css={cssProduct}>
      <TitleProducts>TẤT CẢ SẢN PHẨM</TitleProducts>
      <div className='title relative'>
        <h1 className='text-title absolute'>TẤT CẢ SẢN PHẨM </h1>
      </div>
      <div className='flex mt-[48px]'>
        <SidebarProducts
          data={data}
          onDataUpdate={handleDataUpdate}
          getPrices={handleGetPrice}
          sortPrices={handleSortPrice}
          sortNewProduct={reverseProducts}
        />
        {!searchError && <ListProducts data={data} />}
        {searchError && <h1 className='text-[16px] font-semibold'>{searchError}!</h1>}
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
