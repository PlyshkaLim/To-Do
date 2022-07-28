import '../../reset.css';

import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction, useContext, useRef, useState } from 'react';

import { Context } from '../../ListContext';
import { ActionTypeEnum, Filter, Keys } from '../Enums';
import InputTextField from '../InputTextField/InputTextField';
import Options from '../Options/Options';
import PopoverWrapper from '../PopoverWrapper/PopoverWrapper';
import SideMenuButtons from '../SideMenuButtons/SideMenuButtons';
import TippyComponent from '../TippyComponent';
import ToDoLines from '../ToDoLines/ToDoLines';
import ToolTipExample from '../ToolTipExample/ToolTipExample';
import css from './App.scss';
import { Popover2 } from "../Popover2/Popover2";

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
  const inputRef = { ref: useRef(), text: 'Write what need to do', direction: 'top' };
  const optionCheckAllRef = { ref: useRef(), text: 'Mark all tasks completed', direction: 'left' };
  const optionAllRef = { ref: useRef(), text: 'Show all tasks', direction: 'top' };
  const optionActiveRef = { ref: useRef(), text: 'Show active tasks', direction: 'top' };
  const optionDoneRef = { ref: useRef(), text: 'Show completed tasks', direction: 'top' };
  const optionClearDoneRef = {
    ref: useRef(),
    text: 'Clear all completed tasks',
    direction: 'right',
  };
  //const checkboxRef = { ref: useRef(), text: 'Mark done task', direction: 'top' };
  const refArray = [
    inputRef,
    optionCheckAllRef,
    optionAllRef,
    optionActiveRef,
    optionDoneRef,
    optionClearDoneRef,
  ];

  const [openToolTipExample, setOpenToolTipExample] = useState<boolean>(false);
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const [currentPopover, setCurrentPopover] = useState<number>(0);
  const popoverArray = [
    {
      order: 0,
    },
    {
      order: 1,
    },
  ];
  const [isPopover2Open, setIsPopover2Open] = useState<boolean>(false);

  return (
    <div className={css.app}>
      <div className={css.sideMenu}>
        <SideMenuButtons
          isModal={isModal}
          setIsModal={setIsModal}
          isTipsVisible={isTipsVisible}
          setIsTipsVisible={setIsTipsVisible}
          refIndex={refIndex}
          setRefIndex={setRefIndex}
          refArray={refArray}
          setIsOpenPopover={setIsOpenPopover}
          currentPopover={currentPopover}
          setCurrentPopover={setCurrentPopover}
          popoverArrayLength={popoverArray.length}
          isPopover2Open={isPopover2Open}
          setIsPopover2Open={setIsPopover2Open}
        />
      </div>
      <div className={css.main}>
        <h1 className={css.heading} aria-describedby="tooltip">
          To Do List
        </h1>
        {/*<ToolTipTest text={'qweasd'} />*/}
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
        <ToolTipExample
          header={'Header'}
          content={'My tooltip'}
          placement={'right'}
          open={openToolTipExample}
          setOpen={setOpenToolTipExample}
        >
          <button onClick={() => setOpenToolTipExample(true)} className={css.buttonTip}>
            Click me
          </button>
        </ToolTipExample>
        <TippyComponent
          newRef={refArray[refIndex].ref}
          tippyContent={refArray[refIndex].text}
          visible={isTipsVisible}
          direction={refArray[refIndex].direction}
        />
        {/*<Dialog
          render={({ close, labelId, descriptionId }) => (
            <>
              <h1 id={labelId}>This is a dialog!</h1>
              <p id={descriptionId}>Now that we've got your attention, you can close this.</p>
              <button onClick={close}>Close</button>
            </>
          )}
        >
          <button>Open dialog</button>
        </Dialog>*/}
        <br />
        <PopoverWrapper
          isOpenPopover={isOpenPopover}
          setIsOpenPopover={setIsOpenPopover}
          thisOrder={0}
          currentOrder={popoverArray[currentPopover].order}
        >
          <div>123456</div>
        </PopoverWrapper>

        <PopoverWrapper
          isOpenPopover={isOpenPopover}
          setIsOpenPopover={setIsOpenPopover}
          thisOrder={1}
          currentOrder={popoverArray[currentPopover].order}
        >
          <div>123456789</div>
        </PopoverWrapper>
        <Popover2
          open={isPopover2Open}
          setOpen={setIsPopover2Open}
          placement={'top-start'}
          render={({ close, descriptionId }) => (
            <>
              <p id={descriptionId}>
                Какая-то подсказка, которая не мешает сценарию, ее можно закрыть по крестику
              </p>
              <button onClick={close} className="cross">
                х
              </button>
            </>
          )}
        >
          <button>Click to open popover</button>
        </Popover2>
      </div>
    </div>
  );
};

export default App;
