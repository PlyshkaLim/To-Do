import * as React from 'react';

import { Actions } from './components/Enums';

export const Context = React.createContext({
  List: [],
  changeList: (actionType: Actions, payload?: any) => {},
});
