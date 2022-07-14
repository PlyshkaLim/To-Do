import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';

import { Filter } from '../Enums';
import FilterButton from '../FilterButton/FilterButton';
import CheckMarkIcon from '../Icons/CheckMarkIcon';
import css from './Options.scss';

type OptionsProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  countChecked: number;
  checkAllChecksInLines: (changeOn: boolean) => void;
  clearAllCompletedInLines: () => void;
};

const Options = ({
  filter,
  setFilter,
  countChecked,
  checkAllChecksInLines,
  clearAllCompletedInLines,
}: OptionsProps) => {
  const [changeOn, setChangeOn] = useState<boolean>(true);

  const changeFilter = (filterName: Filter) => {
    setFilter(filterName);
  };

  const changeAllChecks = () => {
    checkAllChecksInLines(changeOn);
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
        onClick={() => clearAllCompletedInLines}
        disabled={countChecked === 0}
      >
        Clear done
      </button>
    </div>
  );
};

export default Options;
