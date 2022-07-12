import * as React from 'react';

import { Context } from '../../ListContext';
import { ListItemType } from '../App/App';
import { Filter } from '../Enums';
import ToDoLine from '../ToDoLine/ToDoLine';

type PropsType = {
  setList: any;
  filter: string;
};

const ToDoLines = ({ setList, filter }: PropsType) => {
  const setFilter = (item: any) => {
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
      <Context.Consumer>
        {(Context) =>
          Context.List.filter((item) => setFilter(item)).map((item: ListItemType, id: number) => (
            <ToDoLine item={item} key={id} setList={setList} />
          ))
        }
      </Context.Consumer>
    </div>
  );
};

export default ToDoLines;
