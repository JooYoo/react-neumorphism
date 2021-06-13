import React from 'react';
import PropTypes from 'prop-types';
import style from './TextBox.module.scss';

const TextBox = (props) => {
  const {
    large,
    label,
    placeholder,
    description,
    textarea,
    valid,
    invalid,
    disable,
    icon,
  } = props;

  // size
  const isLarge = large ? 'size--l' : '';

  // var
  const isValid = valid ? 'textbox--valid' : '';
  const isInvalid = invalid ? 'textbox--invalid' : '';
  const isIcon = icon ? 'textbox--icon' : '';
  const isDisable = disable ? 'textbox--disable' : '';

  return (
    <div className={`${style.host} ${style[isLarge]}`}>
      <label className={style.label}>{label}</label>

      {textarea ? (
        <textarea
          className={`${style.textarea} ${style[isValid]} ${style[isInvalid]} ${style[isDisable]}`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <div className={style[isIcon]}>
          {icon ? <span className={style.icon}>{icon}</span> : ''}
          <input
            className={`${style['input-box']} ${style[isValid]} ${style[isInvalid]} ${style[isDisable]}`}
            type="text"
            placeholder={placeholder}
          />
        </div>
      )}

      {description ? (
        <div className={style.description}>{description}</div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TextBox;

/* ---------------------------------- Types --------------------------------- */

TextBox.propTypes = {
  /**
   * The size of the TextBox. Default is middle.
   */
  large: PropTypes.bool,
  /**
   * The label of the TextBox
   */
  label: PropTypes.string,
  /**
   * The placeholder in the TextBox
   */
  placeholder: PropTypes.string,
  /**
   * The description under the TextBox
   */
  description: PropTypes.string,
  /**
   * Turn the TextBox to a textarea, resizable vertically
   */
  textarea: PropTypes.bool,
  /**
   * Display data valid layout
   */
  valid: PropTypes.bool,
  /**
   * Diaply data invalid layout
   */
  invalid: PropTypes.bool,
  /**
   * The TextBox is disable.
   */
  disable: PropTypes.bool,
  /**
   * `react-icons` as rendered component
   */
  icon: PropTypes.element,
};

TextBox.defaultProps = {
  large: false,
  label: '',
  placeholder: '',
  description: '',
  textarea: '',
  valid: false,
  invalid: false,
  disable: false,
  icon: undefined,
};
