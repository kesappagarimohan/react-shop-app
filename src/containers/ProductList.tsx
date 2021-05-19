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

import "../App.css";
import { AirbnbSlider, AirbnbThumbComponent } from "../components/Tooltip";
type Props = {
  selectedCurrency: string;
  showLoader: () => void;
  hideLoader: () => void;
  addItem: (product: ProductType) => void;
  search: string;
} & RouteComponentProps;
type State = {
  plist: ProductType[];
  totalPages: number;
  pageNumber: number;
  value: any;
  searchByTerm: string;
  sortByName: string;
  sortByPrice: string;
};
class ProductList extends React.PureComponent<Props, State> {
  state: State = {
    plist: [],
    totalPages: 0,
    pageNumber: 1,
    value: [0, 100000],
    searchByTerm: "",
    sortByName: "",
    sortByPrice: "",
  };
  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // this.getData();
    if (this.props.search !== prevProps.search) {
      this.getData();
      this.setState({
        searchByTerm: this.props.search,
      });
    }
    if (
      this.state.sortByName !== prevState.sortByName ||
      this.state.sortByPrice !== prevState.sortByPrice
    ) {
      this.getData();
    }
  }

  async getData() {
    try {
      this.props.showLoader();
      const { data } = await ProductService.getProducts(
        this.state.pageNumber,
        this.state.value[0],
        this.state.value[1],
        this.state.searchByTerm,
        this.state.sortByName,
        this.state.sortByPrice
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

  rangeSelector = (event: any, newValue: any) => {
    this.setState({ value: newValue });
  };

  sort = (e: any) => {
    switch (e.target.value) {
      case "PriceLowToHigh":
        return this.setState({
          sortByPrice: "ASC",
          sortByName: "productSalePrice",
        });
      case "PriceHighToLow":
        return this.setState({
          sortByPrice: "DESC",
          sortByName: "productSalePrice",
        });
      case "NameLowToHigh":
        return this.setState({
          sortByPrice: "ASC",
          sortByName: "productName",
        });
      case "NameHighToLow":
        return this.setState({
          sortByPrice: "DESC",
          sortByName: "productName",
        });
      default:
        return this.setState({
          sortByName: "",
          sortByPrice: "",
        });
    }
  };

  render() {
    return (
      <>
        <div className="w-100 mt-5 ">
          <Row>
            <Column size={4} classes={"offset-md-2 text-center"}>
              <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[20, 40]}
                max={100000}
                value={this.state.value}
                onChange={this.rangeSelector}
                valueLabelDisplay="auto"
              />
              <h5 className="text-success">
                {this.state.value[0]}-{this.state.value[1]}
              </h5>
            </Column>
            <Column size={4} classes={"offset-md-1"}>
              <select
                name="sort"
                id="sort"
                onChange={this.sort}
                className="form-select selectpicker"
                aria-label="Default select example"
              >
                <option value="" selected>
                  👈 SORT 👉
                </option>
                <option value="PriceLowToHigh">Price Low 👉 High</option>
                <option value="PriceHighToLow">Price High 👉 Low</option>
                <option value="NameLowToHigh">Name A 👉 Z</option>
                <option value="NameHighToLow">Name Z 👉 A</option>
              </select>
            </Column>
          </Row>
        </div>
        <LoadingWrapper>
          <Row>
            {this.state.plist.map((val) =>
              JSON.parse(val.productSalePrice) > this.state.value[0] &&
              JSON.parse(val.productSalePrice) < this.state.value[1] ? (
                <Column size={3} classes={"my-3"} key={val.productId}>
                  <Product
                    btnClick={() => this.addToCart(val)}
                    pdata={val}
                    key={val.productId}
                    currencyCode={this.props.selectedCurrency}
                  />
                </Column>
              ) : null
            )}
            <Column size={12} classes={"text-center"}>
              <Paginate
                totalPages={this.state.totalPages}
                currentPage={this.state.pageNumber}
                changePage={this.updateData}
              />
            </Column>
          </Row>
        </LoadingWrapper>
      </>
    );
  }
}
// connect(how to connect)(what to connect/component)
// store data can be accessed thru the props of the component
const mapStoreToProps = (store: StoreType) => {
  return {
    selectedCurrency: store.currency, // undefined => INR => USD
    search: store.search,
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
