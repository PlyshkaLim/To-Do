import * as React from 'react';

import { Context } from '../../ListContext';
import { ListItemType } from '../App/App';
import ToDoLine from '../ToDoLine/ToDoLine';

type PropsType = {
  setList: any;
};

const ToDoLines = ({ setList }: PropsType) => {
  return (
    <div>
      <Context.Consumer>
        {(Context) =>
          Context.List.map((item: ListItemType, id: number) => (
            <ToDoLine item={item} key={id} setList={setList} />
          ))
        }
      </Context.Consumer>
    </div>
  );
};

export default ToDoLines;
