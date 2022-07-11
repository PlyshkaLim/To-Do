import '../../../node_modules/reset-css/reset.css';

import * as React from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';

import { Context } from '../../ListContext';
import InputField from '../InputField/InputField';
import Options from '../Options/Options';
import ToDoLines from '../ToDoLines/ToDoLines';
import css from './App.scss';

export type ListItemType = {
  text: string;
  checked: boolean;
};

enum Keys {
  Enter = 'Enter',
}

const App = () => {
  const array: ListItemType[] = [
    { text: 'Поймать кошку', checked: true },
    { text: 'Помыть кошку', checked: false },
    { text: 'Погладить кошку', checked: false },
  ];
  const [list, setList] = useState<ListItemType[]>(array);
  const [inputState, setInputState] = useState<string>('');

  const addListItem = () => {
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
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const enterKey = (event: any) => {
    if (event.key === Keys.Enter) {
      addListItem();
    }
  };

  const dispatch = (actionType, payload) => {
    const index = payload;
    switch (actionType) {
      case 'ADD_ITEM':
        setList([
          ...list.slice(0, index),
          { text: list[index].text, checked: !list[index].checked },
          ...list.slice(index + 1),
        ]);
        break;
      case 'DELETE_ITEM':
        setList([...list.slice(0, index), ...list.slice(index + 1)]);
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
        <ToDoLines setList={setList} />
        <Options />
      </div>
    </Context.Provider>
  );
};

export default App;
