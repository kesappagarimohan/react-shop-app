import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Column from "../components/Column";
import Container from "../components/Container";
import Row from "../components/Row";
import { CartType, StoreType } from "../types";
import Cart from "./Cart";

type Props = {
  cart: CartType[];
};
class Payment extends React.Component<Props> {
  paymentCheckout = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
    } catch (e) {}
  };
  render() {
    let total = 0;

    let discount = Math.floor(Math.random() * 100) + 1;
    return (
      <Container>
        <Row>
          <Column size={12}>
            <h2 className=" bg-primary text-light fw-bold fs-3 p-2 text-center   mb-3">
              Billing
            </h2>
            <Row>
              <Column size={8} classes={"bg-light"}>
                <form
                  className=" border border-5 p-4 shadow-lg rounded fw-bold"
                  noValidate
                  onSubmit={this.paymentCheckout}
                >
                  Name:
                  <input type="text" className="form-control" required />
                  Email Id:
                  <input
                    type="email"
                    className="form-control"
                    placeholder="abc@xyz.com"
                    required
                  />
                  Phone No.:
                  <input type="number" className="form-control" required />
                  Address Line 1:
                  <input type="text" className="form-control" required />
                  Address Line 2
                  <input type="text" className="form-control" required /> <br />
                  <div className="d-flex">
                    city:
                    <input type="text" className="form-control" required />{" "}
                    state:
                    <input type="text" className="form-control" required />
                    pin:
                    <input type="number" className="form-control" required />
                  </div>
                  <hr className="border border-5 bg-gradient" />
                  Name on Card
                  <input type="text" className="form-control" required />
                  Debit/Credit Card Number
                  <input type="number" className="form-control" required />
                  <br />
                  <div className="d-flex">
                    <label htmlFor="">Expiration:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="MM/YYYY"
                      required
                    />
                    <label htmlFor="">CVV:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="XXX"
                      required
                    />
                  </div>
                  <br />
                  <NavLink to={"/errorpage"}>
                    <button
                      id="btn"
                      className="btn btn-primary btn-sm active"
                      type="submit"
                    >
                      Continue to checkout
                    </button>
                  </NavLink>
                </form>
              </Column>
              <Column size={4}>
                {this.props.cart.map((val) => (
                  <p style={{ display: "none" }}>
                    {
                      (total =
                        total + parseInt(val.productSalePrice) * val.productQty)
                    }
                  </p>
                ))}
                <div className="d-flex justify-content-between align-items-center shadow shadow-lg">
                  <div className="">
                    <h5 className="m-3">TotalAmount</h5>
                    <h5 className="m-3">Disscount</h5>
                    <h5 className="m-3">Delivery Charges</h5>
                    <h5 className="m-3">Delivery price</h5>
                  </div>
                  <div className="">
                    <h5 className="m-3">{total}</h5>
                    <h5 className="m-3 text-success"> -{discount}</h5>
                    <h5 className="m-3 text-success">FREE</h5>
                    <h5 className="m-3">{total - discount}</h5>
                  </div>
                </div>
              </Column>
            </Row>
          </Column>
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
export default connect(mapStateToProps)(Payment);
