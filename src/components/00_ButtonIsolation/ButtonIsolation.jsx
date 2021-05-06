import React from 'react';
import style from './ButtonIsolation.module.scss';

const ButtonIsolation = ({ sign = 'G' }) => {
  return (
    <button className={style.host}>
      <span className={style.txt}>{sign}</span>
    </button>
  );
};

export default ButtonIsolation;

// TODO:
// [x] add neu-effect
// [x] use rem as global size
// [ ] attr: round normal
// [ ] attr: border
// [ ] props: txt font-size
// [ ] props: icon
