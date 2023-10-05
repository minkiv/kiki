import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import { Select, Space, Pagination } from 'antd'

import { useProductRedux } from '../../redux/hook/useProductReducer'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { Link } from 'react-router-dom'

interface ListProductProps {
  props?: any
  data: any
}

const ListProducts: FunctionComponent<ListProductProps> = (props) => {
  const { data } = props
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <div css={cssListProducts}>
      <div className='title flex justify-between'>
        <h1 className='text-title'>All Product </h1>
        <div className='arrange-title'>
          <Space wrap>
            <Select
              className='select-title'
              defaultValue='Sắp xếp theo'
              bordered={false}
              options={[
                { value: 'Mặc định', label: 'Mặc định' },
                { value: 'Mới nhất', label: 'Mới nhất' },
                { value: 'Được mua nhiều nhất', label: 'Được mua nhiều nhất' },
                { value: 'Được yêu thích nhất', label: 'Được yêu thích nhất' },
                { value: 'Giá cao đến thấp', label: 'Giá cao đến thấp' },
                { value: 'Giá thấp đến cao', label: 'Giá thấp đến cao' }
              ]}
            />
          </Space>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 p-10'>
        {data.map((item: any, index: any) => (
          <Link to={`/detail/${item._id}`} key={index}>
            <ItemProduct itemProduct={item} />
          </Link>
        ))}
      </div>
      <div className='w-[100%] text-center'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default ListProducts

const cssListProducts = css`
.title{
    margin-bottom: 26px;
}
.text-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #221F20;
    padding: 12px 40px 12px 16px;
    text-transform: uppercase;
}
.select-title{
    min-width: 240px;
    width: 100%;
    min-height: 50px;
    border: 1px solid #E7E8E9;
    border-radius: 24px;
    padding: 4px 20px 4px 16px;    
    position: relative;
    display: block;
}
.arrange-title{
    l
}
`
