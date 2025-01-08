'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useLogin } from '@apis/auth/hooks';
import { apiMessages } from '@lib/constant';
import { storage } from '@lib/utils';
import { Button, Checkbox, Form, Input, message } from 'antd';

export default function LoginPage() {
  const [messageApi, msgCtx] = message.useMessage();

  const loginFn = useLogin({
    config: {
      onSuccess(data) {
        console.log(data);
        if (data?.status !== 'success') {
          messageApi.error('Login Failed');
          return;
        }
        storage.setData('access-token', data?.data?.token);
        messageApi.success(apiMessages.login);
      },
    },
  });
  const onFinish = (values: any) => {
    const payload = {
      ...values,
      timeZone: 'Asia/Dhaka',
      rememberMe: values?.rememberMe || false,
    };
    console.log('Received values of form: ', payload);
    loginFn.mutate(payload);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      {msgCtx}
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        </div>
        <Form name="normal_login" className="mt-8 space-y-6" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="rememberMe" valuePropName="checked" noStyle>
              <Checkbox className="text-sm text-gray-900">Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
