import React from 'react';
import { Input } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import './Header.css';

const Header: React.FC = () => {

  const searchBarStyle ={
      margin: '5px',
      border: 'none',
      borderRadius: '20px',
      color: '#02a582',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
  };


  return (
    <div className="header">
      <div className="header_left">
        <div className="user-icon">
          <UserOutlined />
        </div>
      </div>
      <div className='header_center'>
        <div className="logo">
          <HomeOutlined />
        </div>
      </div>

      <div className='header_right'>
        <div className="search-bar">
          <Input style ={searchBarStyle} placeholder="Search" prefix={<SearchOutlined />} />
        </div>

        <div className="cart-icon">
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
