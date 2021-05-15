import { Action } from "redux";
import QtyActions from "../actions/QtyAction";

type IAction = {
  count: any;
} & Action;

function QtyReducer(store = 1, action: IAction) {
  switch (action.type) {
    case QtyActions.ActionTypes.QTY_COUNT:
      return action.count;
    default:
      return store;
  }
}

export default QtyReducer;
