import * as React from 'react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { Context } from '../../ListContext';
import { Actions, Filter } from '../Enums';
import FilterButton from '../FilterButton/FilterButton';
import CheckMarkIcon from '../Icons/CheckMarkIcon';
import css from './Options.scss';

type OptionsProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Options = ({ filter, setFilter }: OptionsProps) => {
  const { List, changeList } = useContext(Context);
  const countChecked = List.filter((item) => item.checked === true).length;
  const [changeOn, setChangeOn] = useState<boolean>(true);

  const changeFilter = (filterName: Filter) => {
    setFilter(filterName);
  };

  const changeAllChecks = () => {
    changeList(Actions.CHECK_ALL, changeOn);
    setChangeOn(!changeOn);
  };

  return (
    <div className={css.options}>
      <button className={css.buttonCheckAll} onClick={changeAllChecks}>
        <CheckMarkIcon />
      </button>
      <div className={css.filters}>
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.All}
          label={'All'}
        />
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.Active}
          label={'Active'}
        />
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.Done}
          label={'Done'}
        />
      </div>
      <button
        className={css.buttonClearDone}
        onClick={() => changeList(Actions.CLEAR_DONE)}
        disabled={countChecked === 0}
      >
        Clear done
      </button>
    </div>
  );
};

export default Options;
