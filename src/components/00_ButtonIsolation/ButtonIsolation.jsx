import React from 'react';
import style from './ButtonIsolation.module.scss';

const ButtonIsolation = (props) => {
  const { sign = 'G', round, rhombus, thickBorder, convex } = props;

  // attribute
  const isRound = round ? 'var__shape--round' : '';
  const isRhombus = rhombus ? 'var__shape--rhombus' : '';
  const isThickBorder = thickBorder ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';

  return (
    <button
      className={`${style['host']} ${style[isRound]} ${style[isRhombus]} ${style[isConvex]} ${style[isThickBorder]}`}
    >
      <span className={style.txt}>{sign}</span>
    </button>
  );
};

export default ButtonIsolation;

// TODO:
// [x] add neu-effect
// [x] use rem as global size
// [x] attr: round normal
// [x] attr: border
// [ ] props: txt font-size
// [ ] save scss-var extra
// [ ] props: icon
