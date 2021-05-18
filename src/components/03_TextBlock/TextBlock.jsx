import React from 'react';
import style from './TextBlock.module.scss';

const TextBlock = (props) => {
  const { small, middle, large, title, children } = props;

  // size
  const isSmall = small ? 'size--s' : '';
  const isMiddle = middle ? 'size--m' : '';
  const isLarge = large ? 'size--l' : '';

  return (
    <div
      className={`${style.host}
                     ${style[isSmall]}
                     ${style[isMiddle]}
                     ${style[isLarge]}`}
    >
      {title ? <h3 className={`${style.title}`}>{title}</h3> : ''}
      <p className={`${style.txt}`}>{children}</p>
    </div>
  );
};

export default TextBlock;

// [x] size: small, middle, large
// icon as prop
// title as prop
// isOneLine
