import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import InputComponent from '~/app/component/parts/input/input.component';
import ButtonSqua from '~/app/component/parts/button/ButtonSqua';
import { STEP_AUTH } from '~/app/contants/contants.client';

interface SignInAndRegisterProps {
    props?: any
    setStepAuth?: any
}

const SignInAndRegister: FunctionComponent<SignInAndRegisterProps> = ({ setStepAuth }) => {
    return (

        <div css={form} className='box-border'>
            <div className='heading'>
                <h4>Xin chào,</h4>
                <p>Đăng nhập hoặc tạo tài khoản</p>
            </div>
            <form>
                <div className='input'>
                    <InputComponent hideIcon={false} hasErorr={false} placeholder='Số điện thoại' />
                </div>
                <ButtonSqua>Tiếp tục</ButtonSqua>
            </form>
            <p className='loginWithEmail' onClick={() => setStepAuth(STEP_AUTH.LOGIN_EMAIL)}>Đăng nhập bằng Email</p>
            <div className='heading2'>
                <p className='social'>
                    <span>Hoặc tiếp tục bằng</span>
                </p>
                <ul className='items'>
                    <li className='item'>
                        <img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" />
                    </li>
                    <li className='item'>
                        <img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" />
                    </li>
                </ul>
                <p className='note'>
                    Bằng việc tiếp tục, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính sách bảo mật thông tin cá nhân của Kiki
                </p>
            </div>
        </div>

    )
}
export default SignInAndRegister;

const form = css`
    .heading{
        margin-bottom: 20px;
    }
    .heading h4{
        margin: 0px 0px 10px;
        font-size: var(--fs-3);
        font-weight: 500;
    }
    .heading p{
        margin: 0px;
        font-size: var(--fs-7);
    }
    
    form button{
        margin: 30px 0px 10px;
        outline: none;
        border-radius: 4px;
        background: rgb(255, 66, 78);
        padding: 13px 0px;
        width: 100%;
        color: rgb(255, 255, 255);
        border: none;
        font-size: var(--fs-7);
        cursor: pointer;
    }

    .loginWithEmail{
        margin: 10px 0px 0px;
        text-align: center;
        color: rgb(13, 92, 182);
        cursor: pointer;
        font-size: var(--fs-7);
    }

    .heading2{
        text-align: center;
        margin: 80px 0px 0px;
    }
    .heading2 .social{
        margin: 0px 0px 15px;
        position: relative;
    }
    .heading2 .social::before{
        content: "";
        width: 100%;
        height: 1px;
        background: rgb(242, 242, 242);
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }
    .heading2 .social span{
        font-size: var(--fs-7);
        color: rgb(120, 120, 120);
        display: inline-block;
        background: rgb(255, 255, 255);
        padding: 0px 20px;
        position: relative;
        z-index: 2;
    }

    .items{
        display: flex;
        flex-direction: row;
        padding: 0px;
        margin: 0px 0px 10px;
        list-style: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .items .item{
        margin: 0px 10px;
    }
    .items .item img{
        width:58px
    }

    .note{
        font-size: var(--fs-8);
        color: rgb(120, 120, 120);
        line-height: 16px;
        text-align: start;
    }
    .note a{
        display: inline-block;
        text-decoration: underline;
        margin-left: 0px;
        font-size: var(--fs-8);
        color: rgb(120, 120, 120);
    }
`
