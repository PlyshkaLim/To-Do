import * as React from 'react';

import { ListItemType } from './components/App/App';

export const Context = React.createContext({
  List: [],
  changeList: (value: ListItemType[]) => {},
});
