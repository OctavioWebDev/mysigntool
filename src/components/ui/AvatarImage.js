// src/components/ui/AvatarImage.js
import React from 'react';

const AvatarImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default AvatarImage;