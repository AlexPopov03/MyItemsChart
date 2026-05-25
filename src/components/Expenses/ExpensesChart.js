import React from 'react';

import Chart from '../Chart/Chart';

const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = monthLabels.map((label) => ({ label, value: 0 }));

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;