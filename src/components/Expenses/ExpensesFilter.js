import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const years = Array.from({ length: 12 }, (_, index) => 2030 - index);
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;