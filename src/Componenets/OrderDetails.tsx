import React from 'react';

type OrderProps = {
  trackingId: string;
  orderId: string;
  deliveryDate: string;
  orderStatus: string;
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
  orderStatus,
  products,
  total,
  shippingMethod,
  productLocation,
}) => {
  return (
    <div>
      <h2>Order Details</h2>
      <p>Tracking ID: {trackingId}</p>
      <p>Order ID: {orderId}</p>
      <p>Delivery Date: {deliveryDate}</p>
      <p>Order Status: {orderStatus}</p>
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>Item: {product.item}</p>
            <p>Quantity: {product.qty}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p>Shipping Method: {shippingMethod}</p>
      <p>Product Location: {productLocation}</p>
    </div>
  );
};

export default OrderDetails;
