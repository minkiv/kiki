import { css } from '@emotion/react'
import React, { FunctionComponent, useEffect } from 'react'
import InputComponent from '../../parts/input/input.component'
import { ImHome } from "react-icons/im"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthRedux } from '~/app/modules/client/redux/hook/useAuthReducer'
import RequireAuth from '~/app/modules/client/accountLogin/requireAuth.component'

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

    useEffect(() => {
        if (isLogin || localStorage.getItem('accessToken')) {
            actions.getAllCart()
        }
    }, [isLogin, isOpen])

    const handleRedirectCart = () => {
        actionsAuth.checkLoginLink("/cart")

    }
    const accessToken = localStorage.getItem("accessToken")
    return (
        <div className='flex items-center justify-between sm:w-[1440px]'>
            <Link to={"/"}>
                <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" className='w-[57px] mr-12 max-sm:hidden' />
            </Link>

            <InputComponent />
            <div className='ml-12 flex align-items:center max-sm:hidden' css={cssWrapperMenu}>
                <Link to={"/"}>
                    <div className='item-menu active'>
                        <div className='icon'>
                            <ImHome />
                        </div>
                        <div className='title'>Trang chủ</div>
                    </div>
                </Link>
                <div className='item-menu'>
                    <div className='icon'>
                        <ImHome />
                    </div>
                    <div className='title'>Trang chủ</div>
                </div>

                <div className='item-menu'>
                    <div className='icon'>
                        <AiOutlineUserAdd />
                    </div>
                    <div className='title' onClick={() => actionsAuth.checkLoginLink("/")}>{accessToken ? "xin chào" : "Tài khoản"}</div>
                </div>
            </div>

            <div css={cssCartMain} className='cart-main relative'>
                <Link to={isLogin ? '/cart' : '#'} onClick={isLogin ? undefined : handleRedirectCart}>
                    <FaCartPlus />
                </Link>
                {carts?.length > 0 && <span className='absolute show-count'>{carts?.length}</span>}
            </div>
            <RequireAuth />
        </div >
    )
}

export default HeaderComponent

const cssWrapperMenu = css`
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
    }
    &:hover {
        background-color: var(--color-blue-hover);
      }
      &.active {
        color: var(--color-blue-primary);
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
color: var(--color-blue-primary);
cursor: pointer;
&:hover {
  background-color: var(--color-blue-hover);
}
@media (min-width: 0) and (max-width: 739px) {
    padding: 0;
    margin-left: 10px;
  }
`