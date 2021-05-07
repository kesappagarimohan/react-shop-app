import { Action } from "redux";
import LoadingActions from "../actions/LoadingActions";
export default function loadingReducer(store: boolean = false, action: Action) {
  switch (action.type) {
    case LoadingActions.ActionTypes.HIDE_LOADER:
      return false;
    case LoadingActions.ActionTypes.SHOW_LOADER:
      return true;
    default:
      return store;
  }
}
