import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import Column from "../components/Column";
import ErrorBoundary from "../components/ErrorBoundary";
import ImageWithFallback from "../components/ImageWithFallback";
import Row from "../components/Row";
import ProductService from "../services/ProductService";
import { CartType, ProductType, StoreType } from "../types";

type Props = {
  cart: CartType[];
  count: number;
} & RouteComponentProps;
type State = {
  data: ProductType[];
};
class ProductDetail extends React.Component<Props, State, RouteComponentProps> {
  state: State = {
    data: [],
  };
  async componentDidMount(): Promise<void> {
    try {
      const params: any = this.props.match.params;
      const { data } = await ProductService.getProductById(params.id);

      console.log("success", data);
      this.setState({
        data: [data],
      });
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <Row>
          {this.state.data.map((val) => (
            <Column
              size={9}
              classes="offset-md-1 d-flex text-center align-items-center  shadow-lg border border-3  text-dark bg-gradient"
            >
              <ImageWithFallback
                source={val.productImage}
                classes={"img-thumbnail  w-50 h-75"}
              />
              <div className="ms-4">
                <h4 className="mb-5"> ProductName : {val.productName}</h4>
                <h4 className="bg-highlight mt-2 mb-5">
                  ProductPrice : {val.productPrice}
                </h4>
                <h4 className="mt-2 mb-5">
                  ProductSalePrice : {val.productSalePrice}
                </h4>
                <h4 className="mt-2">ProductStock : {val.productStock}</h4>
              </div>
            </Column>
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
