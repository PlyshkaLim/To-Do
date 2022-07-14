import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';
import { Actions } from '../Enums';
import css from './CustomCheckbox.scss';

type CustomCheckboxProps = {
  check: boolean;
  index: number;
};

const CustomCheckbox = ({ check, index }: CustomCheckboxProps) => {
  const { changeList } = useContext(Context);
  return (
    <div className={css.customCheckbox}>
      <input
        type={'checkbox'}
        checked={check}
        onChange={() => changeList(Actions.CHANGE_CHECK, index)}
      />
    </div>
  );
};

export default CustomCheckbox;
