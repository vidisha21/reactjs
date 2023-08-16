import React from 'react';
import {  Wrapper } from './style';

const Button = ({ label, type, onClick }) => {
  return (
    <div onClick={() => onClick(type)}>{label}</div>
  );
};

export default Button;
export { Wrapper };