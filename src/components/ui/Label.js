// src/components/ui/Label.js
import React from 'react';

const Label = ({ htmlFor, className, ...props }) => {
  return <label htmlFor={htmlFor} className={`label ${className}`} {...props} />;
};

export default Label;