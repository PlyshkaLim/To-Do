import '../../reset.css';
import 'tippy.js/dist/tippy.css';

import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction, useContext, useRef, useState } from 'react';

import { Context } from '../../ListContext';
import { ActionTypeEnum, Filter, Keys } from '../Enums';
import InputTextField from '../InputTextField/InputTextField';
import Modal from '../Modal/Modal';
import Options from '../Options/Options';
import TippyComponent from '../TippyComponent';
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
  const [isTipsVisible, setIsTipsVisible] = useState<boolean>(false);
  const [refIndex, setRefIndex] = useState<number>(0);
  const inputRef = { ref: useRef(), text: 'Write what need to do' };
  const optionCheckAllRef = { ref: useRef(), text: 'Mark all tasks completed' };
  const optionAllRef = { ref: useRef(), text: 'Show all tasks' };
  const optionActiveRef = { ref: useRef(), text: 'Show active tasks' };
  const optionDoneRef = { ref: useRef(), text: 'Show completed tasks' };
  const optionClearDoneRef = { ref: useRef(), text: 'Clear all completed tasks' };
  const checkboxRef = { ref: useRef(), text: 'Mark done task' };
  const refArray = [
    inputRef,
    optionCheckAllRef,
    optionAllRef,
    optionActiveRef,
    optionDoneRef,
    optionClearDoneRef,
    checkboxRef,
  ];

  return (
    <div className={css.app}>
      <div className={css.sideMenu}>
        <button onClick={() => setIsModal(true)}>Show modal</button>
        <Modal isModal={isModal} setIsModal={setIsModal}>
          This is modal.
        </Modal>
        <button onClick={() => setIsTipsVisible(!isTipsVisible)}>
          {isTipsVisible ? <>Hide </> : <>Show </>}
          tips
        </button>
        <button
          onClick={() => {
            setRefIndex((refIndex - 1 + refArray.length) % refArray.length);
          }}
        >
          Previous tip
        </button>
        <button
          onClick={() => {
            setRefIndex((refIndex + 1) % refArray.length);
          }}
        >
          Next tip
        </button>
      </div>
      <div className={css.main}>
        <h1 className={css.heading}>To Do List</h1>
        <InputTextField
          newref={inputRef}
          inputState={inputState}
          changeInput={changeInput}
          onEnterKeyDown={onEnterKeyDown}
          placeholder={'What need to do...'}
        />
        <Options
          optionCheckAllRef={optionCheckAllRef.ref}
          newref1={optionAllRef.ref}
          newref2={optionActiveRef.ref}
          newref3={optionDoneRef.ref}
          optionClearDoneRef={optionClearDoneRef.ref}
          filter={filter}
          setFilter={setFilter}
          countChecked={countChecked}
          checkAllChecksInLines={checkAllChecksInLines}
          clearAllCompletedInLines={clearAllCompletedInLines}
        />
        <ToDoLines filter={filter} />
        <div className={css.counter}>{List.length} items left</div>
        <TippyComponent
          newRef={refArray[refIndex].ref}
          tippyContent={refArray[refIndex].text}
          visible={isTipsVisible}
          id={'inputField'}
        />
      </div>
    </div>
  );
};

export default App;
