import React from 'react';

import './Card.css';

const Card = ({ className = '', children }) => {
  const classes = `card ${className}`.trim();

  return <div className={classes}>{children}</div>;
};

export default Card;