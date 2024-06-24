// src/components/ui/Avatar.js
import React from 'react';

const Avatar = ({ src, fallback, className, ...props }) => {
  return (
    <div className={`avatar ${className}`} {...props}>
      {src ? (
        <img src={src} alt="Avatar" />
      ) : (
        <div className="avatar-fallback">{fallback}</div>
      )}
    </div>
  );
};

export default Avatar;