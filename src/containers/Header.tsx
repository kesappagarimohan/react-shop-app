import React from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import SearchBox from "../components/SearchBox";
import MenuService from "../services/MenuService";
import { MenuType } from "../types";

type Props = {
  theme: string;
};
type State = {
  menuItems: MenuType[];
};

class Header extends React.Component<Props, State> {
  state: State = { menuItems: [] };
  async componentDidMount() {
    try {
      const { data } = await MenuService.getMenuData();
      this.setState({ menuItems: data });
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    const { theme } = this.props;
    return (
      <nav
        className={`fixed-top navbar navbar-expand-lg navbar-${theme} bg-${theme} shadow-sm`}
      >
        <Container fluid>
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu menuData={this.state.menuItems} />
            <SearchBox />
            {this.props.children}
          </div>
        </Container>
      </nav>
    );
  }
}
export default Header;
