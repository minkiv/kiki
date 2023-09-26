import { css } from '@emotion/react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import InputComponent from '../../parts/input/input.component'
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai"
import { PiHandbagSimpleThin } from "react-icons/pi"
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthRedux } from '~/app/modules/client/redux/hook/useAuthReducer'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'


interface HeaderComponentProps {
    props?: any
}


const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
    let navigate = useNavigate()
    const {
        data: { carts },
        actions
    } = useCartRedux()
    const {
        data: { isLogin, isOpen },
        actions: actionsAuth
    } = useAuthRedux()
    const [searchTerm, setSearchTerm] = useState("");
    const [stateInput, setStateInput] = useState(false);
    let keyword = new URLSearchParams(location.search).get('q');
    const { data: { products }, actions: productAction } = useProductRedux()
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        productAction.getAllProduct()
        if (stateInput && products.length != 0) {
            setStateInput(true)
        }
    }, [searchTerm])
    const handelSubmitData = () => {
        navigate(`/search?q=${searchTerm}`)
        if (keyword) {
            setSearchTerm(keyword);
        }
        else setSearchTerm("")
        setStateInput(false)
    }
    useEffect(() => {
        if (keyword) {
            setSearchTerm(keyword);
        }
        else setSearchTerm("")
    }, [keyword])


    useEffect(() => {
        if (isLogin || localStorage.getItem('accessToken')) {
            actions.getAllCart()
        }
    }, [isLogin, isOpen])
    const handleRedirectCart = () => {
        actionsAuth.checkLoginLink("/cart")


    }
    const accessToken = localStorage.getItem("accessToken")
    const handleLoginLogout = () => {
        if (accessToken) {
            localStorage.removeItem("accessToken")
        } else {
            navigate("/")
        }
    }
    return (
        <div className='mx-auto flex items-center justify-between sm:w-[1440px]'>
            <div css={cssMenu} className='space-x-8'>
                <div><Link className='hover:text-red-500' to={'/'}>TRANG CHỦ</Link></div>
                <div><Link className='hover:text-red-500' to={'/'}>SẢN PHẨM</Link></div>
                <div><Link className='hover:text-red-500' to={'/'}>GIỚI THIỆU</Link></div>
                <div><Link className='hover:text-red-500' to={'/'}>LIÊN HỆ</Link></div>
                <div><Link className='hover:text-red-500' to={'/'}>VỀ CHÚNG TÔI</Link></div>


            </div>
            <Link to={"/"}>
                <img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" className='w-[139px] mr-12 max-sm:hidden' />
            </Link>


            <div className='flex align-items:center max-sm:hidden' css={cssWrapperMenu}>
                <div className='  relative'>
                    <InputComponent
                        onChange={handleSearchInputChange}
                        onClick={handelSubmitData}
                        onFocus={() => setStateInput(true)}
                        type="text"
                        value={searchTerm || ""
                        }
                    />
                    {stateInput &&
                        <div className='absolute z-20 rounded-lg bg-white top-full left-0 w-full'>
                            {
                                products?.map((product: any) => {
                                    if (product?.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return (
                                            <ul key={product?._id} className=''>
                                                <Link to={`/search?q=${product?.name}`} onClick={() => {
                                                    setStateInput(false)
                                                }}>
                                                    <li className='px-5 py-3 flex justify-start hover:bg-gray-100'>
                                                        <div className='pl-[18px] pr-2'>
                                                            <AiOutlineSearch />
                                                        </div>
                                                        <div className='truncate'>
                                                            {product?.name}
                                                        </div>
                                                    </li>
                                                </Link>
                                            </ul>
                                        );
                                    }
                                })}
                        </div>}
                </div>
                {stateInput && <div
                    css={cssDarkScreen}
                    onClick={() => setStateInput(false)}
                >
                </div>}
                <div className='item-menu'>
                    <div className='icon'>
                        <AiOutlineUserAdd />
                    </div>
                    <div className='title' onClick={() => actionsAuth.checkLoginLink("/")}>{accessToken ? (
                        <div>
                            <span className='px-5 text-black max-sm:hidden'>
                                XIN CHÀO
                                <ul className='links'>
                                    <li>
                                        <button >
                                            <p className='hover:text-red-500 font-normal text-[15px] py-3' onClick={handleLoginLogout}>Đăng xuất</p>
                                            <Link to={"/manage"}><p className='hover:text-red-500 font-normal text-[15px] py-3'>Quản lý </p></Link>
                                        </button>
                                    </li>
                                </ul>
                            </span>
                        </div>) : (<Link to={'/customer/login'}>Tài khoản</Link>)}</div>
                </div>
                <div css={cssCartMain} className='cart-main relative'>
                    <Link to={isLogin ? '/cart' : '#'} onClick={isLogin ? undefined : handleRedirectCart}>
                        <PiHandbagSimpleThin className='font-bold' />
                    </Link>
                    {carts?.length > 0 && accessToken ? (<span className='absolute show-count'>{carts?.length}</span>) : ("")}
                </div>
            </div>
        </div >
    )
}


export default HeaderComponent
const cssMenu = css`
display:flex;
font-size: 12px;
color: #221F20;
font-weight: 500;
text-transform: uppercase;


`
const cssWrapperMenu = css`
.links {
    list-style: none;
    background-color: white;
    box-shadow: 0 0 7px gray;
    position: absolute;
    top: 100%;
     width:100px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
  }


  .title:hover .links {
    visibility: visible;
  }
 .item-menu{
    display: flex;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    justify-content: flex-end;
    .icon{
       margin-right: 4px;
      font-size: 22px;
     
    }
    .title{
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        position: relative;
    }
   
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
  z-index:10;
  opacity: 0.5;
  position: fixed;
  width: 100%;
  top: 95px;
  bottom: 0;
  left: 0;
  right: 0;
`
