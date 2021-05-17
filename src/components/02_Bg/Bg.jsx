import React from 'react';
import style from './Bg.module.scss';

function Bg(props) {
  const { centerRow, centerColumn, children } = props;

  const isCenterRow = centerRow ? 'center--flex-row' : '';
  const isCenterColumn = centerColumn ? 'center--flex-column' : '';

  return (
    <div
      className={`${style.host} 
                  ${style[isCenterRow]}
                  ${style[isCenterColumn]}`}
    >
      {children}
    </div>
  );
}

export default Bg;
