import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

const SignUp: React.FC = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[
                { required: true, message: 'Please input your Name!' },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="PhoneNumber"
            name="phoneNumber"
            rules={[
                { required: true, message: 'Please input your phoneNumber!' },
                { min: 6, max: 12, message: 'Invalid phoneNumber format!' }
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Please input your email!' },
                { type: "email", message: "Invalid email format" }
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: "Password must be at least 6 characters" }
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
                { required: true, message: "Confirm password is required" },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject(
                                new Error("Confirm password does not match")
                            );
                        }
                    },
                }),
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit">
                Đăng Ký
            </Button>
        </Form.Item>
    </Form>
);

export default SignUp;