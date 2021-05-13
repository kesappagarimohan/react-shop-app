import { combineReducers } from "redux";
import { StoreType } from "../../types";
import cartReducer from "./CartReducer";
import counterReducer from "./CountReducer";
import currencyReducer from "./CurrencyReducer";
import loadingReducer from "./LoadingReducer";
import SearchReducer from "./SerachReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers<StoreType>({
  // data: reducer
  currency: currencyReducer,
  cart: cartReducer,
  userSession: userReducer,
  loading: loadingReducer,
  search: SearchReducer,
  count: counterReducer,
});

export default rootReducer;
