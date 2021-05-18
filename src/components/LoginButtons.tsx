import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import StorageService from "../services/StorageService";
import UserActions from "../store/actions/UserActions";
import { StoreType } from "../types";
import CartButton from "./CartButton";

const LoginButtons: React.FC = (props) => {
  const store = useStore<StoreType>();
  const auth = useSelector((store: StoreType) => !!store.userSession.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const refreshPage = () => {
    window.location.reload();
    window.location.replace("http://localhost:3000/login");
  };

  if (auth) {
    return (
      <>
        <CartButton />
        <Link className="btn btn-link" to={"/profile"}>
          <Avatar />
        </Link>
        <button
          className="btn btn-sm btn-outline-primary mx-2"
          onClick={() => {
            StorageService.clearAll();
            refreshPage();
            dispatch(UserActions.logout());
            StorageService.clearAll();
            history.push("/login"); // redirect
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
