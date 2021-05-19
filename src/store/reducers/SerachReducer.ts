import { Action } from "redux";

import SerachAction from "../actions/SearchAction";

type IAction = {
  serachField: any;
} & Action;

function SearchReducer(store = "", action: IAction) {
  switch (action.type) {
    case SerachAction.ActionTypes.SERACH_NAME:
      return action.serachField;
    default:
      return store;
  }
}

export default SearchReducer;
