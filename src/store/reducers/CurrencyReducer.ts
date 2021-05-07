import { Action } from "redux";
import CurrencyActions from "../actions/CurrencyActions";

// reducer(store_data,action)
// state : initialise
type IAction = {
  code: string;
} & Action;
function currencyReducer(store = "INR", action: IAction) {
  switch (action.type) {
    case CurrencyActions.ActionTypes.UPDATE_CURRENCY:
      return action.code;
    default:
      //return current_store_data;
      return store;
  }
}
export default currencyReducer;
