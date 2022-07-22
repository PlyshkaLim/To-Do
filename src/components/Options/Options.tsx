import * as React from 'react';
import { Dispatch, RefObject, SetStateAction, useState } from 'react';

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
  optionCheckAllRef: RefObject<HTMLButtonElement>;
  newref1: RefObject<HTMLDivElement>;
  newref2: RefObject<HTMLDivElement>;
  newref3: RefObject<HTMLDivElement>;
  optionClearDoneRef: RefObject<HTMLButtonElement>;
};

const Options = ({
  filter,
  setFilter,
  countChecked,
  checkAllChecksInLines,
  clearAllCompletedInLines,
  optionCheckAllRef,
  newref1,
  newref2,
  newref3,
  optionClearDoneRef,
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
      <div className={css.buttonCheckAll}>
        <button onClick={changeAllChecks} ref={optionCheckAllRef}>
          <CheckMarkIcon />
        </button>
      </div>
      <div className={css.filters}>
        <FilterButton
          newref1={newref1}
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.All}
          label={'All'}
        />
        <FilterButton
          newref1={newref2}
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.Active}
          label={'Active'}
        />
        <FilterButton
          newref1={newref3}
          filter={filter}
          changeFilter={changeFilter}
          changeFilterOn={Filter.Done}
          label={'Done'}
        />
      </div>
      <div className={css.buttonClearDone}>
        <button
          onClick={clearAllCompletedInLines}
          disabled={countChecked === 0}
          ref={optionClearDoneRef}
        >
          Clear done
        </button>
      </div>
    </div>
  );
};

export default Options;
