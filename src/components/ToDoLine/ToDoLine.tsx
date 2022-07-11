import cn from 'classnames';
import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';
import css from './ToDoLine.scss';

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
    changeList('ADD_ITEM', index);
  };

  const deleteLine = () => {
    const index = List.indexOf(props.item);
    changeList('DELETE_ITEM', index);
  };

  return (
    <div className={cn(css.todoline, { [css.checked]: check })}>
      <input
        className={css.customCheckbox}
        type={'checkbox'}
        checked={check}
        onChange={changeCheck}
      />
      {props.item.text}
      <button className={css.buttonDelete} onClick={deleteLine}>
        Delete
      </button>
    </div>
  );
};

export default ToDoLine;
