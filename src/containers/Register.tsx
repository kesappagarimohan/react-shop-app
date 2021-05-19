import React from "react";
import { RouteComponentProps } from "react-router";

import Column from "../components/Column";
import LoadingWrapper from "../components/LoadingWrapper";
import Row from "../components/Row";
import TextBox from "../components/TextBox";

import emailjs from "emailjs-com";
import axios from "axios";

type RegisterProps = {
  signinSuccess: (user: object) => void;
  signinError: (error: string) => void;
  showLoader: () => void;
  hideLoader: () => void;
  isAuthenticated: boolean;
} & RouteComponentProps;

type RegisterState = {
  email: string;
  password: string;
  name: string;
  mobile: number;
};

class Register extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {
    email: "",
    password: "",
    name: "",
    mobile: 0,
  };

  register = async (e: any) => {
    try {
      e.preventDefault();
      console.log(e);
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile,
      };
      axios.post("http://localhost:5000/auth/register", user).then(
        (response) => (
          console.log(response.status === 201),
          emailjs
            .sendForm(
              "service_ovcg4pp",
              "template_orqdz5i",
              e.target,
              "user_gDx5Fv3bdLcTheBkaTjWT"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            )
        )
      );

      this.props.history.push("/login");
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <LoadingWrapper>
        <Row>
          <Column
            size={4}
            classes={
              "offset-md-4 shadow-sm border p-4 text-center rounded mt-5"
            }
          >
            <h2>Register</h2>
            <hr />

            <form onSubmit={this.register}>
              <TextBox
                placeholder={"Name"}
                type={"text"}
                textChange={(name) => this.setState({ name })}
              />

              <TextBox
                placeholder={"Email"}
                type={"email"}
                textChange={(email) => this.setState({ email })}
              />

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

              <TextBox
                placeholder={"Password"}
                type={"password"}
                textChange={(password) => this.setState({ password })}
              />

              <button className={"btn btn-success w-100"}>REGISTER</button>
            </form>
          </Column>
        </Row>
      </LoadingWrapper>
    );
  }
}

export default Register;
