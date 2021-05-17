import React from 'react';
import style from './TextBlock.module.scss';

const TextBlock = (props) => {
  const { children } = props;

  return (
    <div className={`${style.host}`}>
      {/* <h3>Title</h3> */}
      <p className={`${style.txt}`}>{children}</p>
    </div>
  );
};

export default TextBlock;

// size: small, middle, large
// isFullLine
// icon as prop
// title as prop
// isOneLine
