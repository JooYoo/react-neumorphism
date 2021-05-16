import React from 'react';
import style from './Bg.module.scss';

function Bg(props) {
  const { center, children } = props;

  const isCenter = center ? 'center--flex' : '';

  return <div className={`${style.host}, ${style[isCenter]}`}>{children}</div>;
}

export default Bg;
