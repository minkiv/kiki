import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { Select, Space, Pagination } from 'antd'
import { useProductRedux } from '../../redux/hook/useProductReducer'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { Link } from 'react-router-dom'

interface ListProductProps {
  props?: any
  data: any
}

const ListProducts: FunctionComponent<ListProductProps> = ({ data }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  const numEachPage = 12
  const [minPaginate, setMinPaginate] = useState(0)
  const [maxPaginate, setMaxPaginate] = useState(1)
  const handleChangePaginate = (value: any) => {
    setMinPaginate((value - 1) * numEachPage)
    setMaxPaginate(value * numEachPage)
  }
  return (
    <div css={cssListProducts} className='w-[100%]'>
      <div className='grid grid-cols-4 gap-10 p-10'>
        {data.slice(minPaginate, maxPaginate).map((item: any, index: any) => {
          return (
            <Link to={`/detail/${item._id}`} key={index}>
              <ItemProduct itemProduct={item} />
            </Link>
          )
        })}
      </div>
      <div className='w-[100%] text-center'>
        <Pagination defaultPageSize={numEachPage} onChange={handleChangePaginate} defaultCurrent={1} total={13} />
      </div>
    </div>
  )
}

export default ListProducts

const cssListProducts = css`

.select-title{
    min-width: 240px;
    width: 100%;
    min-height: 50px;
    border: 1px solid #E7E8E9;
    border-radius: 24px;
    padding: 4px 20px 12px 16px;    
    position: relative;
    display: block;
}
.arrange-title{
    l
}
`
