import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import { getListColor, getListSize } from '../../../helper/tranform.data'
import SelectQuantityCart from '~/app/component/parts/quantity/quantitySelect'
import { UpdateProductToCart, deleteProductToCart } from '~/app/api/cart/cart.api'
import { message, Modal } from 'antd'
interface leftCartProps {
  props?: any
}

const LeftCart: FunctionComponent<leftCartProps> = () => {
  const [messageApi, contextHolder] = message.useMessage()
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

    // if (!colorSelect || !sizeSelect) {
    //   messageApi.error('Vui lòng chọn thông tin')
    //   return
    // }
    if (quantityRemainProduct.quantity == null || quantityRemainProduct.quantity == 0) {
      message.error('hêt hàng')
      return
    }
    actions.updateOrderProduct(objectProperties)
    setShowPopupSelect((prev: any) => ({
      ...prev,
      show: false
    }))

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
        actions.deleteProductCart(productId._id)
        deleteProductToCart(productId._id).then((res) => {
          if (res) {
            messageApi.success('Đã xoá sản phẩm khỏi giỏ hàng')
          }
        })
      },
      onCancel() {}
    })
  }

  const isAllSelected =
    listProductBuy.length >= carts.length &&
    listProductBuy.every((itemBuy: any) => carts.some((item: any) => item._id === itemBuy._id))
  return (
    <div css={cssLeftCart}>
      {contextHolder}

      <div className='flex'>
        {/* <input type='checkbox' className='sm:w-[18px] max-sm:w-[17px] max-sm:h-[17px] sm:mr-[5px]' /> */}
        <span className='text-[20px] pb-[15px]'>Tất cả ({carts?.length} sản phẩm)</span>
      </div>

      <table className='w-full'>
        <thead>
          <tr>
            <th className='taitle-table sm:flex max-sm:flex px-5  py-3'>
              <input
                type='checkbox'
                className='w-[18px] mr-3'
                onChange={() => {
                  handelAllProduct(carts)
                }}
                checked={isAllSelected}
              />
              <a href='#'>Lựa chọn tất cả</a>
            </th>
            <th className='taitle-table'>Đơn giá</th>
            <th className='taitle-table'>Số lượng</th>
            <th className='taitle-table'>Thành tiền</th>
            <th className='remove-all'>
              <RiDeleteBinLine size={17} className='delete-icon sm:mr-4 max-sm:mr-5' />
            </th>
          </tr>
        </thead>
        <tbody>
          {carts?.map((item: any, index: any) => (
            <tr className='trbody' key={index}>
              <td className='flex items-center space-x-3'>
                <input
                  type='checkbox'
                  className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2'
                  onChange={() => handleSelectProductBuy(item)}
                  checked={listProductBuy?.flatMap((items: any) => items?._id)?.includes(item?._id)}
                />
                <img src={item?.product?.images[0]} alt='' className='w-[100px]' />

                <div className='max-sm:mr-2 max-sm:p-[7px]'>
                  <div className=' max-sm:w-full relative'>
                    <div className='product-detail'>
                      <div className='text-[20px] font-medium pb-4'>{item?.product?.name}</div>
                      <div className=' inline-block mr-4'>
                        <span className='mr-2'>Màu:</span>
                        <span className='product-real-prices'>{item?.quantityOrder?.nameColor}</span>
                      </div>
                      <span className='mr-2'>Kích cỡ:</span>
                      <div className='product-real-prices inline-block'>{item?.quantityOrder?.nameSize}</div>
                    </div>
                    <div
                      className='card-update sm:w-[190px] mt-4 flex inline-block cursor-pointer '
                      onClick={() => {
                        setShowPopupSelect((prev: any) => ({
                          show: !prev.show,
                          index: index
                        })),
                          setClickProductDetail(item)
                      }}
                    >
                      Cập nhật
                    </div>
                    {showPopupSelect.index === index && showPopupSelect.show && (
                      <div
                        ref={wrapperRef}
                        className='bg-white w-[max-content] shadow-3xl mt-[-24px] s absolute p-3 rounded-lg z-10'
                      >
                        <div className='flex gap-[10px]'>
                          <div className='my-2'>
                            <div>
                              Màu sắc: <span className='font-semibold'>{colorSelect?.nameColor}</span>
                            </div>
                            <div className='mt-3 sm:flex max-sm:flex items-center'>
                              {getListColor(item, 'cart')?.map((item: any) => (
                                <div
                                  key={item?.id}
                                  style={{
                                    backgroundColor: `${item.colorRbg}`
                                  }}
                                  className={`p-3 border h-[32px] w-[32px] rounded-md  mr-4 cursor-pointer ${
                                    colorSelect?.nameColor === item?.nameColor && 'bg-red-100 border-red-600'
                                  } ${
                                    !checkQuantityType
                                      ?.flatMap((itemFlat: any) => itemFlat?.nameColor)
                                      .includes(item?.nameColor) &&
                                    checkQuantityType?.length > 0 &&
                                    item.quantity === 0 &&
                                    'bg-slate-100 pointer-events-none text-gray-400'
                                  }
                      ${
                        Number(item.quantity) === 0 &&
                        checkQuantityType.length === 0 &&
                        'bg-slate-100 pointer-events-none text-gray-400'
                      }
                        `}
                                  onClick={() => handleSelectColor(item?.id)}
                                ></div>
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
                                  className={`p-3 border rounded-md mr-4 cursor-pointer ${
                                    sizeSelect?.nameSize === item?.nameSize && 'bg-red-100 border-red-600'
                                  } ${
                                    !checkQuantityType
                                      ?.flatMap((itemType: any) => itemType?.nameSize)
                                      .includes(item?.nameSize) &&
                                    checkQuantityType.length > 0 &&
                                    'bg-slate-100 pointer-events-none text-gray-400'
                                  }`}
                                  onClick={() => handleSelectSize(item?.id)}
                                >
                                  {item?.nameSize}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className='flex space-x-2'>
                          <button className='px-3 py-2 bt-update-cancel text-white' onClick={cancelChangeProperties}>
                            Hủy
                          </button>
                          <button className='px-3 py-2 bt-update-ok text-white' onClick={handleSubmitChangeProperties}>
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className='text-[16px]'>
                <span className='real-prices'>
                  {' '}
                  {item?.product?.price?.toLocaleString('vi', {
                    style: 'currency',
                    currency: 'VND'
                  })}
                </span>
              </td>
              <td>
                <div className=''>
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
              </td>
              <td>
                <span className='product-final-prices sm:mt-6 text-[17px]'>
                  {(item?.product?.price * item?.quantityOrder?.quantity)?.toLocaleString('vi', {
                    style: 'currency',
                    currency: 'VND'
                  })}
                </span>
              </td>
              <td className='product-delete'>
                <RiDeleteBinLine
                  size={17}
                  className='delete-icon mr-11 max-sm:mr-12'
                  onClick={() => handleDeleteProductCart(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default LeftCart

const cssLeftCart = css`
thead{
  border-top : 1px solid;
  border-bottom: 1px solid;
  border-color: #eee;
}
.bt-update-cancel,.bt-update-ok{
  border-radius: 4px;
}
.bt-update-cancel{
  background-color: #000;
}
.bt-update-ok{
  background-color: #ffaa00
}
.card-update{
  color: #ffaa00 ;
  text-decoration: underline;
}
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
  .taitle-table {
    text-align:left;
    font-size:16px;
    font-weight: 300;
    color: #333
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
  .trbody td{
    margin: 12px 0;
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
