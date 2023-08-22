import { FunctionComponent} from 'react'
import { css } from '@emotion/react'
import StarIcon from '~/app/component/parts/rating/star.component'
import QuantityProduct from '~/app/component/parts/quantity/QuantityProduct'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import ButtonIcon from '../../../../../../component/parts/button/Button-Icon.componet'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
interface DetailInformation { }

const DetailInformation: FunctionComponent<DetailInformation> = () => {
  const { data: { product: productDetail } } = useProductRedux()

  console.log(productDetail)

  return (
    <div css={cssInfomation}>

      <div>
        <p className='text-2xl hidden sm:block'>Thương hiệu: <a className='text-cyan-400' href="">{productDetail?.brand}</a></p>
        <h1 className="pt-3 xl:text-4xl xl:opacity-75 title"> {productDetail?.name}</h1>
        <i className="fas fa-star"></i>
      </div>
      <div className='flex mt-2'>
        <div className='flex star'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className='text-gray-600'>
          <button className='btn mx-3'><a href="">(Xem 1072 đánh giá)</a></button>
          Đã bán 5000+
        </div>
      </div>
      <div className="grid grid-cols-7 xl:mt-10">
        <div className="col-span-12 xl:col-span-4">
          <div className='flex pt-5 p-3 xl:bg-slate-50 xl:p-5'>
            <h1 className="text-red-500 font-bold text-4xl  xl:text-6xl">{productDetail?.price}</h1>
            <h3 className='pl-5 text-xl pt-3 xl:text-2xl'><s className=' opacity-50 '>300.000 ₫</s>
              <b className='text-red-500 sale'>-22%</b> </h3>
          </div>
          <div className='mt-5 max-sm:ml-5'>
            <ul>
              <li className='pb-6'>Giao đến: <a className='underline font-bold' href="">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a><a className='changeAdress pl-1 font-bold' href="">- Đổi địa chỉ</a></li>
              <li className='pb-6'>Màu Sắc:
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>Đỏ</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>Xanh</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>Vàng</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>Cam</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>Tím</ButtonSqua>
              </li>
              <li className='pb-6'>Kích Cỡ:
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>39</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>40</ButtonSqua>
                <ButtonSqua className='p-3 border w-20 mx-2 hover:border-cyan-400'>41</ButtonSqua>
              </li>
            </ul>
          </div>
          <div className='max-sm:ml-5 max-sm:flex sm:flex'>
            <label htmlFor="quantity" className='max-sm:mt-5 sm:mt-5'>Số Lượng:</label>
            <div className='mx-3'>
              <QuantityProduct />
            </div>
          </div>
          <div className='flex mt-5'>
            <ButtonSqua outline className='rounded-xl border w-1/2 p-3  mx-2 text-white'>Chọn mua</ButtonSqua>
            <ButtonSqua className='border border-sky-500 w-1/2 rounded-xl p-3 mx-2 text-blue-600'>Mua trước trả sau <p>Lãi xuất 0%</p></ButtonSqua>
          </div>
        </div>
        <div className="xl:col-span-3 max-sm:col-span-12 max-sm:my-10 max-sm:py-5 mx-5 border rounded-xl">
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
              <b className='flex justify-center'>
                <span className="mr-1">4.7</span>
                <span className="text-gray-500">/</span>
                <span className="ml-1">5</span><StarIcon />
              </b>
              <p className='opacity-75'>5.7tr+</p>
            </p>
            <p className='w-1/2 text-2xl'>
              <b className='flex justify-center'>480.3k</b>
              <p className='opacity-75'>Theo dõi</p>
            </p>
          </div>
          <div className='flex'>
            <ButtonIcon outline className='rounded-xl border-sky-600 border text-xl w-1/2 p-3 m-2 text-sky-600 flex items-center justify-center'>
              <img className='w-10 pr-3' src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt="view-store" />
              Xem shop
            </ButtonIcon>
            <ButtonIcon outline className='border border-sky-600 w-1/2 rounded-xl text-xl p-3 m-2 text-sky-600 flex items-center justify-center'>
              <img className='w-10 pr-3' src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt="follow-store" />
              Theo Dõi
            </ButtonIcon>
          </div>
          <div className='pl-5 pt-3'>
            <p className='opacity-75'>Hướng dẫn bảo hành</p>
            <p><a href="" className='text-blue-600 opacity-75'>Xem chi tiết</a></p>
          </div>
          <div className='w-full flex pt-7 px-5 text-center'>
            <p className='xl:w-1/3 px-5'>
              <img className='max-sm:w-5/6 mx-auto px-3 pb-2' alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" height="32" width="32" />
              Hoàn tiền <b>111% </b>
              nếu hàng giả</p>
            <p className='xl:w-1/3 px-5'>
              <img className='max-sm:w-5/6 mx-auto px-3 pb-2' alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" height="32" width="32" />
              Mở hộp kiểm tra nhận hàng</p>
            <p className='xl:w-1/3 px-5'>
              <img className='max-sm:w-5/6 mx-auto px-3 pb-2' alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" height="32" width="32" />
              Đổi trả trong 30 ngày nếu sp lỗi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInformation

const cssInfomation = css`
 margin: 5px 10px 0px 10px;
 font-family: serif;
 .fa-star {
    color: gold;
    font-size: 24px;
  }
  .changeAdress{
    color: rgb(11, 116, 229)
  }
  @media (max-width: 640px){
    .title{
      font-size: 20px;
      padding: 0px 5px;
    }
    .star{
      padding: 3px 5px;
    }
    .sale{
      border: 1px solid rgb(252 165 165);
      padding: 2px;
      margin-left: 5px;
      background-color: rgb(254 242 242);
    }
  }
`