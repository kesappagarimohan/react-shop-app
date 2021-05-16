import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Column from "../components/Column";
import Container from "../components/Container";
import ImageWithFallback from "../components/ImageWithFallback";
import Row from "../components/Row";
import UserService from "../services/UserService";
type Props = {};
type State = {
  profileData: any;
};

class Profile extends React.Component<Props, State> {
  state: State = { profileData: [] };

  async componentDidMount() {
    try {
      const { data } = await UserService.profile();
      console.log(data);
      this.setState({
        profileData: data,
      });
    } catch (e) {
      console.log(e.response.data);
    }
  }
  render() {
    console.log(this.state.profileData);
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
              <Link to={`/cart`}>
                <h2>MyCart</h2>
              </Link>
            </div>
            <div className="border-bottom mt-5 ">
              <Link to={`/address`}>
                <h2>MyAddress</h2>
              </Link>
            </div>
          </Column>
          <Column
            size={7}
            classes={
              "offset-md-1 d-flex align-items-center flex-column shadow-lg border border-2 mt-2"
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
            <div className="mt-4">
              <h4>FAQs</h4>
              <p className="fw-bold">
                What happens when I update my email address (or mobile number)?
              </p>
              <p>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>

              <p className="fw-bold">
                When will my Flipkart account be updated with the new email
                address (or mobile number)?
              </p>
              <p>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>

              <p className="fw-bold">
                What happens to my existing Flipkart account when I update my
                email address (or mobile number)?
              </p>
              <p>
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>

              <p className="fw-bold">
                Does my Seller account get affected when I update my email
                address?
              </p>
              <p>
                Flipkart has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </p>
            </div>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Profile;
