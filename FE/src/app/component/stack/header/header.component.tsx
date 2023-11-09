import { css } from '@emotion/react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import InputComponent from '../../parts/input/input.component'
import { AiOutlineSearch, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthRedux } from '~/app/modules/client/redux/hook/useAuthReducer'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
import { HiOutlineLogout } from 'react-icons/hi'
import { searchProduct } from '~/app/modules/admin/product/service/product.service'

interface HeaderComponentProps {
  props?: any
}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
  let navigate = useNavigate()
  const {
    data: { carts },
    actions
  } = useCartRedux()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchProducts, setSearchProducts] = useState<any[]>([])
  const [stateInput, setStateInput] = useState(false)
  const [searchError, setSearchError] = useState(false)
  let keyword = new URLSearchParams(location.search).get('q')
  const {
    data: { products },
    actions: productAction
  } = useProductRedux()
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    searchProduct(event.target.value).then(
      (res) => {
        setSearchProducts(res.data),
          setSearchError(false)
      },
      (err: any) => {
        setSearchError(true)
      }
    )
  }
  useEffect(() => {
    productAction.getAllProduct()
    if (stateInput && products.length != 0) {
      setStateInput(true)
    }
  }, [searchTerm])
  const handelSubmitData = () => {
    navigate(`/products?q=${searchTerm}`)
    if (keyword) {
      setSearchTerm(keyword)
    } else setSearchTerm('')
    setStateInput(false)
  }
  useEffect(() => {
    if (keyword) {
      setSearchTerm(keyword)
    } else setSearchTerm('')
  }, [keyword])
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    if (accessToken) {
      actions.getAllCart()
    }
  }, [accessToken])

  const handleLoginLogout = () => {
    if (accessToken) {
      localStorage.removeItem('accessToken')
      navigate('/customer/login')
    } else {
      navigate('/')
    }
  }
  return (
    <div className='mx-auto flex items-center justify-between sm:w-[1380px] h-[80px]'>
      <div css={cssMenu} className='space-x-8'>
        <div>
          <Link className='hover:text-red-500' to={'/'}>
            TRANG CHỦ
          </Link>
        </div>
        <div>
          <Link className='hover:text-red-500' to={'/products'}>
            SẢN PHẨM
          </Link>
        </div>
        <div>
          <Link className='hover:text-red-500' to={'/LifeStyle'}>
            LifeStyle
          </Link>
        </div>
        <div>
          <Link className='hover:text-red-500' to={'/Contacts'}>
            LIÊN HỆ
          </Link>
        </div>
        <div className='title'>
          <Link className='hover:text-red-500' to={''}>
            VỀ CHÚNG TÔI
          </Link>
          <div className='news-product'>
            <Link to={'/general'} className='py-4 px-4 font-semibold'>
              {' '}
              Về Ivy modar
            </Link>
            <Link to={'/Community-Activities'} className='py-4 px-4 font-semibold'>
              {' '}
              Fashion Show
            </Link>
            <Link to={'/fashion-Show'} className='py-4 px-4 font-semibold'>
              {' '}
              Hoạt động cộng đồng
            </Link>
          </div>
        </div>
      </div>
      <Link to={'/'}>
        <img src='https://pubcdn.ivymoda.com/ivy2/images/logo.png' className='w-[139px] mr-12 max-sm:hidden' />
      </Link>
      <div className='flex align-items:center max-sm:hidden' css={cssWrapperMenu}>
        <div className='relative'>
          <InputComponent
            onChange={handleSearchInputChange}
            onClick={handelSubmitData}
            onFocus={() => setStateInput(true)}
            type='text'
            value={searchTerm || ''}
          />
          {stateInput && (
            <div className='absolute z-20 rounded-lg bg-white top-full left-0 w-full'>
              {!searchError && searchProducts?.map((product: any) => {
                return (
                  <ul key={product?._id} className=''>
                    <Link
                      to={`/products?q=${product?.name}`}
                      onClick={() => {
                        setStateInput(false)
                      }}
                    >
                      <li className='px-5 py-3 flex justify-start hover:bg-gray-100'>
                        <div className='pl-[18px] pr-2'>
                          <AiOutlineSearch />
                        </div>
                        <div className='truncate'>{product?.name}</div>
                      </li>
                    </Link>
                  </ul>
                )
              })}

            </div>
          )}
        </div>
        {stateInput && <div css={cssDarkScreen} onClick={() => setStateInput(false)}></div>}
        <div className='item-menu'>
          <div className='icon'>
            <AiOutlineUserAdd />
          </div>
          <div className='title'>
            {accessToken ? (
              <div>
                <span className='px-5 text-black max-sm:hidden'>
                  XIN CHÀO
                  <ul className='links'>
                    <li>
                      <button className='w-[100%]'>
                        <p className=' font-normal text-[15px] py-3' onClick={handleLoginLogout}>
                          {' '}
                          <HiOutlineLogout />
                          Đăng xuất
                        </p>
                        <Link to={'/manage'}>
                          <p className=' font-normal text-[15px] py-3'>
                            <AiOutlineSetting />
                            Quản lý{' '}
                          </p>
                        </Link>
                      </button>
                    </li>
                  </ul>
                </span>
              </div>
            ) : (
              <Link to={'/customer/login'}>Tài khoản</Link>
            )}
          </div>
        </div>
        <div className='hr-height'></div>
        <div css={cssCartMain} className='cart-main relative'>
          <Link to={'/cart'}>
            <AiOutlineShoppingCart className='font-extrabold' />
          </Link>
          {carts?.length >= 0 && accessToken ? <span className='absolute show-count'>{carts?.length}</span> : ''}
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
const cssMenu = css`
  display: flex;
  font-size: 13px;
  color: #221f20;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif !important;

  .news-product {
    list-style: none;
    background-color: white;
    position: absolute;
    top: 17px;
    width: 216px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #e7e8e9;
    border-right: 1px solid #e7e8e9;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
    border-radius: 8px;
  }
  .news-product a {
    margin: 4px;
  }
  .news-product a:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border-radius: 8px;
  }
  .title:hover .news-product {
    visibility: visible;
  }
  .title {
    cursor: pointer;
    position: relative;
  }
`
const cssWrapperMenu = css`
  .links {
    font-size: 16px;
    list-style: none;
    background-color: white;
    position: absolute;
    border-left: 1px solid #e7e8e9;
    border-right: 1px solid #e7e8e9;
    border-bottom: 1px solid #e7e8e9;
    top: 30px;
    right: -16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
  }
  .links svg {
    display: inline-block;
    margin-right: 8px;
  }
  .links p:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border-radius: 8px;
  }
  .item-menu:hover .links,
  .links:hover {
    visibility: visible;
  }
  .item-menu {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    justify-content: flex-end;
    border: 1px solid rgba(39, 39, 42, 0.12);
    margin: 0 4px;
    .icon {
      margin-right: 4px;
      font-size: 22px;
    }
    .title {
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      position: relative;
    }
  }
  .item-menu:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border: 1px solid rgba(39, 39, 42, 0.11);
  }
  .hr-height {
    width: 1px;
    border: 1px solid rgba(39, 39, 42, 0.12);
    margin: 0 4px;
  }
`
const cssCartMain = css`
  .show-count {
    top: 0px;
    right: 0px;
    border-radius: 50px;
    background: #ef4444;
    font-size: 1.3rem;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: relative;
  display: block;
  height: 100%;
  padding: 8px 14px;
  font-size: 22px;
  border-radius: 8px;
  color: var(--color-black);
  cursor: pointer;

  @media (min-width: 0) and (max-width: 739px) {
    padding: 0;
    margin-left: 10px;
  }
`
const cssDarkScreen = css`
  z-index: 10;
  opacity: 0.5;
  position: fixed;
  width: 100%;
  top: 95px;
  bottom: 0;
  left: 0;
  right: 0;
`
