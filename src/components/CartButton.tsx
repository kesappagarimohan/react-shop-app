import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StoreType } from "../types";

const CartButton = () => {
  const cartItems = useSelector<StoreType>((store) => store.cart.length);
  return (
    <Link to={"/cart"}>
      <span className="fa-stack has-badge" data-count={cartItems}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
      </span>
    </Link>
  );
};
export default CartButton;
