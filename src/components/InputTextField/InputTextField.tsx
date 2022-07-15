import Tippy from '@tippyjs/react';
import * as React from 'react';
import { ChangeEvent } from 'react';

import css from './InputTextField.scss';

type InputFieldProps = {
  inputState: string;
  changeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputTextField = ({
  inputState,
  changeInput,
  onEnterKeyDown,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <Tippy content={'Write what tou need to do'} placement={'top-start'}>
        <input
          className={css.inputTextField}
          type={'text'}
          placeholder={placeholder}
          value={inputState}
          onChange={changeInput}
          onKeyDown={onEnterKeyDown}
        />
      </Tippy>
    </div>
  );
};

export default InputTextField;
