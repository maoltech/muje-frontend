import { Table } from 'antd';
import React, {useState} from 'react';
import { Modal, Button } from 'antd';

import "./Style/Orders.css";
import OrderDetails, { OrderProps} from './OrderDetails';


interface OrderListProps {
    orders: {
        status: string;
        createdAt: string;
        orderId: string;
      
    }[];
  }


  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
  ];


const OrderList: React.FC<OrderListProps> = ({orders}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null);

    const showModal = (order: any) => {
      setSelectedOrder(order);
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setSelectedOrder(null);
      setIsModalVisible(false);
    };
   

  return (
    <div className='orders'>
      <h2>Order List</h2>
      <Table
        dataSource={orders}
        columns={columns}
        pagination={{pageSize: 10}}
        bordered={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              showModal(record);
            },
          };
        }}
      />
      {selectedOrder && (
        <Modal
          title="Order Details"
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          footer={[
            <Button key="close" onClick={closeModal}>
              Close
            </Button>,
          ]}
        >
          <OrderDetails {...selectedOrder} />
        </Modal>
      )}
    </div>
  );
};

export default OrderList;
