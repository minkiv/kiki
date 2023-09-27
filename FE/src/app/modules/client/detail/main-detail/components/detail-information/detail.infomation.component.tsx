import { FunctionComponent, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import StarIcon from '~/app/component/parts/rating/star.component'
import QuantityProduct from '~/app/component/parts/quantity/QuantityProduct'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
import { getListColor, getListSize } from '~/app/modules/client/helper/tranform.data'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { addProductToCart } from '~/app/api/cart/cart.api'
import { Modal, message } from 'antd'
import { useAuthRedux } from '~/app/modules/client/redux/hook/useAuthReducer'
import { AiOutlineHeart, AiOutlineDownCircle } from "react-icons/ai";
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
interface DetailInformation { }

const DetailInformation: FunctionComponent<DetailInformation> = () => {
  const { data: { product: productDetail } } = useProductRedux()
  const navigate = useNavigate()
  const {
    data: { isLogin },
    actions: authAction
  } = useAuthRedux()
  const { actions } = useCartRedux()
  const [quantity, setQuantity] = useState(1)
  const [colorSelect, setColorSelect] = useState<any>()
  const [sizeSelect, setSizeSelect] = useState<any>()
  const [checkQuantity, setCheckQuantity] = useState<any[]>([])
  const [quantityRemainProduct, setquantityRemainProduct] = useState<any>({})
  const [listColor, setListColor] = useState([])
  const [listSize, setListSize] = useState([])
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  useEffect(() => {
    setCheckQuantity([])
    const tempColor = getListColor(productDetail)
    const tempSize = getListSize(productDetail)
    setListColor(tempColor)
    setListSize(tempSize)
  }, [productDetail])

  const handleSelectColor = (colorId: any) => {
    const findElement = listColor.find((item: any) => item.id == colorId)
    if (colorId == colorSelect?.id) {
      setColorSelect(null)
    } else {
      setColorSelect(findElement)
    }
  }

  const handleSelectSize = (sizeId: any) => {
    const findElement = listSize.find((item: any) => item.id == sizeId)
    if (sizeId == sizeSelect?.id) {
      setSizeSelect(null)
    } else {
      setSizeSelect(findElement)
    }
  }

  useEffect(() => {
    const filterListQuantity = productDetail.listQuantityRemain?.filter(
      (item: any) => item.nameColor === colorSelect?.nameColor || item.nameSize === sizeSelect?.nameSize
    )
    const findQuantityRemain = productDetail.listQuantityRemain?.find(
      (item: any) => item.nameColor === colorSelect?.nameColor && item.nameSize === sizeSelect?.nameSize
    )
    setCheckQuantity(filterListQuantity)
    setquantityRemainProduct(findQuantityRemain)
  }, [colorSelect, sizeSelect])

  const handelAddProductToCart = () => {
    if (!colorSelect || !sizeSelect) {
      messageApi.error('Vui lòng chọn thông tin')
      return
    }

    if (isLogin) {
      const requestProduct = {
        product: productDetail,
        quantityOrder: {
          quantity,
          nameColor: colorSelect.nameColor,
          nameSize: sizeSelect.nameSize
        }
      }
      actions.addProductToCart(requestProduct)

      const requestApiCart = {
        productId: productDetail._id,
        quantityOrder: {
          quantity,
          nameColor: colorSelect.nameColor,
          nameSize: sizeSelect.nameSize
        }
      }
      addProductToCart(requestApiCart)
      toast.success('thêm vào giỏ hàng thành công')
    }
    if (!isLogin) {
      messageApi.error("bạn chưa đăng nhập tài khoản")
      setTimeout(() => {
        navigate("/customer/login")
      }, 2000)
    }
    else {
      authAction.checkLoginLink("/cart")
    }
  }

  return (
    <div css={cssInfomation}>
      {contextHolder}
      <div>
        <h1 className='font-semibold text-[30px] '> {productDetail?.name}</h1>
      </div>
      <div className='flex mt-2 space-x-5'>
        <p className='text-2xl hidden sm:block'>Thương hiệu: {productDetail?.brand}</p>
        <div className='flex star'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div>(0 đánh giá)</div>
      </div>
      <div className='grid grid-cols-7 xl:mt-10'>
        <div className='col-span-12 '>
          <div className='flex pt-5 p-3'>
            <h1 className='text-black font-semibold text-[26px] '>
              {productDetail?.price?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            </h1>
            <h3 className='pl-5 text-[18px] text-[#a8a9ad]'>
              <del>{productDetail?.cost?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</del>
            </h3>
            <div className='px-6'>
              <p className='text-white bg-[#dc633a] p-2'>-22%</p>
            </div>
          </div>
          <div className='mt-5 max-sm:ml-5'>
            <div>
              <div className='mt-3 '>
                <div className='mb-3 text-[22px]'>
                  Màu Sắc: <span className='font-semibold'>{colorSelect?.nameColor}</span>
                </div>
                <div className='flex items-center my-6'>
                  {listColor?.map((item: any) => (
                    <div
                      key={item.id}
                      className={`p-3 border rounded-md mr-4 cursor-pointer ${colorSelect?.id === item.id && 'bg-red-100 border-red-600'
                        } ${!checkQuantity?.flatMap((itemType: any) => itemType?.nameColor).includes(item.nameColor) &&
                        checkQuantity.length > 0 &&
                        'bg-slate-100 pointer-events-none text-gray-400'
                        }`}
                      onClick={() => handleSelectColor(item.id)}
                    >
                      {item.nameColor}
                    </div>
                  ))}
                </div>
              </div>
              <div className='mt-3 '>
                <div className='mb-3 text-[22px]'>
                  Kích cỡ: <span className='font-semibold'>{sizeSelect?.nameSize}</span>
                </div>
                <div className='flex items-center my-6'>
                  {listSize?.map((item: any) => (
                    <div
                      key={item.id}
                      className={`p-3 border rounded-md mr-4 cursor-pointer ${sizeSelect?.id === item.id && 'bg-red-100 border-red-600'
                        } ${!checkQuantity?.flatMap((itemType: any) => itemType?.nameSize).includes(item.nameSize) &&
                        checkQuantity.length > 0 &&
                        'bg-slate-100 pointer-events-none text-gray-400'
                        }`}
                      onClick={() => handleSelectSize(item.id)}
                    >
                      {item.nameSize}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center'>
            <label htmlFor='quantity' className='text-[18px]'>
              Số Lượng:
            </label>
            <div className='mx-3'>
              <QuantityProduct
                quantity={quantity}
                listQuantityRemain={productDetail?.listQuantityRemain}
                setQuantity={setQuantity}
                sizeSelect={sizeSelect}
                colorSelect={colorSelect}
              />
            </div>
            <div>
              {quantityRemainProduct && (
                <div className='pb-7 my-4 ml-4 text-gray-600 text-[1.6rem]'>
                  {quantityRemainProduct?.quantity} sản phẩm có sẵn
                </div>
              )}
            </div>
          </div>

          <div className='flex mt-5 space-x-5'>
            <ButtonSqua outline className='btn' onClick={handelAddProductToCart}>
              THÊM VÀO GIỎ
            </ButtonSqua>
            <ButtonSqua className='btn'>MUA HÀNG</ButtonSqua>
            <ButtonSqua className='btn'>
              <AiOutlineHeart />
            </ButtonSqua>
          </div>

          <div className='mt-[80px]'>
            <div className='tab-header flex space-x-8 '>
              <div className='active'>GIỚI THIỆU</div>
              <div>CHI TIẾT SẢN PHẨM</div>
              <div>BẢO QUẢN</div>
            </div>
            <div className='tab-body pt-6'>
              <div className=''>
                Thiết kế áo Tapta trễ vai là một lựa chọn thời trang đầy cuốn hút và quyến rũ cho các cô gái yêu thích
                phong cách nữ tính và hiện đại. Với chất liệu vải Tapta cao cấp, sản phẩm mang lại sự mềm mại, êm ái và
                bóng bẩy cho người mặc.
              </div>
              <div className='h-[2px] bg-gray-300 flex items-center'>
                <a className='mx-auto bg-white text-[34px]  text-gray-300 '>
                  <AiOutlineDownCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInformation

const cssInfomation = css`
  margin: 5px 10px 0px 90px;
  font-family: sans-serif;
  .fa-star {
    color: gold;
    font-size: 24px;
  }
  .changeAdress {
    color: rgb(11, 116, 229);
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    height: 48px;
  }
  .tab-header div {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    padding: 18px 0;
    color: #6c6d70;
    cursor: pointer;
    position: relative;
  }
  .tab-body div {
    font-size: 16px;
    line-height: 24px;
    color: #3e3e3f;
    margin-bottom: 2em;
    width: 555px;
  }
  .active {
    border-bottom: 2px solid #000;
  }
  @media (max-width: 640px) {
    .title {
      font-size: 20px;
      padding: 0px 5px;
    }
    .star {
      padding: 3px 5px;
    }
    .sale {
      border: 1px solid rgb(252 165 165);
      padding: 2px;
      margin-left: 5px;
      background-color: rgb(254 242 242);
    }
  }
`
