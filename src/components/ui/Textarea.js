// src/components/ui/Textarea.js
import React from 'react';

const Textarea = ({ id, className, ...props }) => {
  return <textarea id={id} className={`textarea ${className}`} {...props} />;
};

export default Textarea;