import React from 'react';
import {  Wrapper } from './style';

const Button = ({ label, type, onClick }) => {
  return (
    <Wrapper onClick={() => onClick(type)}>{label}</Wrapper>
  );
};

export default Button;
export { Wrapper };