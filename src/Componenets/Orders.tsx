import React from 'react';



interface OrderListProps {
    orders: {
        status: string;
        createdAt: string;
        orderId: string;
      
    }[];
  }


const OrderList: React.FC<OrderListProps> = ({orders}) => {

  return (
    <div >
      <h2>Order List</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-item">
          <div>Status: {order.status}</div>
          <div>Created At: {order.createdAt}</div>
          <div>Order ID: {order.orderId}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
