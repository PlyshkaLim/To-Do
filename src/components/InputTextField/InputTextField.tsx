import Tippy from '@tippyjs/react';
import * as React from 'react';
import { ChangeEvent, RefObject, useRef } from 'react';

import TippyComponent from '../TippyComponent';
import css from './InputTextField.scss';

type InputFieldProps = {
  inputState: string;
  changeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  newref: any;
};

const InputTextField = ({
  inputState,
  changeInput,
  onEnterKeyDown,
  placeholder,
  newref,
}: InputFieldProps) => {
  return (
    <div>
      <input
        id={'inputField'}
        ref={newref.ref}
        className={css.inputTextField}
        type={'text'}
        placeholder={placeholder}
        value={inputState}
        onChange={changeInput}
        onKeyDown={onEnterKeyDown}
      />
      {/*<Tippy
        content={'Write what tou need to do'}
        placement={'top-start'}
        visible={true}
        reference={newref}
      />*/}
    </div>
  );
};

export default InputTextField;
