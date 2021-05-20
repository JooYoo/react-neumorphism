import React from 'react';
import style from './TextBlock.module.scss';

const TextBlock = (props) => {
  const {
    small,
    middle,
    large,
    title,
    titleIcon,
    right,
    center,
    oneline,
    children,
  } = props;

  // size
  const isSmall = small ? 'size--s' : '';
  const isMiddle = middle ? 'size--m' : '';
  const isLarge = large ? 'size--l' : '';

  // align
  const isTxtRight = right ? 'var__txt-align--right' : '';
  const isTxtCenter = center ? 'var__txt-align--center' : '';

  // var
  const isOneline = oneline ? 'var__txt-oneline' : '';

  return (
    <div
      className={`${style.host}
                  ${style[isSmall]}
                  ${style[isMiddle]}
                  ${style[isLarge]}
                  ${style[isTxtRight]}
                  ${style[isTxtCenter]}
                  ${style[isOneline]}`}
    >
      <div>
        {titleIcon ? <span className={`${style.icon}`}>{titleIcon}</span> : ''}
        {title ? <h3 className={`${style.title}`}>{title}</h3> : ''}
      </div>
      <p className={`${style.txt}`}>{children}</p>
    </div>
  );
};

export default TextBlock;

// [x] size: small, middle, large
// [x] title as prop
// [x] toLeft toRight toCenter
// [x] isOneLine
// oneline fading at end
// icon as prop; refact icon inject by <Button>, <ButtonIsolation>
