import * as React from 'react';

import { ListItemType } from './components/AppWrapper';
import { ActionTypeEnum } from './components/Enums';

interface IAction {
  actionType: ActionTypeEnum;
}

interface CheckAllAction extends IAction {
  actionType: ActionTypeEnum.CHECK_ALL;
  payload: boolean;
}

interface AddItemAction extends IAction {
  actionType: ActionTypeEnum.ADD_ITEM;
}

interface DeleteItemAction extends IAction {
  actionType: ActionTypeEnum.DELETE_ITEM;
  payload: number;
}

interface ChangeCheckAction extends IAction {
  actionType: ActionTypeEnum.CHANGE_CHECK;
  payload: number;
}

interface ClearCompletedAction extends IAction {
  actionType: ActionTypeEnum.CLEAR_COMPLETED;
}

interface ChangeTextAction extends IAction {
  actionType: ActionTypeEnum.CHANGE_TEXT;
  payload: [number, string];
}

export type ActionType =
  | CheckAllAction
  | AddItemAction
  | DeleteItemAction
  | ChangeCheckAction
  | ClearCompletedAction
  | ChangeTextAction;

export type myContext = {
  List: ListItemType[];
  changeList: (action: ActionType) => void;
};

export const Context = React.createContext<myContext>({
  List: [] as ListItemType[],
  changeList: (action: ActionType) => {
    throw new Error('Not impliment method!');
  },
});
