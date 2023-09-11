import { useState, FC } from 'react';
import { Modal } from 'antd';
import { css } from '@emotion/react';
import SignInWithEmail from './form/signInWithEmail.component';
import SignInAndRegister from './form/signInAndRegister.component';
import { MdArrowBackIos } from 'react-icons/md';
import { STEP_AUTH } from '~/app/contants/contants.client';
import ForgotPassword from './form/forgotPassword.component';
import { useAuthRedux } from '../redux/hook/useAuthReducer';
interface PropsTypes {
    props?: any
    children?: any
}
const RequireAuth: FC<PropsTypes> = ({ children }) => {

    const [stepAuth, setStepAuth] = useState(STEP_AUTH.LOGIN_PHONE_NUMBER)

    const {
        data: { isOpen },
        actions: actionsAuth
    } = useAuthRedux()

    return (
        <div className='account'>
            <Modal okType='default' width={800} open={isOpen} footer={null} onCancel={() => actionsAuth.closeModal()}>
                {stepAuth === STEP_AUTH.LOGIN_EMAIL && (
                    <div onClick={() => setStepAuth(STEP_AUTH.LOGIN_PHONE_NUMBER)}><MdArrowBackIos className='text-5xl' /></div>
                )}
                {stepAuth === STEP_AUTH.FORGOT_PASSWORD && (
                    <div onClick={() => setStepAuth(STEP_AUTH.LOGIN_PHONE_NUMBER)}><MdArrowBackIos className='text-5xl' /></div>
                )}
                <div css={register} className='register'>
                    <div className='form'>
                        {stepAuth === STEP_AUTH.LOGIN_PHONE_NUMBER && <SignInAndRegister setStepAuth={setStepAuth} />}
                        {stepAuth === STEP_AUTH.LOGIN_EMAIL && <SignInWithEmail setStepAuth={setStepAuth} />}
                        {stepAuth === STEP_AUTH.FORGOT_PASSWORD && <ForgotPassword setStepAuth={setStepAuth} />}


                    </div>

                    <div className='image'>
                        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" className='w-[103px]' alt="" />
                        <div className='content'>
                            <h4>Mua sắm tại KIKI</h4>
                            <span>Siêu ưu đãi mỗi ngày</span>
                        </div>
                    </div>
                </div>
            </Modal>
            {children}
        </div >
    );
};

export default RequireAuth;
const register = css`    
    background: rgb(248, 248, 248);
    display: flex;
    width: 100%;
    position: relative;
    
    .form{
        width: 500px;
        padding: 40px 45px 24px;
        background: rgb(255, 255, 255);
        border-radius: 20px 0px 0px 20px;
    }
    .image {
        background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
        width: 300px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        border-radius: 0px 20px 20px 0px;  
    }
    .content{
        margin: 30px 0px 0px;
        text-align: center;
    }
    .content h4{
        margin: 0px 0px 5px;
        color: rgb(11, 116, 229);
        font-size: var(--fs-4);
        font-weight: 500;
    }
    .content span{
        font-size: var(--fs-8);
        color: rgb(11, 116, 229);
        font-weight: 500;
    }
`

