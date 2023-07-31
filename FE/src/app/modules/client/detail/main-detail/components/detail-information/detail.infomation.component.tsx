import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import StarIcon from '~/app/component/parts/rating/star.component'
import QuantityProduct from '../quantityProduct/Quantity-product.component'
import ButtonComponent from '../../../../../../component/parts/ButtonComponent/Button.componet'
import ButtonIcon from '../../../../../../component/parts/ButtonIcon/Button-Icon.componet'
interface DetailInformation { }


const DetailInformation: FunctionComponent<DetailInformation> = () => {
  return (
    <div css={cssInfomation}>
      <div>
        <p className='text-2xl'>Thương hiệu: <a className='text-cyan-400' href="">Pond's</a></p>
        <h1 className='pt-3 text-4xl opacity-75'>Bộ Đôi Kem Dưỡng Da Ngày Và Đêm Trắng Hồng Rạng Rỡ Pond's White Beauty (50g)</h1>
        <i className="fas fa-star"></i>
      </div>
      <div className='flex mt-2'>
        <div className='flex'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div>
          <button className='btn ml-3'><a href="">(Xem 1072 đánh giá)</a></button>
          <b className='pl-3'>Đã bán 5000+</b>
        </div>
      </div>
      <div className="grid grid-cols-7 mt-10">
        <div className="col-span-4">
          <div className='flex bg-slate-50 p-5'>
            <h1 className='text-red-500 text-6xl font-bold'>235.000 ₫</h1>
            <h3 className='pl-5 pt-4 leading-loose text-2xl '><s>300.000 ₫</s> <b className='text-red-500'>-22%</b> </h3>
          </div>
          <div className='mt-5'>
            <ul>
              <li className='pb-6'>Giao đến: <a className='underline font-bold' href="">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a><a className='text-sky-400 pl-1 font-bold' href="">- Đổi địa chỉ</a></li>
              <li className='pb-6'>Màu Sắc:
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>Đỏ</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>Xanh</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>Vàng</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>Cam</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>Tím</ButtonComponent>

              </li>
              <li className='pb-6'>Kích Cỡ:
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>39</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>40</ButtonComponent>
                <ButtonComponent className='p-3 border w-20 mx-2 hover:border-cyan-400'>41</ButtonComponent>
              </li>
            </ul>
          </div>
          <QuantityProduct />
          <div className='flex mt-10'>
            <ButtonComponent outline className='rounded-xl border w-1/2 p-3  m-2 text-white'>Chọn mua</ButtonComponent>
            <ButtonComponent className='border w-1/2 rounded-xl p-3 m-2 text-blue-600'>Mua trước trả sau <p>Lãi xuất 0%</p></ButtonComponent>

          </div>
        </div>
        <div className="col-span-3 mx-5 border rounded-xl">
          <div className="flex p-3">
            <img className="w-16 rounded-full" src="https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png" alt="Tiki Trading" />
            <div>
              <h6 className="flex items-center pl-5 leading-10">
                Kiki Trading
              </h6>
              <button className="ml-5 w-40 bg-sky-300 text-white">OFFICIAL</button>
            </div>
          </div>
          <div className='flex text-center w-full mt-3'>
            <p className='w-1/2 text-2xl'>
              <b className='flex justify-center'>4.7/5<StarIcon /></b> 5.7tr+
            </p>
            <p className='w-1/2 text-2xl'>
              <b className='flex justify-center'>480.3k</b>Theo dõi
            </p>
          </div>
          <div className='flex'>
            <ButtonIcon outline className='rounded-xl text-xl border w-1/2 p-3 m-2 text-blue-600 flex'>
              <img className='w-10 pr-3' src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt="view-store" />
              Xem shop
            </ButtonIcon>
            <ButtonIcon outline className='border w-1/2 rounded-xl text-xl p-3 m-2 text-blue-600 flex'> <img className='w-10 pr-3' src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt="follow-store" />Theo Dõi</ButtonIcon>
          </div>
          <div className='pl-5 pt-3'>
            <p>Hướng dẫn bảo hành</p>
            <p><a href="" className='text-blue-600'>Xem chi tiết</a></p>
          </div>
          <div className='w-full flex pt-7 px-5'>

            <p className='w-1/3 px-5'>
              <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" height="32" width="32" />
              Hoàn tiền <b>111% </b>
              nếu hàng giả</p>
            <p className='w-1/3 px-5'>
              <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" height="32" width="32" />
              Mở hộp kiểm tra nhận hàng</p>
            <p className='w-1/3 px-5'>
              <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" height="32" width="32" />
              Đổi trả trong 30 ngày nếu sp lỗi.</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default DetailInformation

const cssInfomation = css`
 margin: 5px 0px 0px 20px;
 font-family: serif;
 .fa-star {
    color: gold;
    font-size: 24px;
  }
`