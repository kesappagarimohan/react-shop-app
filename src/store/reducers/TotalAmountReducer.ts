import { Action } from "redux";
import TotalActions from "../actions/TotalAction";

type IAction = {
  totalAmount: any;
} & Action;

function TotalReducer(store = 0, action: IAction) {
  switch (action.type) {
    case TotalActions.ActionTypes.TOTAL_AMOUNT:
      return action.totalAmount;
    default:
      return store;
  }
}

export default TotalReducer;
