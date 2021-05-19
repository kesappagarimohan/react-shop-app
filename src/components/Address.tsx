import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import Column from "../components/Column";
import Row from "../components/Row";
import Container from "../components/Container";
import TextBox from "../components/TextBox";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import LoadingActions from "../store/actions/LoadingActions";

import AddressService from "../services/AddressService";
import { NavLink } from "react-router-dom";

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
      const data = await AddressService.AddAddress(
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
          <Column size={7} classes={"mx-auto"}>
            <div className=" ">
              <h1 className="text-center">Add Address</h1>
              <small className="text-danger">{this.props.errorMessage}</small>

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
                <div className="form-group my-4">
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
                </div>
                <div className="form-group my-4">
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
                </div>

                <NavLink to={"/profile"}>
                  <button className={"btn btn-success w-100 text-uppercase"}>
                    Add Address
                  </button>
                </NavLink>
              </form>
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
