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
    thick,
    convex,
    children,
    onClick,
  } = props;

  // attribute
  const isRound = round ? 'var__shape--round' : '';
  const isRhombus = rhombus ? 'var__shape--rhombus' : '';
  const isThick = thick ? 'var__border--thick' : '';
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
                  ${style[isThick]}`}
      onClick={onClick}
    >
      <span className={style.txt}>{text}</span>
      <span className={style.icon}>{children}</span>
    </button>
  );
};

export default ButtonIsolation;
