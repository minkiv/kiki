import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import SignIn from './form/signIn.component';
import SignUp from './form/signUp.component';




const Register: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowSignUp, setIsShowSignUp] = useState(false)
    const [isShowSignIn, setIsShowSignIn] = useState(true)

    const handleCreate = () => {
        setIsShowSignUp(!isShowSignUp)
        setIsShowSignIn(!isShowSignIn)
    }


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <button onClick={showModal}>
                Tài khoản
            </button>
            <Modal title="Register" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okType='default'>
                {isShowSignIn && <SignIn />}

                {isShowSignIn && <Button type="link" onClick={() => handleCreate()} >
                    Tạo tài khoản
                </Button>}

                {isShowSignUp && <Button type="link" onClick={() => handleCreate()} >
                    Đăng nhập
                </Button>}

                {isShowSignUp && <SignUp />}
            </Modal>
        </div>
    );
};

export default Register;
