import React, { PureComponent } from "react";
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
  increamentQty: (id: number) => void;
  decrementQty: (id: number) => void;

  // btnClick: () => void;
} & RouteComponentProps;
type State = {
  qty: number;
  amount: number;
  productId: number;
  sDate: string;
  orderId: number;
};
class Cart extends PureComponent<Props, State> {
  state: State = {
    amount: 0,
    qty: 0,
    productId: 0,
    orderId: 0,
    sDate: "2022/11/12",
  };
  async componentDidMount() {}
  async addOrder() {
    try {
      const { amount, productId, qty, sDate, orderId } = this.state;
      const order = await OrderService.createOrder(
        amount,
        productId,
        sDate,
        qty
      );

      this.setState({
        amount,
        productId,
        sDate,
        qty,
      });
      console.log(order);
      console.log(qty);
    } catch (error) {
      console.log(error);
    }
  }

  // remove(id: number): void {
  //   this.props.removeItem(id); // add to cart logic

  //   //this.props.history.push("/cart"); // redirect to cart page
  // }

  removeFormCart(id: number) {
    this.props.removeItem(id); // add to cart logic
    //this.props.history.push("/cart"); // redirect to cart page
  }
  render() {
    let Total = 0;
    let discount = Math.floor(Math.random() * 100) + 1;
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
          {this.props.cart.map((val: any, index: number) => (
            <>
              <CartItem
                odata={val}
                btnClick={() => this.props.removeItem(val.productId)}
                incClick={() => this.props.increamentQty(val.productId)}
                decClick={() => this.props.decrementQty(val.productId)}
              />
              <p style={{ display: "none" }}>
                {(Total = Total + val.productSalePrice * val.productQty)}
                {
                  (this.state.amount =
                    Number(val.productSalePrice) * val.productQty)
                }
                {(this.state.productId = val.productId)}
                {(this.state.qty = val.productQty)}
              </p>
            </>
          ))}
          <Column size={4} classes={"offset-md-1 position-fixed top-40 end-0"}>
            <div className="d-flex justify-content-between align-items-center shadow shadow-lg">
              <div className="">
                <h5 className="m-3">Price</h5>
                <h5 className="m-3">Disscount</h5>
                <h5 className="m-3 border-bottom">Delivery Charges</h5>

                <h5 className="m-3">TotalAmount</h5>
              </div>
              <div className="">
                <h5 className="m-3">{Total}</h5>
                <h5 className="m-3 text-success"> -{discount}</h5>
                <h5 className="m-3 text-success border-bottom">FREE</h5>

                <h5 className="m-3 ">{Total - discount}</h5>
              </div>
            </div>
          </Column>
        </Row>

        <Row>
          <Column size={12}>
            <NavLink to={"/checkout"}>
              <button
                onClick={() => {
                  this.addOrder();
                }}
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
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeItem: (id: number) => dispatch(CartActions.removeItem(id)),
    increamentQty: (id: number) => dispatch(CartActions.increaseQty(id)),
    decrementQty: (id: number) => dispatch(CartActions.decrementQty(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
