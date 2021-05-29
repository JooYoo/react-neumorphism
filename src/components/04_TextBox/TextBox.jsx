import React from 'react';
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
    icon,
  } = props;

  // size
  const isLarge = large ? 'size--l' : '';

  // var
  const isValid = valid ? 'textbox--valid' : '';
  const isInvalid = invalid ? 'textbox--invalid' : '';
  const isIcon = icon ? 'textbox--icon' : '';

  return (
    <div className={`${style.host} ${style[isLarge]}`}>
      <label className={style.label}>{label}</label>

      {textarea ? (
        <textarea
          className={style.textarea}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <div className={style[isIcon]}>
          {icon ? <span className={style.icon}>{icon}</span> : ''}
          <input
            className={`${style['input-box']} ${style[isValid]} ${style[isInvalid]}`}
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

// TODO:
// - [x] text field discription under textbox
// - [x] text field as textblock
// - [x] textbox icon
// - [x] field valid
// - [x] field invalid
// - [ ] text field disabled
