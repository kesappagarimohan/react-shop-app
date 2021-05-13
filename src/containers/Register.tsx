import axios from "axios";
import React from "react";
// import { useHistory } from "react-router";
import { BrowserRouter, NavLink, Redirect, useHistory } from "react-router-dom";
import Column from "../components/Column";
import Row from "../components/Row";
import Login from "./Login";

type RegisterState = {
  email: any;
  name: any;
  password: any;
  conformpassword: any;
  redirect: boolean;
};

class Register extends React.Component {
  state: RegisterState = {
    email: "",
    name: "",
    password: "",
    conformpassword: "",
    redirect: false,
  };

  submitting = (e: any) => {
    e.preventDefault();
    if (this.state.conformpassword === this.state.password) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      axios.post("http://localhost:5000/auth/register", user).then(
        (response) => console.log(response.status === 201)
        // history.state("/login")
      );
      this.setState({ redirect: true });
    }
  };

  redirecting = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };

  changeValue = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container register-form">
        {this.redirecting()}
        <Row>
          <Column
            size={8}
            classes={"offset-md-2 mt-2 shadow-lg p-5 rounded border border-2"}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">
                  Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  name="name"
                  value={this.state.name}
                  onChange={this.changeValue}
                  required
                />
                <div id="nameHelp" className="form-text">
                  Enter FullName.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.changeValue}
                  required
                />
                <div id="emailHelp" className="form-text">
                  Enter Email.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" required />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Accept All Term & Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Register;
