import React from 'react';
import './IndiaIcon.css';

const IndiaIcon = ({ className = '', style = {} }) => {
  return (
    <svg 
      className={`icon ${className}`}
      style={{ width: '100%', height: '100%', ...style }}
    >
      <use href="#svg11769809226" />
    </svg>
  );
};

export default IndiaIcon; 