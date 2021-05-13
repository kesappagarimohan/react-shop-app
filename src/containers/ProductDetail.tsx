import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import Column from "../components/Column";
import ErrorBoundary from "../components/ErrorBoundary";
import Row from "../components/Row";
import ProductService from "../services/ProductService";
import { CartType, StoreType } from "../types";

type Props = {
  cart: CartType[];
  count: number;
} & RouteComponentProps;
class ProductDetail extends React.Component<Props, RouteComponentProps> {
  async componentDidMount() {
    try {
      const params: any = this.props.match.params;
      const { data } = await ProductService.getProductById(params.id);
      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <Row>
          <Column size={12}>
            <h1>Product Detail</h1>
          </Column>
        </Row>
        <Row>
          {this.props.cart.map((item) => (
            <Column size={9}></Column>
          ))}
        </Row>
      </ErrorBoundary>
    );
  }
}
const mapStateToProps = (state: StoreType) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(ProductDetail);
