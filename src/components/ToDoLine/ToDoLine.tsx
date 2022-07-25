import Tippy from '@tippyjs/react';
import cn from 'classnames';
import * as React from 'react';
import { useRef, useState } from 'react';

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import { Keys } from '../Enums';
import HeavyCrossIcon from '../Icons/HeavyCrossIcon';
import css from './ToDoLine.scss';

type ToDoLineProps = {
  item: {
    text: string;
    checked: boolean;
  };
  key: number;
  changeTextInLine: (index: number, input: string) => void;
  deleteLine: (index: number) => void;
  index: number;
  switchCheckInLine: (index: number) => void;
};

const ToDoLine = ({
  item,
  changeTextInLine,
  deleteLine,
  index,
  switchCheckInLine,
}: ToDoLineProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [input, setInput] = useState<string>(item.text);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === Keys.Enter) {
      onBlur();
    }
  };

  const onBlur = () => {
    setIsEdit(!isEdit);
    setInput(input);
    changeTextInLine(index, input);
  };

  return (
    <div className={css.toDoLine}>
      {isEdit ? (
        <input
          className={css.inputChange}
          onKeyDown={onEnterKeyDown}
          onChange={handleChangeInput}
          onBlur={onBlur}
          value={input}
          autoFocus
        />
      ) : (
        <>
          <CustomCheckbox
            check={item.checked}
            index={index}
            switchCheckInLine={switchCheckInLine}
          />
          <div
            className={cn(css.listText, { [css.checked]: item.checked })}
            onDoubleClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            {item.text}
          </div>
          <button className={css.buttonDelete} onClick={() => deleteLine(index)}>
            <HeavyCrossIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoLine;
