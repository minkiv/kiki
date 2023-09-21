import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { Select, Space, Pagination } from 'antd';
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component';

interface ListProductProps {
    props?: any
}

const ListProducts: FunctionComponent<ListProductProps> = () => {
    return (
        <div css={cssListProducts}>
            <div className='title flex'>
                <h1 className="text-title">NEW ARRIVAL </h1>
                <div className='arrange-title'>
                    <Space wrap>
                        <Select
                            className='select-title'
                            defaultValue="Sắp xếp theo"
                            bordered={false}
                            options={[
                                { value: 'Mặc định', label: 'Mặc định' },
                                { value: 'Mới nhất', label: 'Mới nhất' },
                                { value: 'Được mua nhiều nhất', label: 'Được mua nhiều nhất' },
                                { value: 'Được yêu thích nhất', label: 'Được yêu thích nhất' },
                                { value: 'Giá cao đến thấp', label: 'Giá cao đến thấp' },
                                { value: 'Giá thấp đến cao', label: 'Giá thấp đến cao' },
                            ]}
                        />
                    </Space>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 p-10'>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
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
    border: 1px solid #E7E8E9;
    border-radius: 24px;
    padding: 12px 40px 12px 16px;    
    position: relative;
    display: block;
}
`