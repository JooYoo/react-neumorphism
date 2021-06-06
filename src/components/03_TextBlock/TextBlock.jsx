import React from 'react';
import PropTypes from "prop-types";
import style from './TextBlock.module.scss';

const TextBlock = (props) => {
  const {
    size,
    title,
    titleIcon,
    right,
    center,
    oneline,
    children,
  } = props;

  // size
  const isSmall = size === 'small' ? 'size--s' : '';
  const isMiddle =size === 'middle' ? 'size--m' : '';
  const isLarge = size ==='large' ? 'size--l' : '';

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
      <div className={style['container__title-icon']}>
        {titleIcon ? <span className={`${style.icon}`}>{titleIcon}</span> : ''}
        {title ? <h3 className={`${style.title}`}>{title}</h3> : ''}
      </div>
      <p className={`${style.txt}`}>{children}</p>
    </div>
  );
};

export default TextBlock;

/* ---------------------------------- Types --------------------------------- */

TextBlock.propTypes = {
  //TODO: add description
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  title: PropTypes.string,
  titleIcon: PropTypes.element,
  right: PropTypes.bool,
  center: PropTypes.bool,
  oneline: PropTypes.bool,
  children: PropTypes.string
}

TextBlock.propTypes = {
  size: 'small',
  title: undefined,
  titleIcon: undefined,
  right: false,
  center: false,
  oneline: false,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque sit voluptates modi ducimus? Reprehenderit a illo id impedit voluptate!'
}