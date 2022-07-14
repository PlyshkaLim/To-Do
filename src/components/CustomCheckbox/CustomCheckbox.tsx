import * as React from 'react';

import css from './CustomCheckbox.scss';

type CustomCheckboxProps = {
  check: boolean;
  index: number;
  switchCheckInLine: (index: number) => void;
};

const CustomCheckbox = ({ check, index, switchCheckInLine }: CustomCheckboxProps) => {
  return (
    <div className={css.customCheckbox}>
      <label>
        <input
          className={css.checkInput}
          type={'checkbox'}
          checked={check}
          onChange={() => switchCheckInLine(index)}
        />
        <span className={css.checkBox}></span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
