import cn from 'classnames';
import * as React from 'react';

import { Filter } from '../Enums';
import css from './FilterButton.scss';

type FilterButtonProps = {
  filter: string;
  changeFilter: (filterName: Filter) => void;
  changeFilterOn: Filter;
  label: string;
};

const FilterButton = ({ filter, changeFilter, changeFilterOn, label }: FilterButtonProps) => {
  return (
    <div className={css.filterButton}>
      <button
        className={cn({ [css.activeButton]: filter === changeFilterOn })}
        onClick={() => changeFilter(changeFilterOn)}
      >
        {label}
      </button>
    </div>
  );
};

export default FilterButton;
