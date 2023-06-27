import React from 'react';
import { Progress, Space } from 'antd';

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
      case 'white':
        return '#ffffff';
      case 'yellow':
        return '#ffcc00';
      case 'blue':
        return '#3399ff';
      case 'red':
        return '#ff3333';
      case 'brown':
        return '#663300';
      case 'black':
        return '#000000';
      default:
        return '#000000';
    }
  };

  const getProgressStatus = (current: number, required: number) => {
    if (current >= required) {
      return 'success';
    }
    return 'active';
  };

  return (
    <div>
      <h2>User Rating: {rating}</h2>
      <Space direction="vertical">
        {criteria.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <Progress
              percent={(item.current / item.required) * 100}
              status={getProgressStatus(item.current, item.required)}
              format={() => `${item.current}/${item.required}`}
              strokeColor={getColor(rating)}
            />
          </div>
        ))}
      </Space>
    </div>
  );
};

export default BuyerRating;
