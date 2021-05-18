import { ProductType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to cart",
  REMOVE_ITEM: "[Cart] Remove item",
  INCREAMENT: "[Cart] Increament",
  DECREMENT: "[Cart]  Decrement",
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
const increaseQty = (qtyId: number) => {
  return {
    type: ActionTypes.INCREAMENT,
    qtyId,
  };
};
const decrementQty = (qtyId: number) => {
  return {
    type: ActionTypes.DECREMENT,
    qtyId,
  };
};
export default {
  ActionTypes,
  addToCart,
  removeItem,
  increaseQty,
  decrementQty,
};
