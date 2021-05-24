import React from 'react';
import style from './TextBox.module.scss';

const TextBox = (props) => {
  const { label, description } = props;

  // props

  return (
    <div className={style.host}>
      <label className={style.label}>{label}</label>
      <input className={style['input-box']} type="text" placeholder={label} />

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
// - [ ] text field discription under textbox
// - [ ] add valid, invalid
// - [ ] text field as textblock
// - [ ] text field disabled
// - [ ] button--left / --right
// - [ ] icon-button--left / --right
// - [ ] field valid
// - [ ] field invalid
