import React from 'react';
import { Carousel } from 'antd';
import './Style/Slider.css';
import ProductBanner from './Banner';


const product_image = '../Statics/Images/blender.jpg'
const product_description = 'lorem ipsum, this description to this product'
const product_price = 2000
const product_title = "Product Title"

const Slider: React.FC = () => (
  <Carousel autoplay  className='slider'>
    <ProductBanner product_image = {product_image} product_description= {product_description} product_price = {product_price} product_title = {product_title}/>
    <ProductBanner product_image = {product_image} product_description= {product_description} product_price = {product_price} product_title = {product_title}/>
    <ProductBanner product_image = {product_image} product_description= {product_description} product_price = {product_price} product_title = {product_title}/>
  </Carousel>
);

export default Slider;