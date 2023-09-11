import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import InputComponent from '~/app/component/parts/input/input.component';
import ButtonSqua from '~/app/component/parts/button/ButtonSqua';
import { STEP_AUTH } from '~/app/contants/contants.client';

interface SignInWithEmailProps {
    props?: any
    setStepAuth?: any
}
const SignInWithEmail: FunctionComponent<SignInWithEmailProps> = ({ setStepAuth }) => {
    return (
        <div css={form} className='box-border'>
            <div className='heading'>
                <h4>Đăng nhập bằng email,</h4>
                <p>Nhập email và mật khẩu tài khoản Kiki</p>
            </div>

            <form>
                <div className='mb-3'>
                    <InputComponent hideIcon={false} placeholder='abc@gmail.com' />
                </div>
                <div>
                    <InputComponent hideIcon={false} placeholder='Mật khẩu' />
                </div>
                <ButtonSqua>Đăng Nhập</ButtonSqua>
            </form>
            <a className='forgot-pass' onClick={() => setStepAuth(STEP_AUTH.FORGOT_PASSWORD)} >Quên mật khẩu?</a>
            <p className='create'>Chưa có tài khoản?
                <span onClick={() => setStepAuth(STEP_AUTH.LOGIN_PHONE_NUMBER)}>Tạo tài khoản</span>
            </p>
        </div>
    )
}

export default SignInWithEmail;

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

    .forgot-pass{
        color: rgb(13, 92, 182);
        font-size:var(--fs-8);
        margin: 20px 0px 0px;
        cursor: pointer;
        display: inline-block;
    }

    .create{
        color: rgb(120, 120, 120);
        font-size: var(--fs-8);
        margin: 10px 0px 0px
    }
    .create span{
        color: rgb(13, 92, 182);
        display: inline-block;
        margin-left: 5px;
        cursor: pointer;
    }

`
