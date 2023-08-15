import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface CustomerSpendingData {
  month: string;
  amount: number;
}

interface CustomerSpendingChartProps {
  data: CustomerSpendingData[];
}

const CustomerSpendingChart: React.FC<CustomerSpendingChartProps> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" name="Customer Spending" stroke="#8884d8" />
    </LineChart>
  );
};

export default CustomerSpendingChart;
