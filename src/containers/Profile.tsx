import React from "react";
import Column from "../components/Column";
import Row from "../components/Row";
import UserService from "../services/UserService";
type Props = {};
type State = {};

class Profile extends React.Component<Props, State> {
  async componentDidMount() {
    try {
      const { data } = await UserService.profile();
      console.log(data);
    } catch (e) {
      console.log(e.response.data);
    }
  }
  render() {
    return (
      <Row>
        <Column size={12}>User Profile</Column>
      </Row>
    );
  }
}
export default Profile;
