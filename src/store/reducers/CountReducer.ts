import { Action } from "redux";
import CartActions from "../actions/CartActions";

const counterReducer = (state = 1, action: Action) => {
  switch (action.type) {
    case CartActions.ActionTypes.INCRIMENT:
      return state + 1;
    case CartActions.ActionTypes.DECRIMENT:
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
