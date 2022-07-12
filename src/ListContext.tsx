import * as React from 'react';

export const Context = React.createContext({
  List: [],
  changeList: (actionType: any, payload?: any) => {},
});
