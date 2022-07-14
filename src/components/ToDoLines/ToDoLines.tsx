import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';
import { ListItemType } from '../AppWrapper';
import { Filter } from '../Enums';
import ToDoLine from '../ToDoLine/ToDoLine';

type ToDoLinesProps = {
  filter: string;
};

const ToDoLines = ({ filter }: ToDoLinesProps) => {
  const { List } = useContext(Context);

  const getFilter = (item: ListItemType) => {
    if (filter === Filter.All) {
      return item.checked || !item.checked;
    }
    if (filter === Filter.Active) {
      return !item.checked;
    }
    if (filter === Filter.Done) {
      return item.checked;
    }
  };

  return (
    <div>
      {List.filter((item) => getFilter(item)).map((item: ListItemType, id: number) => (
        <ToDoLine item={item} key={id} />
      ))}
    </div>
  );
};

export default ToDoLines;
