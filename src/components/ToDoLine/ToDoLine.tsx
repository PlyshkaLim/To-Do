import cn from 'classnames';
import * as React from 'react';
import { ChangeEvent, useContext, useState } from 'react';

import { Context } from '../../ListContext';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import { Actions, Keys } from '../Enums';
import HeavyCrossIcon from '../Icons/HeavyCrossIcon';
import css from './ToDoLine.scss';

type ToDoLineProps = {
  item: {
    text: string;
    checked: boolean;
  };
  key: number;
};

const ToDoLine = ({ item }: ToDoLineProps) => {
  const { List, changeList } = useContext(Context);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [input1, setInput1] = useState<string>(item.text);
  const index = List.indexOf(item);
  const check = item.checked;

  const onEnterKeyDown = (event: any) => {
    if (event.key === Keys.Enter) {
      setIsEdit(!isEdit);
      setInput1(input1);
      changeList(Actions.CHANGE_TEXT, [index, input1]);
    }
  };

  const onBlur = () => {
    setIsEdit(!isEdit);
    setInput1(input1);
    changeList(Actions.CHANGE_TEXT, [index, input1]);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };

  return (
    <div className={css.toDoLine}>
      {isEdit ? (
        <input
          className={css.inputChange}
          onKeyDown={onEnterKeyDown}
          onChange={handleChangeInput}
          onBlur={onBlur}
          value={input1}
          autoFocus
        />
      ) : (
        <>
          <CustomCheckbox check={check} index={index} />
          <div
            className={cn(css.listText, { [css.checked]: check })}
            onDoubleClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            {item.text}
          </div>
          <button
            className={css.buttonDelete}
            onClick={() => changeList(Actions.DELETE_ITEM, index)}
          >
            <HeavyCrossIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoLine;
