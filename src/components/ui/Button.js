// src/components/ui/Button.js
import React from 'react';

const Button = ({ variant, size, className, ...props }) => {
  let classes = `btn`;

  if (variant) classes += ` btn-${variant}`;
  if (size) classes += ` btn-${size}`;
  if (className) classes += ` ${className}`;

  return (
    <button className={classes} {...props} />
  );
};

export default Button;