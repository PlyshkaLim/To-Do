import * as React from 'react';
import { ListType } from './components/App/App';

export const Context = React.createContext({
  List: [],
  changeList: (value: ListType[]) => {},
});
