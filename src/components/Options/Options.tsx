import * as React from 'react';
import { useContext, useState } from 'react';

import { Context } from '../../ListContext';
import { Actions, Filter } from '../Enums';
import FilterButton from '../FilterButton/FilterButton';
import css from './Options.scss';

const Options = ({ filter, setFilter }: any) => {
  const [changeAllChecks, setChangeAllChecks] = useState<boolean>(true);
  const { List, changeList } = useContext(Context);
  const a = List.filter((item) => item.checked === true).length;

  const changeFilter = (name: Filter) => {
    setFilter(name);
  };

  const changeAllCheckbox = () => {
    changeList(Actions.CHECK_ALL, changeAllChecks);
    setChangeAllChecks(!changeAllChecks);
  };

  return (
    <div className={css.options}>
      {/* !! FALSE */}
      <button className={css.buttonCheckAll} onClick={changeAllCheckbox}>
        {'\u2713'}
      </button>
      <div className={css.filters}>
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          currentFilter={Filter.All}
          label={'All'}
        />
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          currentFilter={Filter.Active}
          label={'Active'}
        />
        <FilterButton
          filter={filter}
          changeFilter={changeFilter}
          currentFilter={Filter.Done}
          label={'Done'}
        />
      </div>
      <button
        className={css.buttonClearDone}
        onClick={() => changeList(Actions.CLEAR_DONE)}
        disabled={a === 0}
      >
        Clear done
      </button>
    </div>
  );
};

export default Options;
