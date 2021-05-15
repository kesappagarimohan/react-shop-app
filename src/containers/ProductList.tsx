import React from "react";
import Column from "../components/Column";
import Product from "../components/Product";
import Row from "../components/Row";
import ProductService from "../services/ProductService";
import { ProductType, StoreType } from "../types";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CartActions from "../store/actions/CartActions";
import Paginate from "../components/Paginate";
import LoadingWrapper from "../components/LoadingWrapper";
import LoadingActions from "../store/actions/LoadingActions";
import {
  parseIsolatedEntityName,
  validateLocaleAndSetLanguage,
} from "typescript";
import { Slider } from "@material-ui/core";

type Props = {
  serach: any;
  selectedCurrency: string;
  showLoader: () => void;
  hideLoader: () => void;
  addItem: (product: ProductType) => void;
} & RouteComponentProps;
type State = {
  plist: ProductType[];
  totalPages: number;
  pageNumber: number;
  value: any;
  serachByTerm: string;
};
class ProductList extends React.PureComponent<Props, State> {
  state: State = {
    plist: [],
    totalPages: 0,
    pageNumber: 1,
    value: [0, 100000],
    serachByTerm: "",
  };

  componentDidMount() {
    this.getData();
    console.log("intiall", this.state.serachByTerm);
    this.setState({
      serachByTerm: this.props.serach,
    });
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.serach != prevProps.serach) {
      this.getData();
      this.setState({
        serachByTerm: this.props.serach,
      });
    }
  }
  async getData() {
    try {
      this.props.showLoader();
      const { data } = await ProductService.getProducts(
        this.state.pageNumber,
        this.state.serachByTerm
      );
      this.setState({
        plist: data.data,
        totalPages: data.totalPages,
        pageNumber: data.currentPage,
      });
      this.props.hideLoader();
    } catch (e) {
      console.log("error", e);
      this.props.hideLoader();
    }
  }
  addToCart(product: ProductType) {
    this.props.addItem(product); // add to cart logic
    //this.props.history.push("/cart"); // redirect to cart page
  }

  updateData = (page: number) =>
    this.setState({ pageNumber: page }, () => this.getData());

  render() {
    const serach = this.props.serach;
    console.log("finall", this.props.serach);
    return (
      <LoadingWrapper>
        <Row>
          {this.state.plist.map((val) => (
            <Column size={3} classes={"my-3"}>
              <Product
                btnClick={() => this.addToCart(val)}
                pdata={val}
                key={val.productId}
                currencyCode={this.props.selectedCurrency}
              />
            </Column>
          ))}
          <Column size={12} classes={"text-center"}>
            <Paginate
              totalPages={this.state.totalPages}
              currentPage={this.state.pageNumber}
              changePage={this.updateData}
            />
          </Column>
        </Row>
      </LoadingWrapper>
    );
  }
}
// connect(how to connect)(what to connect/component)
// store data can be accessed thru the props of the component
const mapStoreToProps = (store: StoreType) => {
  return {
    selectedCurrency: store.currency,
    serach: store.search, // undefined => INR => USD
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideLoader: () => dispatch(LoadingActions.hideLoader()),
    showLoader: () => dispatch(LoadingActions.showLoader()),
    addItem: (p: ProductType) => dispatch(CartActions.addToCart(p)),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(ProductList);
