import { Form, Input } from 'antd';
import Button from '../../Componenets/Button';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import './auth.css';


  const SignIn =() =>{

    const onFinish =()=>{
        console.log('Success:');
    }
    return (
      <div className="signup-page">
        <div className="signup-form">
          <h2>Sign In</h2>
          <Form
            name="signin"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }


export default SignIn;

