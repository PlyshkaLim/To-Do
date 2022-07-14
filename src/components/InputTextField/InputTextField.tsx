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
      <input
        className={css.inputTextField}
        type={'text'}
        placeholder={placeholder}
        value={inputState}
        onChange={changeInput}
        onKeyDown={onEnterKeyDown}
      />
    </div>
  );
};

export default InputTextField;
