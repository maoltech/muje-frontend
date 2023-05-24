import React from 'react';
import { Carousel } from 'antd';
import './Slider.css';
import ProductBanner from './Banner';


const Slider: React.FC = () => (
  <Carousel autoplay>
    <ProductBanner />
    <ProductBanner />
    <ProductBanner />
  </Carousel>
);

export default Slider;