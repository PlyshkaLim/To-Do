import * as React from 'react';

import Modal from '../Modal/Modal';
import css from './SideMenuButtons.scss';

const SideMenuButtons = ({
  isModal,
  setIsModal,
  isTipsVisible,
  setIsTipsVisible,
  refIndex,
  setRefIndex,
  refArray,
  setOpenPopover,
  currentPopover,
  setCurrentPopover,
  popoverArrayLength,
}: any) => {
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
      <button onClick={() => setOpenPopover(true)}>Click to open popover</button>
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
    </div>
  );
};

export default SideMenuButtons;
