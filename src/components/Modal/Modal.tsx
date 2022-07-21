import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import HeavyCrossIcon from '../Icons/HeavyCrossIcon';
import css from './Modal.scss';

const modalRootElement = document.getElementById('modal-root');

const Modal = (props: any) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    //if (props.isMoadl) {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
    //}
  });

  return (
    <>
      {props.isModal ? (
        <div className={css.modal}>
          <div className={css.modalContent}>
            <div className={css.closeIcon} onClick={() => props.setIsModal(false)}>
              <HeavyCrossIcon />
            </div>
            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
