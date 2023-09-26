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
        <div css={cssForgotPass}>
            <div className='text-center my-[24px]'>
                <h4 className='big-title'>Bạn muốn tìm lại mật khẩu?</h4>
                <p className='small-title'>Vui lòng nhập lại email đã đăng ký, hệ thống của chúng tôi sẽ gửi cho bạn 1 đường dẫn để thay đổi mật khẩu.</p>
            </div>

            <form className='w-[390px] mx-auto space-y-[24px]'>
                <div >
                    <InputComponent hideIcon={false} placeholder='Email/SĐT...' />
                </div>
                <ButtonSqua css={cssBtn} outline>Gửi đi</ButtonSqua>
            </form>

        </div>
    )
}
export default ForgotPassword;
const cssForgotPass = css`
width:90%;
margin: 0 auto;
.big-title{
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #221f20;
    font-family: 'Montserrat', sans-serif;
    margin-bottom:10px;
    letter-spacing: 0.5px;
}
.small-title{
    font-size: 14px;
    line-height: 24px;
    color: #6c6d70;
}
`

const cssBtn = css`
  text-transform: uppercase;
  width:100%;
  padding: 12px 24px;
  border-radius: 16px 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`