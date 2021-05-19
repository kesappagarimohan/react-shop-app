import { CartType, ProductType } from "../../types";
import { Action } from "redux";
import CartActions from "../actions/CartActions";
type IAction = {
  product: ProductType;
  id: number;
  qtyId: number;
} & Action;
// state : initialise, immutable
function cartReducer(store: CartType[] = [], action: IAction) {
  switch (action.type) {
    case CartActions.ActionTypes.ADD_TO_CART:
      return [...store, { ...action.product, productQty: 1 }];

    case CartActions.ActionTypes.REMOVE_ITEM:
      return store.filter((product) => product.productId !== action.id);

    case CartActions.ActionTypes.INCREAMENT:
      return store.map((product) => {
        if (product.productId === action.qtyId) {
          product.productQty++;
        }
        return product;
      });

    case CartActions.ActionTypes.DECREMENT:
      return store.map((product) => {
        if (product.productId === action.qtyId) {
          product.productQty--;
        }
        return product;
      });
    case CartActions.ActionTypes.RESECART:
      return [];
    default:
      return store;
  }
}
export default cartReducer;
