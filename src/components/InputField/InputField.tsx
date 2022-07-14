import * as React from 'react';
import { ChangeEvent } from 'react';

import css from '../App/App.scss';

type InputFieldProps = {
  inputState: string;
  changeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterKeyDown: any;
};

const InputField = ({ inputState, changeInput, onEnterKeyDown }: InputFieldProps) => {
  return (
    <div>
      <input
        className={css.inputField}
        type={'text'}
        placeholder={'What need to do...'}
        value={inputState}
        onChange={changeInput}
        onKeyDown={onEnterKeyDown}
      />
    </div>
  );
};

export default InputField;
