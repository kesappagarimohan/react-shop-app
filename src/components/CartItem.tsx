import { IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartType } from "../types";
import formatter from "../utils/formatter";

import ImageWithFallback from "./ImageWithFallback";

import AddIcon from "@material-ui/icons/Add";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import Row from "./Row";
import Column from "./Column";
import OrderService from "../services/OrderService";

type Props = {
  odata: CartType;
  btnClick: () => void;
  qty: number;
  stock: number;
  sale: any;
};
type State = {
  qty: number;
  stock: number;
  amount: number;
  productId: number;
  total: number;
};
class CartItem extends Component<Props, State> {
  state: State = {
    qty: this.props.qty,
    stock: this.props.stock,
    amount: Number(this.props.odata.productSalePrice),
    productId: Number(this.props.odata.productId),
    total: 0,

    //amount: this.props.amount,
  };

  async componentDidMount() {
    try {
      const { amount, productId, qty } = this.state;
      const order = await OrderService.createOrder(amount, productId);
      this.setState({
        amount,
        productId,
      });
      console.log(order);
      console.log(qty);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.amount !== prevState.amount) {
      this.qty();
    }
  }
  incrementQty = () => {
    if (this.state.stock > this.state.qty) {
      this.setState({
        qty: this.state.qty + 1,
      });
      console.log("inc", this.state.qty);
    }
  };
  decrimentQty = () => {
    if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1,
      });
    } else {
      this.setState({
        qty: this.state.qty,
      });
    }
  };
  qty() {
    this.state.total = Number(this.state.qty * this.state.amount);
  }
  render() {
    const { odata } = this.props;
    return (
      <>
        <Column
          size={6}
          classes={
            "d-flex align-items-center justify-content-center shadow-lg border border-2 mb-3"
          }
        >
          <Link to={`/productdetail/${odata.productId}`}>
            <ImageWithFallback
              source={odata.productImage}
              classes={"w-75 h-75 img-thumbnail rounded float-start"}
            />
          </Link>
          <div className="d-flex align-items-start flex-column">
            <h5 className={""}>{formatter.titlecase(odata.productName)}</h5>
            <p className="text-dark ">SalePrice: {odata.productSalePrice}</p>
            <p className=" text-danger">
              Stock: {odata.productStock - this.state.qty}
            </p>
            <p className=" text-success">Price: {odata.productPrice}</p>
            <p>Total:{this.state.amount * this.state.qty}</p>
          </div>

          <div className="d-flex align-items-center flex-column">
            <div className="d-flex mb-5">
              <IconButton onClick={this.incrementQty}>
                <AddIcon />
              </IconButton>
              <p className="mt-4">{this.state.qty}</p>

              <IconButton onClick={this.decrimentQty}>
                <RemoveIcon />
              </IconButton>
            </div>
            <div className="v">
              <IconButton onClick={() => this.props.btnClick()}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </div>
        </Column>
        <Column size={4}></Column>
      </>
    );
  }
}
export default CartItem;
