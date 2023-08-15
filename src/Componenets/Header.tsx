import React, {useState} from 'react';
import { Input, Modal } from 'antd';
import { Link } from 'react-router-dom';


import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MailOutlined
} from '@ant-design/icons';
import './Style/Header.css';
import Cart from './Cart';

const Header: React.FC = () => {

  const searchBarStyle ={
      margin: '5px',
      border: 'none',
      borderRadius: '20px',
      color: '#02a582',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
  };

  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const showCartModal = () => {
    setIsCartModalVisible(true);
  };

  const hideCartModal = () => {
    setIsCartModalVisible(false);
  };

  return (
    <div className="header">
      <div className="header_left">
        <div className="user-icon">
          <Link to="/buyerdashboard" className='icon'>
            <UserOutlined />
          </Link>
        </div>
      </div>
      <div className='header_center'>
        <div className="logo">
          MUJE
        </div>
      </div>

      <div className='header_right'>
        <div className="badge">
          <div className="cart-icon">
            <MailOutlined />
            <span className="badge-notification">1</span>
          </div>
        </div>
        <div className="search-bar">
          <Input style ={searchBarStyle} placeholder="Search" prefix={<SearchOutlined />} />
        </div>
        <div className="badge">
          <div className="cart-icon" onClick={showCartModal}>
            <ShoppingCartOutlined/>
            <span className="badge-notification">1</span>
          </div>
        </div>
      </div>

      <Modal
        title="Cart"
        visible={isCartModalVisible}
        onCancel={hideCartModal}
        footer={null}
      >
        <Cart />
      </Modal>
    </div>
  );
};

export default Header;
