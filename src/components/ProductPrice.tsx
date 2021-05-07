import React from "react";
import formatter from "../utils/formatter";

type Props = {
  price: string;
  salePrice: string;
  code?: string;
};

const ProductPrice: React.FC<Props> = ({ price, salePrice, code }) => {
  return (
    <div className="d-flex align-items-center justify-content-center my-2">
      <span>{formatter.price(salePrice, code)}</span>
      {salePrice !== price ? (
        <>
          <small className="text-muted mx-2">
            <del>{formatter.price(price, code)}</del>
          </small>
          <small className="badge rounded-pill bg-success">
            {formatter.discount(salePrice, price)}
          </small>
        </>
      ) : (
        <small className="badge rounded-pill bg-warning mx-2">
          <i className="fas fa-award"></i> New
        </small>
      )}
    </div>
  );
};
export default ProductPrice;
