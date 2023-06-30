import React from 'react';
import { Input, Image } from 'antd';
import { Link } from 'react-router-dom';


import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MailOutlined
} from '@ant-design/icons';
import './Style/Header.css';

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
          <Link to="/buyerdashboard" className='icon'>
            <UserOutlined />
          </Link>
        </div>
      </div>
      <div className='header_center'>
        <div className="logo">
          <Image src="https://res.cloudinary.com/dsbkmkh2v/image/upload/v1684494322/mujeheader_kg28z7.png" alt='Home' width={100} height={33} />
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
          <div className="cart-icon">
            <ShoppingCartOutlined />
            <span className="badge-notification">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
