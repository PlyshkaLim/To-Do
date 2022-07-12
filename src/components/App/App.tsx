import '../../../node_modules/reset-css/reset.css';

import * as React from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';

import { Context } from '../../ListContext';
import { Actions, Filter, Keys } from '../Enums';
import InputField from '../InputField/InputField';
import Options from '../Options/Options';
import ToDoLines from '../ToDoLines/ToDoLines';
import css from './App.scss';

export type ListItemType = {
  text: string;
  checked: boolean;
};

const App = () => {
  const array: ListItemType[] = [
    { text: 'Поймать кошку', checked: false },
    { text: 'Помыть кошку', checked: true },
    { text: 'Погладить кошку', checked: false },
  ];
  const [list, setList] = useState<ListItemType[]>(array);
  const [inputState, setInputState] = useState<string>('');
  const [filter, setFilter] = useState<string>(Filter.All);

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const enterKey = (event: KeyboardEvent) => {
    if (event.key === Keys.Enter) {
      dispatch(Actions.ADD_ITEM);
    }
  };

  const dispatch = (actionType: Actions, payload?: any) => {
    const index = payload;
    switch (actionType) {
      case Actions.ADD_ITEM:
        if (inputState !== '') {
          setList([
            ...list,
            {
              text: inputState,
              checked: false,
            },
          ]);
          setInputState('');
        }
        break;
      case Actions.CHANGE_CHECK:
        setList([
          ...list.slice(0, index),
          { text: list[index].text, checked: !list[index].checked },
          ...list.slice(index + 1),
        ]);
        break;
      case Actions.DELETE_ITEM:
        setList([...list.slice(0, index), ...list.slice(index + 1)]);
        break;
      case Actions.CHECK_ALL:
        setList(
          list.filter((item) => {
            item.checked = index;
            return item.checked === index;
          })
        );
        break;
      case Actions.CLEAR_DONE:
        setList(list.filter((item) => item.checked === false));
        break;
      default:
        return;
    }
  };

  return (
    <Context.Provider
      value={{
        List: list,
        changeList: dispatch,
      }}
    >
      <div className={css.main}>
        <h1 className={css.heading}>To Do List</h1>
        <InputField inputState={inputState} changeInput={changeInput} enterKey={enterKey} />
        <Options filter={filter} setFilter={setFilter} />
        <ToDoLines setList={setList} filter={filter} />
      </div>
    </Context.Provider>
  );
};

export default App;
