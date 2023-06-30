import React from 'react';
import { Progress, Space } from 'antd';
import {StarFilled} from '@ant-design/icons'
import "./Style/BuyerRating.css"

type UserRatingProps = {
  rating: string;
  criteria: {
    name: string;
    current: number;
    required: number;
  }[];
};

const BuyerRating: React.FC<UserRatingProps> = ({ rating, criteria }) => {
  const getColor = (star: string) => {
    switch (star) {
      case 'Novice':
        return '#ffff';
      case 'Beginner':
        return '#ffcc00';
      case 'Intermidiate':
        return '#3399ff';
      case 'Expert':
        return '#663300';
      case 'Professional':
        return '#ff3333';
      case 'Legend':
        return '#000000';
      default:
        return '#fff';
    }
  };

  const starColor = getColor(rating);

  const getProgressStatus = (current: number, required: number) => {
    if (current >= required) {
      return 'success';
    }
    return 'active';
  };

  return (
    <div className='buyer-rating'>
      <h3>Buyer Rating: {rating}  <StarFilled style={{color: starColor}}/></h3>
      <h2>Criteria for next rating:</h2>
      <Space direction="vertical" size={8}>
        {criteria.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <Progress
              percent={(item.current / item.required) * 100}
              status={getProgressStatus(item.current, item.required)}
              format={() => `${item.current}/${item.required}`}
              strokeColor={starColor}
              style={{ width: '90%' }}
            />
          </div>
        ))}
      </Space>

      <div className='ratings'>
       <h3>Ratings:</h3>
       <h1>  
        <Space size={8}>
        <StarFilled style={{color: "#fff"}}/>
        <StarFilled style={{color: "#ffcc00"}}/>
        <StarFilled style={{color: "#3399ff"}}/>
        <StarFilled style={{color: "#663300"}}/>
        <StarFilled style={{color: "#ff3333"}}/>
        <StarFilled style={{color: "#000000"}}/>
        </Space>
        </h1>
      </div>
    </div>
  );
};

export default BuyerRating;
