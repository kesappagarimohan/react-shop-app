import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import StorageService from "../services/StorageService";
import UserActions from "../store/actions/UserActions";
import { StoreType } from "../types";
import CartButton from "./CartButton";
import Currency from "./Currency";
import ThemeSwitch from "./ThemeSwitch";

const LoginButtons: React.FC = (props) => {
  // const store = useStore<StoreType>();
  const auth = useSelector((store: StoreType) => !!store.userSession.user);
  const dispatch = useDispatch();
  const history = useHistory();
  if (auth) {
    return (
      <>
        <CartButton />
        <Link className="btn btn-link" to={"/profile"}>
          <IconButton>
            <Avatar />
          </IconButton>
        </Link>
        <button
          className="btn btn-sm btn-outline-primary mx-2"
          onClick={() => {
            StorageService.clearAll();
            dispatch(UserActions.logout());
            history.push("/"); // redirect
          }}
        >
          Logout
        </button>
      </>
    );
  }
  return (
    <Link className="btn btn-sm btn-outline-primary mx-2" to={"/login"}>
      Login
    </Link>
  );
};
export default LoginButtons;
