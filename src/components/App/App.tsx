import '../../reset.css';

import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from 'react';

import { Context } from '../../ListContext';
import { Actions, Filter, Keys } from '../Enums';
import InputField from '../InputField/InputField';
import Options from '../Options/Options';
import ToDoLines from '../ToDoLines/ToDoLines';
import css from './App.scss';

type AppProps = {
  inputState: string;
  setInputState: Dispatch<SetStateAction<string>>;
};

const App = ({ inputState, setInputState }: AppProps) => {
  const [filter, setFilter] = useState<string>(Filter.All);
  const { List, changeList } = useContext(Context);

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onEnterKeyDown = (event: KeyboardEvent) => {
    if (event.key === Keys.Enter) {
      changeList(Actions.ADD_ITEM);
    }
  };

  return (
    <div className={css.main}>
      <h1 className={css.heading}>To Do List</h1>
      <InputField
        inputState={inputState}
        changeInput={changeInput}
        onEnterKeyDown={onEnterKeyDown}
      />
      <Options filter={filter} setFilter={setFilter} />
      <ToDoLines filter={filter} />
      <div className={css.counter}>{List.length} items left</div>
    </div>
  );
};

export default App;
