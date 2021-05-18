import { StoreType } from "./../../types";
import { Action } from "redux";
import { UserSessionType } from "../../types";
import UserActions from "../actions/UserActions";

interface IAction extends Action {
  user?: object;
  error?: string;
  store?: StoreType;
}
const initialState: UserSessionType = { user: null, error: null, store: null };
function userReducer(
  storeData: UserSessionType = initialState,
  action: IAction
): any {
  switch (action.type) {
    case UserActions.ActionTypes.SIGN_IN_SUCCESS:
      return { error: null, user: action.user };
    case UserActions.ActionTypes.SIGN_IN_ERROR:
      return { user: null, error: action.error };
    case UserActions.ActionTypes.SIGN_OUT:
      return initialState;
    default:
      return storeData;
  }
}
export default userReducer;
