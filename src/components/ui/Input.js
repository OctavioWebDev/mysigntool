// src/components/ui/Input.js
import React from 'react';

const Input = ({ type, id, className, ...props }) => {
  return <input type={type} id={id} className={`input ${className}`} {...props} />;
};

export default Input;