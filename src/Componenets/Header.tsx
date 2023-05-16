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
          <Input placeholder="Search" prefix={<SearchOutlined />} />
        </div>

        <div className="cart-icon">
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
