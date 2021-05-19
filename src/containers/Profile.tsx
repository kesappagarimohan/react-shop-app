import { Avatar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Column from "../components/Column";
import Container from "../components/Container";

import Row from "../components/Row";
import UserService from "../services/UserService";
import StorageService from "../services/StorageService";
import axios from "axios";
import constants from "../constants";
import FileUpload from "../components/FileUpload";
type Props = {};
type State = {
  profileData: any;
  address: any;
};

class Profile extends React.Component<Props, State> {
  state: State = { profileData: [], address: [] };

  async componentDidMount() {
    try {
      const { data } = await UserService.profile();

      console.log(data);
      this.setState({
        profileData: data,
        address: data.address,
      });
    } catch (e) {
      console.log(e.response.data);
    }
  }
  getData = async () => {
    try {
      const { data } = await UserService.profile();
      console.log(data.address);
      this.setState({ address: data.address });
    } catch (e) {
      console.log(e.response.data);
    }
  };

  deleteAddress = async (e: any) => {
    //console.log("before", e);
    let deleteAddressId = e.target.value;
    console.log("id", deleteAddressId);
    const url = `${constants.BASE_URL}/address/${deleteAddressId}`;
    return await StorageService.getData("token").then((token) =>
      axios
        .delete(url, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          this.getData();
          console.log("data deleted");
        })
        .catch((err) => console.log(err))
    );
  };
  render() {
    console.log(this.state.profileData);
    console.log(this.state.address);
    return (
      <Container>
        <Row>
          <Column
            size={3}
            classes={" text-center   fw-bold shadow-lg border border-2 mt-2"}
          >
            <div className="d-flex justify-content-around border-bottom">
              <Avatar className="m-4 w-25 h-25" />
              <div className="m-3">
                <p className="mt-1">Hello</p>
                <h3 className="mb-3">{this.state.profileData.userName}</h3>
              </div>
            </div>
            <div className="border-bottom mt-5 ">
              <NavLink to={`/cart`}>
                <h2>MyCart</h2>
              </NavLink>
            </div>
            <div className="border-bottom mt-5 ">
              <NavLink to={`/address`}>
                <h2>MyAddress</h2>
              </NavLink>
            </div>
          </Column>
          <Column
            size={9}
            classes={
              " d-flex align-items-center flex-column shadow-lg border border-2 mt-2"
            }
          >
            <form action="" className="w-75 mt-4 ">
              <div className="mb-3">
                <label className="form-label">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="nameHelp"
                  value={this.state.profileData.userName}
                />
                <div id="nameHelp" className="form-text">
                  is that your name
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={this.state.profileData.userEmail}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="mobile"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={this.state.profileData.userMobile}
                />
              </div>
            </form>
            <ul className="w-100">
              {this.state.address.map((address: any) => (
                <li className="list-group-item">
                  {" "}
                  Address :
                  <span className="text-warning">
                    {address.line1} ,{address.line2}, {address.city},
                    {address.state} ,{address.pincode},{address.mobile}.
                  </span>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm ms-5 float-end"
                    value={address.id}
                    onClick={this.deleteAddress}
                  >
                    <i className="fas fa-trash display-7"></i>
                  </button>
                </li>
              ))}

              <FileUpload />
              <li className="list-group-item">
                <NavLink to="/cart">Go to My Orders</NavLink>
              </li>
            </ul>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Profile;
