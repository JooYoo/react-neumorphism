import React from 'react';
import style from './TextBox.module.scss';

const TextBox = () => {
  return (
    <div className={style.host}>
      <label>User name</label>
      <input type="text" placeholder="User name" />
    </div>
  );
};

export default TextBox;

// TODO:
// - [ ] text field discription under textbox
// - [ ] text field as textblock
// - [ ] text field disabled
// - [ ] button--left / --right
// - [ ] icon-button--left / --right
// - [ ] field valid
// - [ ] field invalid
