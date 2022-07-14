import * as React from 'react';
import { useContext } from 'react';

import { Context } from '../../ListContext';
import { ListItemType } from '../AppWrapper';
import { ActionTypeEnum, Filter } from '../Enums';
import ToDoLine from '../ToDoLine/ToDoLine';

type ToDoLinesProps = {
  filter: string;
};

const ToDoLines = ({ filter }: ToDoLinesProps) => {
  const { List, changeList } = useContext(Context);
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

  const changeTextInLine = (index: number, input: string) => {
    changeList({ actionType: ActionTypeEnum.CHANGE_TEXT, payload: [index, input] });
  };

  const deleteLine = (index: number) => {
    changeList({ actionType: ActionTypeEnum.DELETE_ITEM, payload: index });
  };

  const getIndex = (item: ListItemType) => {
    return List.indexOf(item);
  };

  const switchCheckInLine = (index: number) => {
    changeList({ actionType: ActionTypeEnum.CHANGE_CHECK, payload: index });
  };

  return (
    <div>
      {List.filter((item) => getFilter(item)).map((item: ListItemType, id: number) => (
        <ToDoLine
          item={item}
          key={id}
          changeTextInLine={changeTextInLine}
          deleteLine={deleteLine}
          index={getIndex(item)}
          switchCheckInLine={switchCheckInLine}
        />
      ))}
    </div>
  );
};

export default ToDoLines;
