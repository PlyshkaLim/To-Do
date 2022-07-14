import { v4 as uuidv4 } from 'uuid';

import { ListItemType } from './components/AppWrapper';

export const array: ListItemType[] = [
  {
    id: uuidv4(),
    text: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    checked: false,
  },
  { id: uuidv4(), text: 'Помыть кошку', checked: true },
  { id: uuidv4(), text: 'Погладить кошку', checked: false },
];
