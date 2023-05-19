import React from 'react';
import { Button, Carousel } from 'antd';
import './Slider.css';
import Buttons from './Button';

const contentStyle: React.CSSProperties = {
  height: '500px',
  margin: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center', 
  display: 'flex'
};



const Slider: React.FC = () => (
  <Carousel autoplay>
    <div className='sliderComp'>
      <div style={contentStyle}>
        <div className='left-side'>
          <img className='product-image' src="" alt={"alt"} />
        </div>
        <div className='right-side'>
          <div className='product-desc'>
            <p>
              lorem ipsum, this description to this product
            </p>
          </div> 
          <div>
            <Buttons>
              Buy Now
            </Buttons>
          </div>
        </div>
      </div>
    </div>
    <div className='sliderComp'>
      <div style={contentStyle}>2</div>
    </div>
    <div className='sliderComp'>
      <div style={contentStyle}>3</div>
    </div>
    <div className='sliderComp'>
      <div style={contentStyle}>4</div>
    </div>
  </Carousel>
);

export default Slider;