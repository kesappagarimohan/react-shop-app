import { combineReducers } from "redux";
import { StoreType } from "../../types";
import cartReducer from "./CartReducer";

import currencyReducer from "./CurrencyReducer";
import loadingReducer from "./LoadingReducer";
import ProductDetailReducer from "./ProductDetailReducer";

import SearchReducer from "./SerachReducer";
import TotalReducer from "./TotalAmountReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers<StoreType>({
  productDetail: ProductDetailReducer,
  currency: currencyReducer,
  cart: cartReducer,
  userSession: userReducer,
  loading: loadingReducer,
  search: SearchReducer,
  total: TotalReducer,
});

export default rootReducer;
