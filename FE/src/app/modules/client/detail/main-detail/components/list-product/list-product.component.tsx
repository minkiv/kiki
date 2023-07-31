import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'

interface Listproduct{
    props?: any
}
const Listproduct:FunctionComponent<Listproduct> = () => {
  return (
    <div className='bg-slate-50 p-5'>
    <h2 className='text-3xl pb-5'>Sản phẩm tương tự</h2>
    <div className='list-product flex'>
        <div className='px-2'>
            <ItemProduct/>
        </div>
        <div className='px-2'>
            <ItemProduct/>
        </div>
        <div className='px-2'>
            <ItemProduct/>
        </div>
        <div className='px-2'>
            <ItemProduct/>
        </div>
        <div className='px-2'>
            <ItemProduct/>
        </div>
    </div>
    </div>
  )
}

export default Listproduct
const cssList = css `

`