import React from "react";
import { MenuType } from "../types";
import { NavLink } from "react-router-dom";

type Props = {
  menuData: MenuType[];
};

const Menu: React.FC<Props> = ({ menuData }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {menuData.map((item) => (
        <li className="nav-item" key={item.menuLink}>
          <NavLink
            className="nav-link"
            to={item.menuLink}
            activeClassName="active"
            exact
          >
            {item.menuItem}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
