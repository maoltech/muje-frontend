import { Form, Input, Button} from 'antd';
// import Button from '../../Global/Button';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './auth.css';


  const SignUp =() =>{

    const onFinish =()=>{
        console.log('Success:');
    }
    return (
      <div className="signup-page">
        <div className="signup-form">
          <h2>Sign up</h2>
          <Form
            name="signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
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
              <Button  block>
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }


export default SignUp;
