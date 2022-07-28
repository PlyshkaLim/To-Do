import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

import Modal from '../Modal/Modal';
import css from './SideMenuButtons.scss';

type SideMenuButtonsProps = {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  isTipsVisible: boolean;
  setIsTipsVisible: Dispatch<SetStateAction<boolean>>;
  refIndex: number;
  setRefIndex: Dispatch<SetStateAction<number>>;
  refArray: any;
  setIsOpenPopover: Dispatch<SetStateAction<boolean>>;
  currentPopover: number;
  setCurrentPopover: Dispatch<SetStateAction<number>>;
  popoverArrayLength: number;
  isPopover2Open: any;
  setIsPopover2Open: any;
};

const SideMenuButtons = (props: SideMenuButtonsProps) => {
  const {
    isModal,
    setIsModal,
    isTipsVisible,
    setIsTipsVisible,
    refIndex,
    setRefIndex,
    refArray,
    setIsOpenPopover,
    currentPopover,
    setCurrentPopover,
    popoverArrayLength,
    isPopover2Open,
    setIsPopover2Open,
  } = props;

  const getNextTipNumber = (): number => {
    return isTipsVisible ? (refIndex + 1) % refArray.length : refIndex;
  };

  const getPreviousTipNumber = (): number => {
    return isTipsVisible ? (refIndex - 1 + refArray.length) % refArray.length : refIndex;
  };

  return (
    <div className={css.sideMenu}>
      <button onClick={() => setIsModal(true)}>Show modal</button>
      <Modal isModal={isModal} setIsModal={setIsModal}>
        This is modal.
      </Modal>
      <button onClick={() => setIsTipsVisible(!isTipsVisible)}>
        {isTipsVisible ? <>Hide </> : <>Show </>}
        tips
      </button>
      <div className={css.buttonsNavigation}>
        <button
          onClick={() => {
            setRefIndex(getPreviousTipNumber);
          }}
        >
          Previous tip
        </button>
        <button
          onClick={() => {
            setRefIndex(getNextTipNumber);
          }}
        >
          Next tip
        </button>
      </div>
      <button onClick={() => setIsOpenPopover(true)}>Click to open popover</button>
      <button onClick={() => setCurrentPopover((currentPopover + 1) % popoverArrayLength)}>
        Next popover
      </button>
      <button
        onClick={() =>
          setCurrentPopover((currentPopover - 1 + popoverArrayLength) % popoverArrayLength)
        }
      >
        Previous popover
      </button>
      <button onClick={() => setIsPopover2Open(!isPopover2Open)}>Open popover2</button>
    </div>
  );
};

export default SideMenuButtons;
