import React, { SyntheticEvent, Fragment } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import Column from "../components/Column";
import Row from "../components/Row";
import ProductService from "../services/ProductService";
import ErrorBoundary from "../components/ErrorBoundary";
import ImageWithFallback from "../components/ImageWithFallback";
import Container from "../components/Container";
import TextBox from "../components/TextBox";
import { NavLink } from "react-router-dom";
import UserService from "../services/UserService";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import LoadingActions from "../store/actions/LoadingActions";
import UserActions from "../store/actions/UserActions";
import formatter from "../utils/formatter";
import LoadingWrapper from "../components/LoadingWrapper";
import { StoreType } from "../types";
import AddressService from "../services/AddressService";

type RegisterProps = {
  errorMessage: string | null;
  showLoader: () => void;
  hideLoader: () => void;
} & RouteComponentProps;
type RegisterState = {
  line1: string;
  line2: string;
  city: string;
  stateName: string;
  pincode: number;
  mobile: number;
};
class Add extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {
    line1: "",
    line2: "",
    city: "",
    stateName: "",
    pincode: 0,
    mobile: 0,
  };
  submitData = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const { line1, line2, city, stateName, pincode, mobile } = this.state;
      const data = await AddressService.addressPost(
        line1,
        line2,
        city,
        stateName,
        pincode,
        mobile
      );
      console.log("address", data);
      this.props.showLoader();
      this.props.hideLoader();
      this.props.history.push("/profile");
      this.setState({
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        stateName: this.state.stateName,
        pincode: this.state.pincode,
        mobile: this.state.mobile,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    console.log("state data", this.state);
    return (
      <Container>
        <Row>
          <Column size={12}>
            <div className="card col-md-6 mx-auto">
              <h1 className="text-center">Add Address</h1>
              <small className="text-danger">{this.props.errorMessage}</small>
              <div className="card-body">
                <form onSubmit={this.submitData}>
                  <TextBox
                    placeholder={"Address1"}
                    type={"text"}
                    textChange={(line1) => this.setState({ line1 })}
                  />
                  <TextBox
                    placeholder={"Address2"}
                    type={"text"}
                    textChange={(line2) => this.setState({ line2 })}
                  />
                  <TextBox
                    placeholder={"city"}
                    type={"text"}
                    textChange={(city) => this.setState({ city })}
                  />
                  <TextBox
                    placeholder={"State"}
                    type={"text"}
                    textChange={(stateName) => this.setState({ stateName })}
                  />
                  <input
                    type="text"
                    placeholder="pincode"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({
                        pincode: Number(e.target.value),
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="mobile"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({
                        mobile: Number(e.target.value),
                      })
                    }
                  />
                  {/* <NavLink to={"/profile"}> */}
                  <button className={"btn btn-dark w-100 text-uppercase"}>
                    Add{" "}
                  </button>
                  {/* </NavLink> */}
                </form>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideLoader: () => dispatch(LoadingActions.hideLoader()),
    showLoader: () => dispatch(LoadingActions.showLoader()),
  };
};
export default connect(null, mapDispatchToProps)(Add);
