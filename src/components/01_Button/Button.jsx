import React from 'react';
import style from './Button.module.scss';

const Button = (props) => {
  const {
    small,
    middle,
    large,
    text,
    round,
    thick,
    convex,
    start,
    end,
    children,
    onClick,
  } = props;

  // var
  const isRound = round ? 'var__shape--round' : '';
  const isThick = thick ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';
  const isStart = start ? 'var__icon-position--start' : '';
  const isEnd = end ? 'var__icon-position--end' : '';
  const isIcon = children ? '' : 'icon--disable';

  // size
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
                  ${style[isThick]}
                  ${style[isConvex]}
                  ${style[isStart]}
                  ${style[isEnd]} `}
      onClick={onClick}
    >
      <span className={`${style.icon} ${style[isIcon]}`}>{children}</span>
      <span className={style.txt}>{text}</span>
    </button>
  );
};

export default Button;
