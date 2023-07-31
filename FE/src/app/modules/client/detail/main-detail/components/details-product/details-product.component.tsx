import React, { FunctionComponent } from 'react'

interface tableProduct{
    props?: any
}

const DetailProduct: FunctionComponent<tableProduct> = () => {
  return (
    <div className='bg-white p-5'>
        <h2 className='text-3xl'>Thông tin chi tiết</h2>
        <div className='mt-4'>
        <table className='w-full'>
            <tbody>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100 bo">Công ty sản xuất</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5">First News - Trí Việt</td>
            </tr>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100">Ngày Xuất Bản</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-50">2019-11-01 00:00:00</td>
            </tr>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100">Kích thước</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5">13 x 20.5 cm</td>
            </tr>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100">Loại bìa</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-50">Bìa mềm</td>
            </tr>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100">Số trang</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5">480</td>
            </tr>
            <tr>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-100">Nhà xuất bản</td>
                <td className="w-1/2 h-10 px-3.5 py-2.5 bg-gray-50">Nhà xuất bản tổng hợp TP.HCM</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default DetailProduct