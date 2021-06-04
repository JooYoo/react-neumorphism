import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonIsolation.module.scss';

const ButtonIsolation = (props) => {
  const { size, icon, text, round, rhombus, thick, convex, onClick } = props;

  // var
  const isRound = round ? 'var__shape--round' : '';
  const isRhombus = rhombus ? 'var__shape--rhombus' : '';
  const isThick = thick ? 'var__border--thick' : '';
  const isConvex = convex ? 'var__shape--convex' : '';

  // btn size
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
                  ${style[isRhombus]}
                  ${style[isConvex]}
                  ${style[isThick]}`}
      onClick={onClick}
    >
      {icon ? (
        <span className={style.icon}>{icon}</span>
      ) : (
        <span className={style.txt}>{text}</span>
      )}
    </button>
  );
};

export default ButtonIsolation;

/* ---------------------------------- Types ---------------------------------- */

ButtonIsolation.propTypes = {
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
   * The shape of the button will be rhombus.
   */
  rhombus: PropTypes.bool,
  /**
   * The border of the button will be thick.
   */
  thick: PropTypes.bool,
  /**
   * The button will have a convex effect.
   */
  convex: PropTypes.bool,
  /**
   * Pass EventHandler to handle ClickEvent
   */
  onClick: PropTypes.func,
};

ButtonIsolation.defaultProps = {
  size: 'middle',
  icon: undefined,
  text: 'H',
  round: false,
  rhombus: false,
  thick: false,
  convex: false,
  onClick: undefined,
};
