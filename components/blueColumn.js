import React from 'react';

function blueColumn(props) {
  return (
    <div className='laptop:h-106 desktop:h-110 bg-default laptop:rounded-3xl desktop:rounded-4xl relative'>
      {props.children}
    </div>
  );
}

export default blueColumn;
