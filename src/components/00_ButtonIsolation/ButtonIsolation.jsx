import React from 'react';
import style from './ButtonIsolation.module.scss';

const ButtonIsolation = (props) => {
  const { text, round, rhombus, thickBorder, convex, children } = props;

  // attribute
  const isRound = round ? 'var__shape--round' : '';
  const isRhombus = rhombus ? 'var__shape--rhombus' : '';
  const isThickBorder = thickBorder ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';

  return (
    <button
      className={`${style['host']} ${style[isRound]} ${style[isRhombus]} ${style[isConvex]} ${style[isThickBorder]}`}
    >
      <span className={style.txt}>{text}</span>
      <span className={style.icon}>{children}</span>
    </button>
  );
};

export default ButtonIsolation;

// TODO:
// [x] add neu-effect
// [x] use rem as global size
// [x] attr: round normal
// [x] attr: border
// [x] props: icon
// [x] props: icon size/color
// [ ] props: button size: small regular large
// [ ] props: txt size
// [ ] props: txt font-size
// [ ] save scss-var extra
