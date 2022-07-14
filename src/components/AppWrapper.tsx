import * as React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Context } from '../ListContext';
import { array } from '../TestArray';
import App from './App/App';
import { Actions } from './Enums';

export type ListItemType = {
  id: string;
  text: string;
  checked: boolean;
};
const AppWrapper = () => {
  const [list, setList] = useState<ListItemType[]>(array);
  const [inputState, setInputState] = useState<string>('');

  const addItem = () => {
    if (inputState.trim().length !== 0) {
      setList([
        ...list,
        {
          id: uuidv4(),
          text: inputState,
          checked: false,
        },
      ]);
      setInputState('');
    }
  };

  const changeCheck = (index: number) => {
    setList([
      ...list.slice(0, index),
      { id: list[index].id, text: list[index].text, checked: !list[index].checked },
      ...list.slice(index + 1),
    ]);
  };

  const deleteItem = (index: number) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  const checkAll = (check: boolean) => {
    setList(list.map((item) => ({ id: item.id, text: item.text, checked: check })));
  };

  const clearDone = () => {
    setList(list.filter((item) => item.checked === false));
  };

  const changeText = (index: number, newText: string) => {
    if (newText.trim().length !== 0) {
      setList([
        ...list.slice(0, index),
        { id: list[index].id, text: newText, checked: list[index].checked },
        ...list.slice(index + 1),
      ]);
    } else {
      deleteItem(index);
    }
  };

  const dispatch = (actionType: Actions, payload?: any) => {
    switch (actionType) {
      case Actions.ADD_ITEM:
        addItem();
        break;
      case Actions.CHANGE_CHECK:
        changeCheck(payload);
        break;
      case Actions.DELETE_ITEM:
        deleteItem(payload);
        break;
      case Actions.CHECK_ALL:
        checkAll(payload);
        break;
      case Actions.CLEAR_DONE:
        clearDone();
        break;
      case Actions.CHANGE_TEXT:
        changeText(payload[0], payload[1]);
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
      <App inputState={inputState} setInputState={setInputState} />
    </Context.Provider>
  );
};

export default AppWrapper;
