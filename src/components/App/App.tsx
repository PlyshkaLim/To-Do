import './App.css';
import * as React from 'react';
import ToDoLine from '../ToDoLine/ToDoLine';
import { Context } from '../../ListContext';
import { useState } from 'react';

export type ListType = {
  text: string;
  checked: boolean;
};

const App = () => {
  const array: ListType[] = [
    { text: 'Поймать кошку', checked: true },
    { text: 'Помыть кошку', checked: false },
    { text: 'Погладить кошку', checked: false },
  ];
  const [list, setList] = useState<ListType[]>(array);
  const [inputState, setInputState] = useState<string>('');

  function addListItem() {
    if (inputState !== '') {
      list.push({ text: inputState, checked: false }); //!!
      setInputState('');
    }
  }

  function changeInput(event: any) {
    setInputState(event.target.value);
  }

  function enterKey(event: any) {
    if (event.key === 'Enter') {
      addListItem();
    }
  }

  return (
    <Context.Provider
      value={{
        List: list,
        changeList: (value: ListType[]) => setList(value),
      }}
    >
      <div className={'main'}>
        <h1>To Do List</h1>
        <input
          type={'text'}
          placeholder={'What need to do...'}
          value={inputState}
          onChange={changeInput}
          onKeyPress={enterKey}
        />
        <button onClick={addListItem}>Add</button>
        <Context.Consumer>
          {(Context) =>
            Context.List.map((item: number, id: number) => (
              <ToDoLine item={item} key={id} qq={addListItem} />
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
