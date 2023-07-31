import React, { FunctionComponent } from 'react'
import ButtonComponent from '~/app/component/parts/ButtonComponent/Button.componet'
import ButtonIcon from '~/app/component/parts/ButtonIcon/Button-Icon.componet'

interface QuantityProduct {
  props?: any
}
const QuantityProduct: FunctionComponent<QuantityProduct> = () => {
  return (
    <div className='pb-6'>
      <label htmlFor="quantity">Số lượng</label>
      <div className="flex items-center mt-5">
        <ButtonIcon outline className="disable border h-8">
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon" width="20" height="20" /></ButtonIcon>
        <input type="text" value="1" className="border h-8 w-16 text-center" />
        <ButtonIcon outline className="border h-8 text-center">
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon" width="20" height="20" />
        </ButtonIcon>
      </div>
    </div>
  )
}

export default QuantityProduct