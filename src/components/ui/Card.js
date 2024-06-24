// src/components/ui/Card.js
import React from 'react';

const Card = ({ className, ...props }) => {
  return <div className={`card ${className}`} {...props} />;
};

export default Card;