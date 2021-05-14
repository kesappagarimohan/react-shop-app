import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types";
import formatter from "../utils/formatter";
import ImageWithFallback from "./ImageWithFallback";
import ProductPrice from "./ProductPrice";

type ProductProps = {
  pdata: ProductType;
  wishlist?: boolean;
  currencyCode: string;
  btnClick: () => void;
};
class Product extends React.Component<ProductProps> {
  renderStock(stock: number) {
    if (stock <= 0) {
      return (
        <button disabled className="btn btn-sm w-100 btn-danger text-uppercase">
          <i className="far fa-frown"></i>Out of stock
        </button>
      );
    }
    return (
      <button
        onClick={() => this.props.btnClick()}
        className="btn btn-sm w-100 btn-primary text-uppercase"
      >
        <i className="fab fa-opencart"></i> Add to Cart
      </button>
    );
  }
  render() {
    const { pdata, wishlist, currencyCode } = this.props;
    return (
      <div className="p-4 shadow-lg text-center">
        <Link
          to={`/productdetail/${pdata.productId}`}
          onClick={() => console.log("hi")}
        >
          <ImageWithFallback
            source={pdata.productImage}
            classes={"w-100 h-100 img-thumbnail"}
          />
        </Link>
        <h5 className={"mt-4"}>{formatter.titlecase(pdata.productName)}</h5>
        <ProductPrice
          price={pdata.productPrice}
          salePrice={pdata.productSalePrice}
          code={currencyCode}
        />
        {/* <button>Add to {wishlist ? "Wishlist" : "Cart"}</button> */}
        {this.renderStock(pdata.productStock)}
      </div>
    );
  }
}
export default Product;
