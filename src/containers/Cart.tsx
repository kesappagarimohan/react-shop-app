import { IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import Column from "../components/Column";
import ImageWithFallback from "../components/ImageWithFallback";
import Row from "../components/Row";

import { CartType, StoreType } from "../types";
import formatter from "../utils/formatter";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import Container from "../components/Container";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
type Props = {
  cart: CartType[];
} & RouteComponentProps;
class Cart extends Component<Props> {
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
                <div className="d-flex mb-5">
                  <IconButton onClick={() => console.log("increment")}>
                    <PlusOneIcon />
                  </IconButton>
                  <p></p>
                  <IconButton>
                    <ExposureNeg1Icon />
                  </IconButton>
                </div>
                <div className="re">
                  <IconButton>
                    <DeleteOutlineIcon />
                  </IconButton>
                </div>
              </div>
            </Column>
          ))}
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
export default connect(mapStateToProps)(Cart);
