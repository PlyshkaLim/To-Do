import './ToDoLine.scss';

import cn from 'classnames';
import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';

type PropsType = {
  item: {
    text: string;
    checked: boolean;
  };
  key: number;
  setList: any;
};

const ToDoLine = (props: PropsType) => {
  const { List, changeList } = useContext(Context);

  let check = props.item.checked;
  const changeCheck = () => {
    const index = List.indexOf(props.item);
    console.log(List);
    props.setList((existingItems) => {
      return [
        ...existingItems.slice(0, index),
        { text: props.item.text, checked: !props.item.checked },
        ...existingItems.slice(index + 1),
      ];
    });
  };

  return (
    <div className={cn('todoline', { checked: check })}>
      <input
        className={'custom-checkbox'}
        type={'checkbox'}
        checked={check}
        onChange={changeCheck}
      />
      {props.item.text}
    </div>
  );
};

export default ToDoLine;
