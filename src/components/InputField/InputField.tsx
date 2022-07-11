import * as React from 'react';

import css from '../App/App.scss';

type PropsType = {
  inputState: string;
  changeInput: any;
  enterKey: any;
};

const InputField = ({ inputState, changeInput, enterKey }: PropsType) => {
  return (
    <div>
      <input
        className={css.inputField}
        type={'text'}
        placeholder={'What need to do...'}
        value={inputState}
        onChange={changeInput}
        onKeyDown={enterKey}
      />
    </div>
  );
};

export default InputField;
