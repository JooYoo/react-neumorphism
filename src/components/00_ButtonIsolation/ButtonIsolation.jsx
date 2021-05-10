import React from 'react';
import style from './ButtonIsolation.module.scss';

const ButtonIsolation = (props) => {
  const {
    small,
    middle,
    large,
    text,
    round,
    rhombus,
    thickBorder,
    convex,
    children,
  } = props;

  // attribute
  const isRound = round ? 'var__shape--round' : '';
  const isRhombus = rhombus ? 'var__shape--rhombus' : '';
  const isThickBorder = thickBorder ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';

  // btn size
  const isSmall = small ? 'size--s' : '';
  const isMiddle = middle ? 'size--m' : '';
  const isLarge = large ? 'size--l' : '';

  return (
    <button
      className={`${style['host']} 
                  ${style[isSmall]} 
                  ${style[isMiddle]} 
                  ${style[isLarge]} 
                  ${style[isRound]} 
                  ${style[isRhombus]} 
                  ${style[isConvex]} 
                  ${style[isThickBorder]}`}
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
// [x] props: button size: small regular large
// [x] props: txt size: small regular large
// [x] props: icon size: small regular large
// [ ] save scss-var extra
