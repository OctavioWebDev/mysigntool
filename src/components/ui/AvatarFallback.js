// src/components/ui/AvatarFallback.js
import React from 'react';

const AvatarFallback = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default AvatarFallback;