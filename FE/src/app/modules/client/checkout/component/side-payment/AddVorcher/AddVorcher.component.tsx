import React, { useEffect } from 'react'
import { css } from '@emotion/react';
import { useVorcherRedux } from '~/app/modules/client/redux/hook/useVorcherReducer';
type Props = {}

const AddVorcher = (props: Props) => {
    
    const { data: { vorchers }, actions: actionsVorcher } = useVorcherRedux()
    useEffect(() => {
        actionsVorcher.getVorcher()
      }, [])
    return (
        <div className='container' css={cssvorcher}>
            <div className='allvorcher'>
                <div className='flex'>
                <table className="min-w-full">
                    <thead>
                        <tr>
                        <th className="py-2"></th>
                        <th className="py-2">Vorcher</th>
                        <th className="py-2">Mã</th>
                        <th className="py-2">Giảm giá</th>
                        <th className="py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vorchers.map((item: any, index: any) => (
                            <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} key={index}>
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{item?.name}</td>
                            <td className="py-2 px-4">{item?.code}</td>
                            <td className="py-2 px-4">{item?.discount}</td>
                            <td className="py-2 px-4"></td>
                            </tr>
                        ))}
                        </tbody>
                        
                </table>               
                </div>
                </div>
        </div>
    )
}


export default AddVorcher
const cssvorcher = css`
    .allvorcher{
        width: auto;
        max-height: 150px;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 10px;
    }
`