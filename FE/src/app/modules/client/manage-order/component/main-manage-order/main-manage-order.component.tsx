import { css } from '@emotion/react'
import { FunctionComponent } from 'react'

interface MainManangeOrderProps {
    props?: any
}

const MainManangeOrder: FunctionComponent<MainManangeOrderProps> = () => {
    return (
        <div css={cssMainManangeOrder}>
            <h1>Quản lý đơn hàng</h1>

            <div>
                <table className='w-[1100px]'>
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >Ngày</th>
                            <th >Trạng thái đơn hàng</th>
                            <th className='w-[400px]'>Sản phẩm</th>
                            <th >tổng tiến</th>
                            <th >hành động</th>
                        </tr>
                    </thead>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td><button className='bg-red-500 text-white py-3 px-7 hover:bg-red-300'>xoá đơn hàng</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainManangeOrder

const cssMainManangeOrder = css`
padding:0 40px;
h1{
    font-weight: 600;
    font-size: 24px;
}

th{
    border-top: 1px solid #f7f8f9;
    border-bottom: 1px solid #f7f8f9;
    height: 55px;
    font-size: 14px;
    line-height: 16px;
    color: #6c6d70;
    vertical-align: top;
    padding-top: 21px;
    padding-bottom: 12px;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    text-align:center
}
td{
    text-align:center
}


`