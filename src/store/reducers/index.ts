import { combineReducers } from "redux";
import { StoreType } from "../../types";
import cartReducer from "./CartReducer";
import counterReducer from "./CountReducer";
import currencyReducer from "./CurrencyReducer";
import loadingReducer from "./LoadingReducer";
import ProductDetailReducer from "./ProductDetailReducer";
import QtyReducer from "./QtyReducer";
import SearchReducer from "./SerachReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers<StoreType>({
  // data: reducer
  productDetail: ProductDetailReducer,
  currency: currencyReducer,
  cart: cartReducer,
  userSession: userReducer,
  loading: loadingReducer,
  search: SearchReducer,
  count: counterReducer,
  qty: QtyReducer,
});

export default rootReducer;
