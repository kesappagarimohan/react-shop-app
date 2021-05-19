import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import Column from "../components/Column";
import { CartType, StoreType } from "../types";

import Container from "../components/Container";
import Row from "../components/Row";
import UserService from "../services/UserService";

import CartActions from "../store/actions/CartActions";
import PaymentService from "../services/PaymentService";

type Props = {
  cartItems: CartType[];
  deleteCartData: (id: number) => void;
  increamentQty: (id: number) => void;
  decrementQty: (id: number) => void;
  resetCart: () => void;
} & RouteComponentProps;
type State = {
  cardName: any;
  cardNo: any;
  cvv: any;
  userList: any;
  addressData: any;
  Amount: number;
};

class Checkout extends React.Component<Props, State> {
  state: State = {
    cardName: "",
    cardNo: 0,
    cvv: 0,
    Amount: 0,
    userList: [],
    addressData: [],
  };

  async componentDidMount() {
    try {
      const { data } = await UserService.profile();
      console.log("userData", data);
      this.setState({
        userList: data,
        addressData: data.address,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let total = 0;
    console.log();
    const submit = async (e: any) => {
      e.preventDefault();
      this.props.resetCart();
      alert("Payment Done Successfully ");
      const { Amount, cardName, cardNo, cvv } = this.state;
      const payment = await PaymentService.paymentPost(
        cardName,
        cardNo,
        Amount,
        cvv
      );

      this.setState({
        Amount: this.state.Amount,
        cardName: this.state.cardName,
        cardNo: this.state.cardNo,
        cvv: this.state.cvv,

        userList: data,
      });
    };

    const data = this.props.cartItems.map((val: any) => {
      {
        total = total + Number(val.productSalePrice) * val.productQty;
        this.state.Amount = total;
      }
    });

    return (
      <>
        <Container>
          <Row>
            <Column size={12}>
              <h2 className="  text-dark fw-bold fs-3 p-2 text-center   mb-3">
                Billing Details
              </h2>
              <Row>
                <Column size={6} classes="bg-light">
                  <h1 className="text-center fw-bold">Payment</h1>
                  <form action="" onSubmit={submit}>
                    <div className="mb-3">
                      <label className="form-label">cardHolderName</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="cardName"
                        name="cardName"
                        onChange={(e) =>
                          this.setState({
                            cardName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">cardNumber</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="cardNo"
                        name="cardNo"
                        onChange={(e) =>
                          this.setState({
                            cardNo: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">cvv</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="cvv"
                        name="cvv"
                        onChange={(e) =>
                          this.setState({
                            cvv: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn bg-primary w-100 text-uppercase text-white"
                    >
                      Payment
                    </button>
                  </form>
                </Column>
                <Column size={5} classes="offset-md-1 mt-5">
                  <div className="card border border-3 shadow-lg">
                    <h3 className="fw-bold text-dark ">
                      Name :
                      <span className="text-success">
                        {this.state.userList.userName}
                      </span>
                    </h3>
                    <h3 className="fw-bold text-dark">
                      Email :
                      <span className="text-success">
                        {this.state.userList.userEmail}
                      </span>
                    </h3>
                    {this.state.addressData.map((addr: any) => (
                      <div>
                        <h3 className="fw-bold text-dark">
                          Address1 :
                          <span className="text-primary">{addr.line1} </span>
                        </h3>
                        <h3 className="fw-bold text-dark">
                          Address2 :
                          <span className="text-primary">{addr.line1} </span>
                        </h3>
                        <h3 className="fw-bold text-dark">
                          Address1 :
                          <h3 className="fw-bold text-dark">
                            <span className="text-primary">{addr.line2} </span>
                          </h3>
                          City :
                          <span className="text-primary">{addr.city} </span>
                        </h3>
                        <h3 className="fw-bold text-dark">
                          State :
                          <span className="text-primary">{addr.state} </span>
                        </h3>
                        <h3 className="fw-bold text-dark">
                          Pinocode :
                          <span className="text-primary">{addr.pincode} </span>
                        </h3>
                      </div>
                    ))}
                    <div>
                      <h2 className="fw-bold">
                        Total Amount:{this.state.Amount}
                      </h2>
                    </div>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStoreToProps = (state: StoreType) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    resetCart: () => dispatch(CartActions.resetCart()),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Checkout);
