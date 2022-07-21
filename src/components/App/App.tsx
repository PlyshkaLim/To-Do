import '../../reset.css';
import 'tippy.js/dist/tippy.css';

import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from 'react';

import { Context } from '../../ListContext';
import { ActionTypeEnum, Filter, Keys } from '../Enums';
import InputTextField from '../InputTextField/InputTextField';
import Modal from '../Modal/Modal';
import Options from '../Options/Options';
import ToDoLines from '../ToDoLines/ToDoLines';
import css from './App.scss';

type AppProps = {
  inputState: string;
  setInputState: Dispatch<SetStateAction<string>>;
};

const App = ({ inputState, setInputState }: AppProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>(Filter.All);

  const { List, changeList } = useContext(Context);
  const countChecked = List.filter((item) => item.checked === true).length;

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === Keys.Enter) {
      changeList({ actionType: ActionTypeEnum.ADD_ITEM });
    }
  };

  const checkAllChecksInLines = (changeOn: boolean) => {
    changeList({ actionType: ActionTypeEnum.CHECK_ALL, payload: changeOn });
  };

  const clearAllCompletedInLines = () => {
    changeList({ actionType: ActionTypeEnum.CLEAR_COMPLETED });
  };

  return (
    <div className={css.main}>
      <button onClick={() => setIsModal(true)}>Show modal</button>
      <Modal isModal={isModal} setIsModal={setIsModal}>
        This is modal.
      </Modal>

      <h1 className={css.heading}>To Do List</h1>
      <InputTextField
        inputState={inputState}
        changeInput={changeInput}
        onEnterKeyDown={onEnterKeyDown}
        placeholder={'What need to do...'}
      />
      <Options
        filter={filter}
        setFilter={setFilter}
        countChecked={countChecked}
        checkAllChecksInLines={checkAllChecksInLines}
        clearAllCompletedInLines={clearAllCompletedInLines}
      />
      <ToDoLines filter={filter} />
      <div className={css.counter}>{List.length} items left</div>
    </div>
  );
};

export default App;
