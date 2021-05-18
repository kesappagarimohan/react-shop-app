import { IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartType, StoreType } from "../types";
import formatter from "../utils/formatter";

import ImageWithFallback from "./ImageWithFallback";

import AddIcon from "@material-ui/icons/Add";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import Row from "./Row";
import Column from "./Column";
import OrderService from "../services/OrderService";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import TotalActions from "../store/actions/TotalAction";

type Props = {
  odata: CartType;
  btnClick: () => void;

  incClick: () => void;
  decClick: () => void;
  totalAmount: (totalAmount: any) => void;
};
type State = {
  productId: number;
  total: number;
  amount: number;
  qty: number;
};
class CartItem extends Component<Props, State> {
  state: State = {
    productId: Number(this.props.odata.productId),
    total: 0,
    amount: 0,
    //amount:0,
    qty: 0,

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

  render() {
    const { odata } = this.props;
    const { total } = this.state;

    return (
      <>
        <Column
          size={7}
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
              Stock: {odata.productStock - odata.productQty}
            </p>
            <p className=" text-success">Price: {odata.productPrice}</p>
            <p>
              Total:
              {
                (this.state.amount =
                  Number(odata.productSalePrice) * odata.productQty)
              }
            </p>
          </div>

          <div className="d-flex align-items-center flex-column">
            <div className="d-flex mb-5">
              <IconButton onClick={() => this.props.incClick()}>
                <AddIcon />
              </IconButton>
              <p className="mt-4">{(this.state.qty = odata.productQty)}</p>

              <IconButton onClick={() => this.props.decClick()}>
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
      </>
    );
  }
}
const mapStateToProps = (state: StoreType) => {
  return {
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    totalAmount: (totalAmount: any) =>
      dispatch(TotalActions.totalAmount(totalAmount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
