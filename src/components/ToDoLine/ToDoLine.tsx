import * as React from 'react';
import './ToDoLine.css';

const ToDoLine = (props: any) => {
  function changeCheck() {}

  return (
    <div className={'todoline'}>
      <input type={'checkbox'} checked={props.item.checked} onChange={changeCheck} />
      {props.item.text}
    </div>
  );
};

export default ToDoLine;
