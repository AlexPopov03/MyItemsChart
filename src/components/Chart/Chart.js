import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const pointValues = dataPoints.map(({ value }) => value);
  const totalMaximum = dataPoints.length ? Math.max(...pointValues) : 0;

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={totalMaximum}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;