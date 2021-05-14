import { Action } from "redux";
import CartActions from "../actions/CartActions";
import { ProductType } from "../../types";
import ProductActions from "../actions/ProductDetailAction";

type IAction = {
  product: ProductType[];
  id: number;
} & Action;

function ProductDetailReducer(store: ProductType[] = [], action: IAction) {
  switch (action.type) {
    case ProductActions.ActionTypes.ADD_TO_PRODUCTDETAIL:
      return [...store, ...action.product];
    default:
      return store;
  }
}

export default ProductDetailReducer;
