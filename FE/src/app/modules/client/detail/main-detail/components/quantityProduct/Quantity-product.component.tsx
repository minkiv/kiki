import React, { FunctionComponent } from 'react'

interface QuantityProduct{
    props?: any
}
const QuantityProduct:FunctionComponent<QuantityProduct> = () => {
  return (
    <div className='pb-6'>
    <label htmlFor="quantity">Số lượng</label>
    <div className="flex items-center mt-5">
      <button className=" rounded-xl px-2 w-20 py-1 border " id="decrement">-</button>
      <input type="number" className="rounded-xl mx-2 w-24 h-9 border border-gray-300 text-center" id="quantity" min="1" value={1} />
      <button className="rounded-xl px-2 w-20 py-1 border" id="increment">+</button>
      <p className='pl-6 opacity-50'>701 sản phẩm có sẵn</p>
    </div>
  </div>
  )
}

export default QuantityProduct