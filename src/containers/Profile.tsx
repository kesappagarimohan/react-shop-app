import React from "react";
import { NavLink } from "react-router-dom";
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
            size={6}
            classes={
              " text-center offset-3 bg-secondary fw-bold text-white shadow-lg border border-2 mt-5"
            }
          >
            <h2 className=" text-light ">User Profile</h2>
            <ImageWithFallback
              source="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png"
              classes={"w-50 h-50 text-center"}
            />
            <h4 className="mt-3">
              UserName:
              <span className="">{this.state.profileData.userName}</span>
            </h4>
            <h4 className="mt-3">
              UserEmail:
              <span className="">{this.state.profileData.userEmail}</span>
            </h4>
            <h4 className="mt-3">
              From:
              <span className="">{this.state.profileData.createdAt}</span>
            </h4>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Profile;
