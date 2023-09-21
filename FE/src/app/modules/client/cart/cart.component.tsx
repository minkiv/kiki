import { FunctionComponent, useEffect } from "react"
import { css } from '@emotion/react'
import LeftCart from './components/leftCart/leftCart.component';
import RightCart from "./components/rightCart/rightinner.component";
import { useAuthRedux } from "../redux/hook/useAuthReducer";
import { Skeleton } from 'antd';
interface CartProps {
    props?: any
}

const Cart: FunctionComponent<CartProps> = () => {
    const {
        data: { isLogin },
        actions: actionsAuth
    } = useAuthRedux()
    useEffect(() => {
        if (!isLogin) {
            actionsAuth.checkLoginLink("/cart")
        }
    }, [])
    return (
        <div css={cssCart} className="box-cart">
            {
                isLogin ? (
                    <div className="flex">
                        <div className="left-cart">
                            <div className="title">
                                <h1 className="mb-5">Giỏ Hàng</h1>
                            </div>
                            <LeftCart />
                        </div>
                        <div className="right-cart"><RightCart /></div>
                    </div>
                ) : (
                    <Skeleton active />
                )
            }
        </div>
    )
}
export default Cart
const cssCart = css`
width: 1240px;
margin: auto;
margin-top: 20px;
.title{
    font-size: 24px;
    font-weight: 600;
    margin: 0px;
    color: rgb(0, 0, 0);
    line-height: 28px;
    text-transform: uppercase;
    flex-basis: calc(797px);
}
.left-cart{
    padding: 0px 15px;
    width: 80%;
}
.right-cart{
    padding: 0px 10px;
    width: 25%;
    margin-top: 40px
}
// Mobile: w< 740px
@media only screen and (max-width: 739px){
    width:100%;
    display: unset;
    width: auto;
.title{
    display: none;
}
.flex{
    display: block;
}
.left-cart {
    width: 100%;
}
.right-cart{
    width: 100%;
    display: inline-block;
}
}


`