import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import { useVorcherRedux } from '../../../redux/hook/useVorcherReducer'
import { GrFormClose } from 'react-icons/gr'
import { message } from 'antd'
interface SidePaymentProps {
  props?: any
}

const SidePayment: FunctionComponent<SidePaymentProps> = () => {
  // const { data: { infoOrder } } = useOrderRedux()
  const [isClicked, setIsClicked] = useState(false)
  const [textContent, setTextContent] = useState('Xem thông tin')
  const [totalPrice, setTotalPrice] = useState<any>(0)
  const [voucherCode, setVoucherCode] = useState<any>('');
  const [sale, setSale] = useState<any>('');
  const handleClick = () => {
    if (isClicked) {
      setTextContent('Xem thông tin')
    } else {
      setTextContent('Thu gọn')
    }
    setIsClicked(!isClicked)
  }
  const {
    data: { listProductBuy },
    actions
  } = useCartRedux()

  const { data: { vorchers }, actions: actionsVorcher } = useVorcherRedux()

  useEffect(() => {
    actions.getAllCart()
  }, [])
  useEffect(() => {
    actionsVorcher.getVorcher()
  }, [])
  useEffect(() => {
    if (listProductBuy) {
      const calculatedTotal = listProductBuy.reduce(
        (total: any, item: any) => total + item?.product?.price * item?.quantityOrder.quantity,
        0
      )
      setTotalPrice(calculatedTotal)
    }
  }, [listProductBuy])
 
const handleApplyVoucher = (value: string) => {
  if (value === '') {
    message.error('Voucher code is required');
    setSale(0);
    return;
  }
  let found = false;
  for (let i = 0; i < vorchers.length; i++) {
    if (vorchers[i].code === value) {
      setSale(vorchers[i].discount);
      found = true;
      break;
    }
  }

  if (!found) {
    setSale(0);
  }

  localStorage.setItem('voucherCode', value);
}

  
  
  // Hàm xử lý sự kiện khi nút "Áp dụng" được nhấn
  // const handleVnPayPayment = async () => {
  //   const response = await createPayment({ infoOrder, productOrder: totalPrice - sale });
  //   const vnpayUrl = response.data;
  //   window.location.href = vnpayUrl;
  // };
  const [stateAddVorcher, setstateAddVorcher] = useState(false)
  const [stateAddVorcherHoliday, setstateAddVorcherHoliday] = useState(false)
  const isHoliday = vorchers.some((item:any) => item.type === "Ngày lễ");


  const [valueVorcher, setValivocher]= useState<any>('')
  const getValueVocher = localStorage.getItem("voucherCode")
  console.log(vorchers.map((item:any) => item.endday).join(", "));
  useEffect(()=>{
    setValivocher(getValueVocher)
  },[getValueVocher])
  return (
    <div css={cssSidebar} className=' max-md:hidden mt-[30px]'>
      <div className='sidebar-wrapper max-sm:hidden'>
        <div className='header'>
          <h1 className='title text-[22px] font-semibold mb-[45px]'>Tóm tắt đơn hàng</h1>
          <div className='block-header-subtitle flex'>
            <p className='sub-title-text'> Sản phẩm:</p>
            <p className='sub-title-link ' onClick={handleClick}>
              {textContent}
              <svg
                className='sub-title-link__arrow'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z'
                  fill='#0B74E5'
                ></path>
              </svg>
            </p>
          </div>
        </div>

        <div className='styles_Divider'></div>
        <div>
          {isClicked && (
            <div className='w-[100%] py-[8px] px-[16px]  space-y-4'>
              {listProductBuy?.map((item: any, index: any) => (
                <div className='flex flex-1 justify-between items-center' key={index}>
                  <div>
                    <img src={item?.product?.images[0]} alt='' className='w-[40px] h-[50px]' />
                  </div>
                  <div className=''>{item?.quantityOrder?.quantity}x</div>
                  <div className='truncate w-[50%]'>{item?.product?.name}</div>
                  <div className=''>
                    {(item?.product?.price * item?.quantityOrder?.quantity)?.toLocaleString('vi', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='summary'>
          <div className='summary-flexRow'>
            <div className='summary-label'>Tạm tính</div>
            <div className='summary-value'>
              {totalPrice?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            </div>
          </div>
          <div className='summary-flexRow'>
            <div className='summary-label'>Phí vận chuyển</div>
            <div className='summary-value'>0 đ</div>
          </div>

          <div className='summary-flexRow'>
            <div className='summary-label'>Giảm giá</div>
            <div className='summary-value summary-value-positive'>{sale?.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND'
            })}</div>
          </div>
        </div>
        <div className='order-total'>
          <div className='order-total-label'>Tổng tiền</div>
          <div className='order-total-value'>
            <div className='order-total-total'>
              {(totalPrice - sale)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            </div>
          </div>
        </div>
        <div className='styles_Divider'></div>

        {totalPrice >= 1000000 ? (<div>
          <div className='flex px-[16px] py-[8px]'>
            <div className='text-[18px] font-semibold text-[#3e3e3f]'>Mã phiếu giảm giá</div>
            <span className='mx-[20px] w-[2px] h-[24px] bg-[#939598]'></span>

            <div>
              <div
                className="text-[18px] font-semibold text-[#3e3e3f]"

              >
                <button onClick={() => setstateAddVorcher(true)}>Mã của tôi</button>
              </div>
            </div>
          </div>
          {stateAddVorcher && <div className='absolute z-50'>
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
                        <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vorchers.map((item: any, index: any) => (
                            <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} key={index}>
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{item?.name}</td>
                            <td className="py-2 px-4">{item?.code}</td>
                            <td className="py-2 px-4">{item?.discount}</td>
                            <td className="py-2 px-4">
                              <button onClick={() => handleApplyVoucher(item?.code)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Áp dụng
                              </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                        
                </table>               
                </div>
                </div>
        </div>
            <div className='absolute top-2 right-2 text-[20px]' onClick={() => setstateAddVorcher(false)}><GrFormClose /></div>
          </div>}
          {stateAddVorcher && <div className='darkscreen fixed z-40' onClick={() => setstateAddVorcher(false)}></div>}
          <div className='flex px-[16px] py-[20px]'>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              type="text"
              value={valueVorcher}
              placeholder="Mã giảm giá"
              onChange={(e: any) => {
                setVoucherCode(e.target.value)
                localStorage.setItem('voucherCode', e.target.value)
              }}
            />
            <ButtonSqua children='Áp dụng' className='btnSqua' onClick={handleApplyVoucher} />
          </div>

        </div>
        ) : (
          <div className='flex px-[16px] py-[8px]'>
            {stateAddVorcherHoliday && <div className='absolute z-50'>
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
                        <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vorchers.map((item: any, index: any) => (
                            <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} key={index}>
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{item?.name}</td>
                            <td className="py-2 px-4">{item?.code}</td>
                            <td className="py-2 px-4">{item?.discount}</td>
                            <td className="py-2 px-4">
                              <button onClick={() => handleApplyVoucher(item?.code)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Áp dụng
                              </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                        
                </table>               
                </div>
                </div>
            </div>
              <div className='absolute top-2 right-2 text-[20px]' onClick={() => setstateAddVorcherHoliday(false)}><GrFormClose /></div>
            </div>}
            {stateAddVorcherHoliday && <div className='darkscreen fixed z-40' onClick={() => setstateAddVorcherHoliday(false)}></div>}
            <div>
              {isHoliday && (
                <div>
                  <div className="flex px-[16px] py-[8px]">
                    <div className="text-[18px] font-semibold text-[#3e3e3f]">Mã phiếu giảm giá</div>
                    <span className="mx-[20px] w-[2px] h-[24px] bg-[#939598]"></span>
                    <div>
                      <div className="text-[18px] font-semibold text-[#3e3e3f]">
                        <button onClick={() => setstateAddVorcherHoliday(true)}>Mã của tôi</button>
                      </div>
                    </div>
                  </div>
                  <div className='flex px-[16px] py-[20px]'>
                    <input
                      className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="text"
                      value={valueVorcher}
                      placeholder="Mã giảm giá"
                      onChange={(e: any) => {
                        setVoucherCode(e.target.value)
                        localStorage.setItem('voucherCode', e.target.value)
                      }}
                    />
                    <ButtonSqua children='Áp dụng' className='btnSqua' onClick={handleApplyVoucher} />
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
        <div className='flexRow'>
          <button className='button-order' type='submit'>
            Đặt hàng ({listProductBuy.length})
          </button>
        </div>
      </div>
    </div>
  )
}

export default SidePayment

const cssSidebar = css`
  width: 100%;
  top: 0px;
  .sidebar-wrapper {
    background-color: var(--color-white);
    border-radius: 4px;
  }
  .header {
    padding: 16px;
  }
  .block-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .sub-title-text {
    color: rgb(128, 128, 137);
    font-weight: 400;
    margin: 0px 4px 0px 0px;
  }
  .sub-title-link {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: red;
    font-weight: 400;
    margin: 0px;
    cursor: pointer;
  }
  .sub-title-link__arrow {
    transform: rotate(90deg);
    transition-duration: 0.5s;
  }
  .summary {
    padding: 8px 16px;
    display: grid;
    gap: 4px;
    font-size: 14px;
    line-height: 20px;
  }
  .summary-label {
    color: rgb(128, 128, 137);
  }
  .summary-flexRow,
  .order-total,
  .flexRow {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .summary-value-positive {
    color: rgb(0, 171, 86);
  }
  .styles_Divider {
    width: calc(100% - 32px);
    height: 1px;
    background-color: rgb(235, 235, 240);
    margin: 0px auto;
  }
  .order-total {
    padding: 8px 16px;
  }
  .order-total-label {
    font-size: 14px;
    line-height: 20px;
    color: rgb(56, 56, 61);
  }
  .order-total-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .order-total-total {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: rgb(255, 66, 78);
  }
  .label {
    color: rgb(64, 45, 161);
  }
  .value {
    text-align: right;
  }
  .button-order {
    margin: 0px 16px 16px;
    color: rgb(255, 255, 255);
    background-color: #000;
    border: none;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 44px;
    outline: 0px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
  }
  .button-order:hover {
    background-color: #ffaa00;
  }
  .btnSqua {
    max-width: 104px;
    height: 48px;
    padding: 0 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 16px;
    border-radius: 16px 0px;
  };
  .darkscreen{
    positon:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:gray;
    opacity:0.5;
  }
`
const cssvorcher = css`
    .allvorcher{
        width: auto;
        max-height: 150px;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 10px;
    }
`