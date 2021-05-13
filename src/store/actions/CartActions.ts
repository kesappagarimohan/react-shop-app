import { type } from "node:os";
import { ProductType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to cart",
  REMOVE_ITEM: "[Cart] Remove item",
  INCRIMENT: "[increment]",
  DECRIMENT: "DEC",
};

const addToCart = (product: ProductType) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    product,
  };
};
const removeItem = (id: number) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    id,
  };
};

const incrementItem = () => {
  return {
    type: ActionTypes.INCRIMENT,
  };
};
const decrimentItem = () => {
  return {
    type: ActionTypes.DECRIMENT,
  };
};
export default {
  ActionTypes,
  addToCart,
  removeItem,
  incrementItem,
  decrimentItem,
};
