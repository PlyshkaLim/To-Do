import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

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
      {props.isModal
        ? createPortal(
            <div className={css.modal} onClick={() => props.setIsModal(false)}>
              {props.children}
            </div>,
            element
          )
        : null}
    </>
  );
};

export default Modal;
