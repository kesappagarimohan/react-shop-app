import React, { Component, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps } from "react-router-dom";
import Column from "../components/Column";

import Row from "../components/Row";

import { CartType, StoreType } from "../types";

import Container from "../components/Container";

import { Dispatch } from "redux";
import CartActions from "../store/actions/CartActions";

import CartItem from "../components/CartItem";
import OrderService from "../services/OrderService";
type Props = {
  cart: CartType[];
  count: number;
  removeItem: (id: number) => void;
  incrementItem: () => void;

  // btnClick: () => void;
} & RouteComponentProps;
type State = {
  qty: number;
  amount: number;
};
class Cart extends Component<Props, State> {
  state: State = {
    amount: 0,
    qty: 1,
  };

  // remove(id: number): void {
  //   this.props.removeItem(id); // add to cart logic

  //   //this.props.history.push("/cart"); // redirect to cart page
  // }
  increment() {}

  removeFormCart(id: number) {
    this.props.removeItem(id); // add to cart logic
    //this.props.history.push("/cart"); // redirect to cart page
  }
  render() {
    return (
      <Container>
        <Row>
          <Column size={12}>
            <div className="jumbotron text-center">
              <h1 className="display-5 fw-bold">Cart Item</h1>
            </div>
          </Column>
        </Row>
        <Row>
          {this.props.cart.map((val) => (
            <CartItem
              odata={val}
              btnClick={() => this.props.removeItem(val.productId)}
              qty={val.productQty}
              stock={val.productStock}
              sale={val.productSalePrice}
            />
          ))}
          <Column size={4}></Column>
        </Row>

        <Row>
          <Column size={12}>
            <NavLink to={"/payment"}>
              <button
                onClick={() => console.log("checkout")}
                className="bg-primary border border-3 rounded-3  fw-bold  fs-3 text-light text-center p-2 w-100 align-items-start shadow-lg float-end"
              >
                Check Out
              </button>
            </NavLink>
          </Column>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreType) => {
  return {
    cart: state.cart,
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // incrementItem: () => dispatch(CartActions.incrementItem()),
    // decrementItem: () => dispatch(CartActions.decrimentItem()),
    removeItem: (id: number) => dispatch(CartActions.removeItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
