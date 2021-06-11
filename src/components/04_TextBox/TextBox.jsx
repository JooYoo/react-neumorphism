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
  // TODO: description
  large: PropTypes.bool,
  // TODO: font lost in sb
  label: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  textarea: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disable: PropTypes.bool,
  icon: PropTypes.element,
};

TextBox.defaultProps = {
  large: false,
  label: '',
  placeholder: '...',
  description: '',
  textarea: '',
  valid: false,
  invalid: false,
  disable: false,
  icon: undefined,
};
