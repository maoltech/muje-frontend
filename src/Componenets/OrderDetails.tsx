import { Table } from 'antd';
import React from 'react';

type OrderProps = {
  trackingId: string;
  orderId: string;
  deliveryDate: string;
  status: string;
  products: {
    item: string;
    qty: number;
    price: number;
  }[];
  total: number;
  shippingMethod: string;
  productLocation: string;
};

const OrderDetails: React.FC<OrderProps> = ({
  trackingId,
  orderId,
  deliveryDate,
  status,
  products,
  total,
  shippingMethod,
  productLocation,
}) => {


  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text: string, record: any) => {
        return (record.qty * record.price).toFixed(2);
      },
    },
  ];

  return (
    <div>
      <h2>Order Details</h2>
      <p>Tracking ID: {trackingId}</p>
      <p>Order ID: {orderId}</p>
      <p>Delivery Date: {deliveryDate}</p>
      <p>Order Status: {status}</p>
      <h3>Products</h3>
      <Table
        dataSource={products}
        columns={columns}
        pagination={false}
        rowKey={(record) => record.item}
      />
      <p>Total: {total}</p>
      <p>Shipping Method: {shippingMethod}</p>
      <p>Product Location: {productLocation}</p>
    </div>
  );
};

export type { OrderProps };
export default OrderDetails;