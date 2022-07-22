import cn from 'classnames';
import * as React from 'react';
import { RefObject } from 'react';

import { Filter } from '../Enums';
import css from './FilterButton.scss';

type FilterButtonProps = {
  filter: string;
  changeFilter: (filterName: Filter) => void;
  changeFilterOn: Filter;
  label: string;
  newref1: any;
};

const FilterButton = ({
  filter,
  changeFilter,
  changeFilterOn,
  label,
  newref1,
}: FilterButtonProps) => {
  return (
    <div className={css.filterButton}>
      <button
        className={cn({ [css.activeButton]: filter === changeFilterOn })}
        onClick={() => changeFilter(changeFilterOn)}
        ref={newref1}
      >
        {label}
      </button>
    </div>
  );
};

export default FilterButton;
