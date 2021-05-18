import React, { Component } from "react";
import OrderDetailService from "../services/OrderDetailService";
import OrderService from "../services/OrderService";

class OrderItem extends Component {
  async componentDidMount() {
    try {
      const data = await OrderService.getOrder();
      const ord = await OrderDetailService.getOrderDetail();
      console.log(data);
      console.log(ord);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}
export default OrderItem;
