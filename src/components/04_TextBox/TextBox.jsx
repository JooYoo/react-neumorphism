import React from 'react';
import style from './TextBox.module.scss';

const TextBox = (props) => {
  const { label, placeholder, description, textarea, valid } = props;

  return (
    <div className={style.host}>
      <label className={style.label}>{label}</label>

      <div>
        {textarea ? (
          <textarea
            className={style.textarea}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            className={style['input-box']}
            type="textarea"
            placeholder={placeholder}
          />
        )}
      </div>

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
// - [ ] text field disabled
// - [ ] button--left / --right
// - [ ] icon-button--left / --right
// - [ ] field valid
// - [ ] field invalid
