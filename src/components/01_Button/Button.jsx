import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (props) => {
  const { size, icon, text, round, thick, convex, start, end, onClick } = props;

  // var
  const isRound = round ? 'var__shape--round' : '';
  const isThick = thick ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';
  const isStart = start ? 'var__icon-position--start' : '';
  const isEnd = end ? 'var__icon-position--end' : '';

  // size
  const isSmall = size === 'small' ? 'size--s' : '';
  const isMiddle = size === 'middle' ? 'size--m' : '';
  const isLarge = size === 'large' ? 'size--l' : '';

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
      {icon ? <span className={`${style.icon}`}>{icon}</span> : ''}
      <span className={style.txt}>{text}</span>
    </button>
  );
};

export default Button;

/* ---------------------------------- Types --------------------------------- */

Button.propTypes = {
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  /**
   * `react-icons` as rendered component
   */
  icon: PropTypes.element,
  /**
   * The **Text** content of the button
   */
  text: PropTypes.string,
  /**
   * The shape of the button will be round.
   */
  round: PropTypes.bool,
  /**
   * The border of the button will be thick.
   */
  thick: PropTypes.bool,
  /**
   * The button will have a convex effect.
   */
  convex: PropTypes.bool,
  /**
   * The icon is in the beginning.
   */
  // start: PropTypes.bool,
  /**
   * The icon is in the end,
   */
  end: PropTypes.bool,
  /**
   * Pass EventHandler to handle ClickEvent
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'middle',
  icon: undefined,
  text: 'Press',
  round: false,
  thick: false,
  convex: false,
  // start: false,
  end: false,
  onClick: undefined,
};
