import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import InputComponent from '~/app/component/parts/input/input.component';
import ButtonSqua from '~/app/component/parts/button/ButtonSqua';

interface ForgotPasswordProps {
    props?: any
    setStepAuth?: any
}

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
    return (
        <div css={form} className='box-border'>
            <div className='heading'>
                <h4>Quên mật khẩu?</h4>
                <p>Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu</p>
            </div>

            <form>
                <div className='input'>
                    <InputComponent hideIcon={false} placeholder='Số điện thoại/Email' />
                </div>
                <ButtonSqua>Lấy lại mật khẩu</ButtonSqua>
            </form>
            <span className='loginWithPhone'>Đổi số điện thoại ? Liên hệ Hotline 1900-6035</span>
        </div>
    )
}
export default ForgotPassword;

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

    .loginWithPhone{
        display: inline-block;
        margin-top: 10px;
        color: rgb(13, 92, 182);
        cursor: pointer;
        font-size: var(--fs-8);
    }
`
