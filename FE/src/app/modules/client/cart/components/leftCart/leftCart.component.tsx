import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { BsShopWindow } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import { getListColor, getListSize } from '../../../helper/tranform.data'
import SelectQuantityCart from '~/app/component/parts/quantity/quantitySelect'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import { UpdateProductToCart, deleteProductToCart } from '~/app/api/cart/cart.api'
import { message, Modal } from 'antd'
interface leftCartProps {
  props?: any
}

const LeftCart: FunctionComponent<leftCartProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    data: { carts, listProductBuy },
    actions
  } = useCartRedux()
  useEffect(() => {
    actions.getAllCart()
  }, [])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [showPopupSelect, setShowPopupSelect] = useState<any>({
    show: false,
    index: null
  })
  const [listColor, setListColor] = useState([])
  const [listSize, setListSize] = useState([])

  const [colorSelect, setColorSelect] = useState<any>()
  const [sizeSelect, setSizeSelect] = useState<any>()
  const [checkQuantityType, setCheckQuantityType] = useState<any[]>([])
  const [quantityRemainProduct, setquantityRemainProduct] = useState<any>({})
  const [clickProductDetail, setClickProductDetail] = useState<any>()
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPopupSelect((prev: any) => ({
          ...prev,
          show: false
        }))
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const handleSelectColor = (colorId: string | number) => {
    const findElement = listColor.find((item: any) => item.id === colorId)
    setColorSelect(findElement)
  }

  const handleSelectSize = (sizeId: string | number) => {
    const findElement = listSize.find((item: any) => item.id === sizeId)
    setSizeSelect(findElement)
  }

  useEffect(() => {
    const filterListQuantity = clickProductDetail?.product?.listQuantityRemain?.filter(
      (item: any) => item.nameColor === colorSelect?.nameColor || item.nameSize === sizeSelect?.nameSize
    )
    const findQuantityRemain = clickProductDetail?.product?.listQuantityRemain?.find(
      (item: any) => item.nameColor === colorSelect?.nameColor && item.nameSize === sizeSelect?.nameSize
    )
    setCheckQuantityType(filterListQuantity)
    setquantityRemainProduct(findQuantityRemain)
  }, [colorSelect, sizeSelect])

  useEffect(() => {
    setCheckQuantityType([])
    const defaultOrder = clickProductDetail?.quantityOrder

    const tempColor = getListColor(clickProductDetail, 'cart')
    const tempSize = getListSize(clickProductDetail, 'cart')
    setListSize(tempSize)
    setListColor(tempColor)
    setColorSelect(defaultOrder)
    setSizeSelect(defaultOrder)
  }, [clickProductDetail])

  const cancelChangeProperties = () => {
    const defaultOrder = clickProductDetail?.quantityOrder
    setColorSelect(defaultOrder)
    setSizeSelect(defaultOrder)
    setShowPopupSelect((prev: any) => ({
      ...prev,
      show: false
    }))
  }
  const handleSelectProductBuy = (productBuy: any) => {
    actions.selectListProductBuy(productBuy)
  }
  const handelAllProduct = (productBuy: any) => {
    actions.selectAllProductBuy(productBuy)
  }

  const handleSubmitChangeProperties = () => {
    const objectProperties = {
      colorSelect,
      sizeSelect,
      productId: clickProductDetail.product._id,
      indexProductCart: showPopupSelect.index
    }

    actions.updateOrderProduct(objectProperties)
    setShowPopupSelect((prev: any) => ({
      ...prev,
      show: false
    }))

    //action cart

    const objectIncrement = {
      type: 'COMPARE_QUANTITY',
      itemCart: clickProductDetail,
      quantityRemainProduct
    }

    actions.updateSelectQuantityCart(objectIncrement)
    const requestObjectProduct = {
      productId: clickProductDetail.product._id,
      quantityOrder: {
        nameColor: colorSelect.nameColor,
        nameSize: sizeSelect.nameSize,
        quantity: clickProductDetail.quantityOrder.quantity
      }
    }
    UpdateProductToCart(requestObjectProduct)
  }

  const handleDeleteProductCart = (productId: any) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có muốn xoá sản phẩm khỏi giỏ hàng không ?',
      okButtonProps: { className: 'bg-blue-500 hover:bg-blue-600' },
      onOk() {
        actions.deleteProductCart(productId._id);
        deleteProductToCart(productId._id).then((res) => {
          if (res) {
            messageApi.success('Đã xoá sản phẩm khỏi giỏ hàng');
          }
        });
      },
      onCancel() {
      },
    });
  }

  const isAllSelected = listProductBuy.length >= carts.length && listProductBuy.every((itemBuy: any) =>
    carts.some((item: any) => item._id === itemBuy._id)
  );
  return (
    <div css={cssLeftCart}>
      {contextHolder}
      <div className='style-heading mb-[20px] max-sm:flex sm:flex bg-white  sm:justify-between max-sm:mt-5'>
        <div className='flex'>
          {/* <input type='checkbox' className='sm:w-[18px] max-sm:w-[17px] max-sm:h-[17px] sm:mr-[5px]' /> */}
          <span className='lable sm:mr-[290px] max-sm:ml-3 sm:pl-[4px]'>Tất cả ({carts?.length} sản phẩm)</span>
        </div>
        <span className='taitle-table mr-[100px]'>Đơn giá</span>
        <span className='taitle-table mr-[70px]'>Số lượng</span>
        <span className='taitle-table mr-[90px]'>Thành tiền</span>
        <div className='remove-all'>
          <RiDeleteBinLine size={17} className='delete-icon sm:mr-4 max-sm:mr-5' />
        </div>
      </div>

      <div className='container bg-white '>
        <div className='sub-title sm:flex max-sm:flex px-6  py-3'>
          <input type='checkbox' className='w-[18px] mr-3' onChange={() => { handelAllProduct(carts) }} checked={isAllSelected} />
          <BsShopWindow className='icon-home w-6 h-6 mr-2' />

          <a href='#'>Shop Name</a>
        </div>
        {carts?.map((item: any, index: any) => (
          <div className='box items-center sm:flex max-sm:flex justify-between text-center mr-auto py-3' key={index}>


            <div className='sm:flex max-sm:flex items-center max-sm:mr-1 max-sm:p-[3px] '>
              <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' onChange={() => handleSelectProductBuy(item)} checked={listProductBuy.flatMap((items: any) => items?._id).includes(item?._id)} />
              <img
                src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
                alt=''
                className='w-[76px] h-20'
              />

              <div className='max-sm:mr-2 max-sm:p-[7px]  '>
                {item?.product?.name}
                <div className=' max-sm:w-full relative'>
                  <div
                    className='product-wrap-prices sm:w-[190px] flex  cursor-pointer'
                    onClick={() => {
                      setShowPopupSelect((prev: any) => ({
                        show: !prev.show,
                        index: index
                      })),
                        setClickProductDetail(item)
                    }}
                  >
                    <div className='sm:px-3'>
                      <span className='mr-2'>Màu:</span>
                      <span className='product-real-prices'>{item?.quantityOrder.nameColor}</span>
                    </div>
                    <span className='mr-2'>Kích cỡ:</span>
                    <div className='product-real-prices'>{item?.quantityOrder.nameSize}</div>
                  </div>
                  {showPopupSelect.index === index && showPopupSelect.show && (
                    <div ref={wrapperRef} className=' bg-white shadow-3xl s absolute p-3 rounded-lg z-10'>
                      <div className='my-2'>
                        <div>
                          Màu sắc: <span className='font-semibold'>{colorSelect?.nameColor}</span>
                        </div>
                        <div className='mt-3 sm:flex max-sm:flex items-center'>
                          {getListColor(item, 'cart')?.map((item: any) => (
                            <div
                              key={item.id}
                              className={`p-3 border rounded-md  mr-4 cursor-pointer ${colorSelect?.nameColor === item.nameColor && 'bg-blue-100 border-blue-600'
                                } ${!checkQuantityType
                                  ?.flatMap((itemFlat: any) => itemFlat?.nameColor)
                                  .includes(item.nameColor) &&
                                checkQuantityType.length > 0 &&
                                item.quantity === 0 &&
                                'bg-slate-100 pointer-events-none text-gray-400'
                                }
                              ${Number(item.quantity) === 0 &&
                                checkQuantityType.length === 0 &&
                                'bg-slate-100 pointer-events-none text-gray-400'
                                }
                                `}
                              onClick={() => handleSelectColor(item.id)}
                            >
                              {item.nameColor}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='my-2'>
                        <div className=''>
                          Kích cỡ: <span className='font-semibold'>{sizeSelect?.nameSize}</span>
                        </div>
                        <div className='mt-3 sm:flex max-sm:flex items-center'>
                          {getListSize(item, 'cart')?.map((item: any) => (
                            <div
                              key={item.id}
                              className={`p-3 border rounded-md mr-4 cursor-pointer ${sizeSelect?.nameSize === item.nameSize && 'bg-blue-100 border-blue-600'
                                } ${!checkQuantityType
                                  ?.flatMap((itemType: any) => itemType?.nameSize)
                                  .includes(item.nameSize) &&
                                checkQuantityType.length > 0 &&
                                'bg-slate-100 pointer-events-none text-gray-400'
                                }`}
                              onClick={() => handleSelectSize(item.id)}
                            >
                              {item.nameSize}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className='flex'>
                        <ButtonSqua outline className='mr-4 p-3' onClick={cancelChangeProperties}>
                          Hủy
                        </ButtonSqua>
                        <ButtonSqua className='p-3' onClick={handleSubmitChangeProperties}>
                          Xác nhận
                        </ButtonSqua>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='sm:flex justify-between'>
                <span className='real-prices sm:ml-[145px]'>{item?.product?.price}₫</span>
                <div className='sm:ml-[100px] max-sm:my-2'>
                  <SelectQuantityCart
                    itemCart={item}
                    listQuantityRemain={item?.product?.listQuantityRemain}
                    quantityOrder={item?.quantityOrder?.quantity}
                    colorSelect={
                      clickProductDetail
                        ? colorSelect
                        : item?.product?.listQuantityRemain.find(
                          (items: any) => items?.nameColor == item?.quantityOrder?.nameColor
                        ) || {}
                    }
                    sizeSelect={
                      clickProductDetail
                        ? sizeSelect
                        : item?.product?.listQuantityRemain.find(
                          (items: any) => items?.nameSize == item?.quantityOrder?.nameSize
                        ) || {}
                    }
                  />
                </div>
                <span className='product-final-prices sm:mt-6 text-[17px] sm:ml-[50px]'>{(item?.product?.price * item?.quantityOrder?.quantity)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
              </div>
            </div>
            <span className='product-delete'>
              <RiDeleteBinLine size={17} className='delete-icon mr-11 max-sm:mr-12' onClick={() => handleDeleteProductCart(item)} />
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}
export default LeftCart

const cssLeftCart = css`
      .style-heading {
      padding: 9px 16px;
      border-radius: 4px;
      color: rgb(36, 36, 36);
      font-weight: 400;
      font-size: 13px;
      margin-bottom: 12px;
      top: 105px;
      z-index: 99;
  }
      .box {
        background - color: var(--color-white);
  }
      .sub-title {
        background - color: var(--color-white);
      margin-button: 20px;
      border-radius: 4px;
  }
      .sellername {
        font - size: 15px;
      color: rgb(36, 36, 36);
      font-weight: 500;
  }
      .product-final-prices {
        color: red;
  }
      .delete-icon:hover {
        color: red;
  }
  @media only screen and (max-width: 739px) {
    .style-heading {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      top: 122px;
      left: 0px;
      width: 100%;
      z-index: 5;
      background: rgb(255, 255, 255);
      padding: 11px 16px;
    }
    .taitle-table {
      display: none;
    }
  }
  
      `
