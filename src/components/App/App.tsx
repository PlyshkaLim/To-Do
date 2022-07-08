import './App.scss';
import '../../../node_modules/reset-css/reset.css';

import * as React from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';

import { Context } from '../../ListContext';
import ToDoLine from '../ToDoLine/ToDoLine';

export type ListItemType = {
  text: string;
  checked: boolean;
};

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
    if (event.key === 'Enter') {
      addListItem();
    }
  };

  return (
    <Context.Provider
      value={{
        List: list,
        changeList: (value: ListItemType[]) => setList(value),
      }}
    >
      <div className={'main'}>
        <h1 className={'heading'}>To Do List</h1>
        <input
          className={'inputField'}
          type={'text'}
          placeholder={'What need to do...'}
          value={inputState}
          onChange={changeInput}
          onKeyDown={enterKey}
        />
        {/*<button onClick={addListItem}>Add</button>*/}
        <Context.Consumer>
          {(Context) =>
            Context.List.map((item: ListItemType, id: number) => (
              <ToDoLine item={item} key={id} setList={setList} />
            ))
          }
        </Context.Consumer>
        <span>1 option </span>
        <span>2 option </span>
        <span>3 option </span>
      </div>
    </Context.Provider>
  );
};

export default App;
