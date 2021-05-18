import React from 'react';
import style from './Bg.module.scss';

function Bg(props) {
  const { centerRow, centerColumn, padding, children } = props;

  const isCenterRow = centerRow ? 'center--flex-row' : '';
  const isCenterColumn = centerColumn ? 'center--flex-column' : '';

  return (
    <div
      className={`${style.host} 
                  ${style[isCenterRow]}
                  ${style[isCenterColumn]}`}
      style={{ padding: `${padding}` }}
    >
      {children}
    </div>
  );
}

export default Bg;
