import cn from 'classnames';
import * as React from 'react';

import css from './FilterButton.scss';

const FilterButton = ({ filter, changeFilter, currentFilter, label }: any) => {
  return (
    <div className={css.filterButton}>
      <button
        className={cn({ [css.buttonActive]: filter === currentFilter })}
        onClick={() => changeFilter(currentFilter)}
      >
        {label}
      </button>
    </div>
  );
};

export default FilterButton;
