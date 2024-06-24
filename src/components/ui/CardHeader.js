// src/components/ui/CardHeader.js
import React from 'react';

const CardHeader = ({ className, ...props }) => {
  return <div className={`card-header ${className}`} {...props} />;
};

export default CardHeader;