import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component';
import { Link } from 'react-router-dom';
import { useProductRedux } from '../../../redux/hook/useProductReducer';
import AddressSearch from '../address-search/address-search.component';
import FilterProductSearch from '../filter-product/filter.component';
import { Pagination } from 'antd';
import { css } from '@emotion/react';


type Props = {}


const Pagina: React.FC = () => <Pagination defaultCurrent={1} total={50} />;


const ListProduct: FunctionComponent<Props> = () => {
    const { data: { products }, actions } = useProductRedux();
    let keyword = new URLSearchParams(location.search).get('q');
    useEffect(() => {
        actions.getAllProduct();
    }, []);
    return (
        <div css={cssListProduct} className='container mx-auto w-[1440px]'>
            <div>
                <AddressSearch />
            </div>
            <div>
                <FilterProductSearch />
            </div>
            <div className='list' >
                {products?.map((item: any) => {
                    if (item?.name.toLowerCase().includes(keyword?.toLowerCase() || '')) {
                        return (
                            <Link to={`/detail/${item?._id}`} className='' key={item?._id}>
                                <ItemProduct itemProduct={item} key={item?._id} />
                            </Link>
                        )
                    }
                })}
            </div>

            <div className='text-center'>
                <Pagina />
            </div>
        </div>


    )
}
export default ListProduct


const cssListProduct = css`
.list{
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: 0.75rem/* 12px */;
}
@media (min-width: 0) and (max-width:739px){
    width: 100%;
    .list{
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding:5px 10px;
    }
}
`
