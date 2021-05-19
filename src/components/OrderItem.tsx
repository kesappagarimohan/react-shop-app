import React, { Component } from "react";
import { Link } from "react-router-dom";
import Order from "../containers/Order";
import OrderDetailService from "../services/OrderDetailService";
import OrderService from "../services/OrderService";
import formatter from "../utils/formatter";
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";
import Row from "./Row";
type State = {
  order: any;
  amount: any;
};
class OrderItem extends Component<{}, State> {
  state: State = {
    order: [],
    amount: 0,
  };
  async componentDidMount() {
    try {
      const { data } = await OrderService.getOrder();

      console.log(data);
      this.setState({
        order: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let Total = 0;
    let discount = Math.floor(Math.random() * 100) + 1;
    return (
      <Row>
        {this.state.order.map((val: any) => (
          <Column
            size={7}
            classes={
              "d-flex align-items-center justify-content-around shadow-lg border border-2 m-3 m"
            }
          >
            <Link to={`/productdetail/${val.productId.productId}`}>
              <ImageWithFallback
                source={val.productId.productImage}
                classes={"w-75 h-75 img-thumbnail rounded float-start"}
              />
            </Link>
            <div className="d-flex align-items-start flex-column">
              <h5 className="mb-3 text-danger">OrderStatus{val.orderStatus}</h5>
              <h5 className="mb-3">
                {formatter.titlecase(val.productId.productName)}
              </h5>
              <p className="text-dark mb-3 ">SalePrice: {val.orderAmount}</p>
              <p className=" text-danger mb-3">qty: {val.orderQty}</p>

              <p>
                Total:
                {(this.state.amount = Number(val.orderAmount) * val.orderQty)}
              </p>
              <p style={{ display: "none" }}>
                {(Total = Total + Number(val.orderAmount) * val.orderQty)}
              </p>
            </div>
          </Column>
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
    );
  }
}
export default OrderItem;
