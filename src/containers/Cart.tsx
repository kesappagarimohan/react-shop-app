import { IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, RouteComponentProps } from "react-router-dom";
import Column from "../components/Column";
import ImageWithFallback from "../components/ImageWithFallback";
import Row from "../components/Row";

import { CartType, StoreType } from "../types";
import formatter from "../utils/formatter";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import Container from "../components/Container";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import { Dispatch } from "redux";
import CartActions from "../store/actions/CartActions";
import Button from "../components/Button";
import { type } from "node:os";
type Props = {
  cart: CartType[];
  count: number;
  removeItem: (id: number) => void;
  incrementItem: () => void;

  // btnClick: () => void;
} & RouteComponentProps;
type State = {
  qty: number;
};
class Cart extends Component<Props, State> {
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
            <Column
              size={7}
              classes={
                "d-flex justify-content-between align-items-center mt-1 shadow-lg ms-4 h-75 w-50 mb-3"
              }
            >
              <Link to={`/productdetail/${val.productId}`}>
                <ImageWithFallback
                  source={val.productImage}
                  classes={"w-75 h-75 img-thumbnail rounded float-start"}
                />
              </Link>
              <div className="d-flex align-items-start flex-column">
                <h5 className={"mt-4"}>
                  {formatter.titlecase(val.productName)}
                </h5>
                <p className="mt-2 text-dark ">
                  SalePrice: {val.productSalePrice}
                </p>
                <p className="mt-2 text-danger">Stock: {val.productStock}</p>
                <p className="mt-2 text-success">Price: {val.productPrice}</p>
              </div>
              <div className="btn d-flex align-items-start flex-column">
                <Button
                  btnClick={() => this.props.removeItem(val.productId)}
                  btnInc={() => this.props.incrementItem()}
                  qty={val.productQty}
                  stock={val.productStock}
                />
              </div>
            </Column>
          ))}
          <Column size={4}></Column>
        </Row>

        <Row>
          <Column size={12}>
            <NavLink to={"/payment"}>
              <button
                onClick={() => console.log("checkout")}
                className="bg-warning border border-3 rounded-3  fw-bold  fs-3 text-light text-center p-2 w-100 align-items-start shadow-lg float-end"
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
