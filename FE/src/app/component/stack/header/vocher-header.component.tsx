import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'

interface VorcherHeadePropsProps {
    props?: any
}

const VorcherHeadeProps: FunctionComponent<VorcherHeadePropsProps> = () => {
    return (
        <div>
            <div className='p-4 flex items-center justify-center bg-[#FFE880]'>
                <img
                    src='https://salt.tikicdn.com/ts/upload/5e/ec/fb/150f3c633781ed1da9921e45db90c62d.png'
                    alt=''
                    className='w-[81px]'
                />
                <div className='ml-2 font-medium'>mỗi ngày, tự động áp dụng không cần săn mã</div>
            </div>
        </div>
    )
}

export default VorcherHeadeProps

