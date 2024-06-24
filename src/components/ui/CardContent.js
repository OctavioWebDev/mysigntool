// src/components/ui/CardContent.js
import React from 'react';

const CardContent = ({ className, ...props }) => {
  return <div className={`card-content ${className}`} {...props} />;
};

export default CardContent;