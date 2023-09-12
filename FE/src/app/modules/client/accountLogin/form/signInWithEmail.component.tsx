import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import InputComponent from '~/app/component/parts/input/input.component';
import ButtonSqua from '~/app/component/parts/button/ButtonSqua';
import { STEP_AUTH } from '~/app/contants/contants.client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { validateLogin } from '../../utils/validateForm';
import { loginSystem } from '~/app/api/auth/auth.api';
import { useAuthRedux } from '../../redux/hook/useAuthReducer';
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { type } from 'os';

interface SignInWithEmailProps {
    props?: any
    setStepAuth?: any
}
const SignInWithEmail: FunctionComponent<SignInWithEmailProps> = ({ setStepAuth }) => {
    const [messageApi, contextHolder] = message.useMessage();
    let navigate = useNavigate()
    let location = useLocation()
    const {
        data: { redirectLink },
        actions: actionsAuth
    } = useAuthRedux()
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validateLogin)
    });
    const onSubmit = (data: any) => {
        loginSystem(data).then((res) => {
            if (res) {
                localStorage.setItem('accessToken', res.data.accessToken)
                actionsAuth.checkLoginLink(location.pathname)
                actionsAuth.setToken(res.data.accessToken)
                navigate(redirectLink)
                message.success("đăng nhập thành công")
            }
        },

            (err) => {
                message.error(err.response.data)
            })
    }
    return (
        <div css={form} className='box-border'>
            {contextHolder}
            <div className='heading'>
                <h4>Đăng nhập bằng email,</h4>
                <p>Nhập email và mật khẩu tài khoản Kiki</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { onChange, value, ref },
                            fieldState: { error }
                        }) => {
                            return (
                                <div className='w-full h-[34px] mt-5' >
                                    <InputComponent
                                        type="email"
                                        hideIcon={false}
                                        placeholder="abc@gmail.com"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        hasErorr={error}
                                    />
                                    {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                                </div>
                            )
                        }}
                    />
                </div>
                <div>
                    <Controller
                        control={control}
                        name="password"
                        render={({
                            field: { onChange, value, ref },
                            fieldState: { error }
                        }) => {
                            return (
                                <div className='w-full h-[34px] mt-16' >
                                    <InputComponent
                                        type="password"
                                        hideIcon={false}
                                        placeholder="mật khẩu"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        hasErorr={error}
                                    />
                                    {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                                </div>
                            )
                        }}
                    />
                </div>
                <ButtonSqua>Đăng nhập</ButtonSqua>
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
