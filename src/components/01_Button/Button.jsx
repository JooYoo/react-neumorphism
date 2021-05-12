import React from 'react';
import style from './Button.module.scss';

const Button = () => {
  return (
    <button className={`${style['host']}`}>
      <span className={style.txt}>loremloremloremloremlorem</span>
    </button>
  );
};

export default Button;
