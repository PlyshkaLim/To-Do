import cn from 'classnames';
import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';
import { Actions } from '../Enums';
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
  const index = List.indexOf(props.item);
  let check = props.item.checked;

  return (
    <div className={css.toDoLine}>
      <input
        className={css.customCheckbox}
        type={'checkbox'}
        checked={check}
        onChange={() => changeList(Actions.CHANGE_CHECK, index)}
      />
      <div className={cn({ [css.checked]: check })}>{props.item.text}</div>
      <div className={css.buttonDelete}>
        <button onClick={() => changeList(Actions.DELETE_ITEM, index)}>{'\u2716'}</button>
      </div>
    </div>
  );
};

export default ToDoLine;
