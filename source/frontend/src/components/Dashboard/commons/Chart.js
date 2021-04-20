import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  PieChart,
  Pie,
  Sector,
  Cell,
  Bar,
  LabelList,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Title from './Title';

/* ============================ SALE CHART====================================== */

function createData(time, amount) {
  return { time, amount };
}

const SaleData = [
  createData('January', 0),
  createData('February', 300),
  createData('March', 600),
  createData('April', 800),
  createData('May', 1500),
  createData('June', 2000),
  createData('July', 2400),
  createData('August', 2400),
  createData('September', 2400),
  createData('October', 2400),
  createData('November', 2000),
  createData('December', 2400),
];
export const SaleLineChart = () => {
  const theme = useTheme();
  return (
    <>
      <Title>Year - 2021</Title>
      <ResponsiveContainer>
        <LineChart
          data={SaleData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

/* ============================ BOOK CATEGORY CHART ====================================== */
const categoryData = [
  { id: 1, name: 'History', value: 20 },
  { id: 2, name: 'Fiction', value: 30 },
  { id: 3, name: 'Religion', value: 10 },
  { id: 4, name: 'Business', value: 20 },
  { id: 5, name: 'Science', value: 5 },
];

const COLORS = [
  '#5b6d5b',
  '#ca8a8b',
  '#eca3f5',
  '#fb3640',
  '#542e71',
  '#ff8303',
  '#4b778d',
  '#1597bb',
  '#1e6f5c',
  '#2b2e4a',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CategoryChart = () => {
  return (
    <>
      <Title>Book category</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="middle" align="right" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
