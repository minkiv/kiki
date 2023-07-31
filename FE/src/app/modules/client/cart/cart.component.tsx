import { FunctionComponent } from "react"
import { css } from '@emotion/react'
import LeftCart from './components/leftCart/leftCart.component';
import RightCart from "./components/rightCart/rightinner.component";

interface CartProps {
    props?: any
}

const Cart: FunctionComponent<CartProps> = () =>{
    return(
        <div css ={cssCart}> 
 
          
          <div className="flex">
             <div className="left-cart">
                <div className="title">
                    <h1 className="mb-5">Giỏ Hàng</h1>
                </div>
            <LeftCart/>
            </div>
            <div className="right-cart"><RightCart/></div>
          </div>
           
        </div>
    )

}
export default Cart

// css
const cssCart = css`

width: 1240px;
margin: auto;
margin-top: 20px;
.title{
    font-size: 20px;
    font-weight: 500;
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
`