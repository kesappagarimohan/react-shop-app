import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import StorageService from "../services/StorageService";
import UserActions from "../store/actions/UserActions";
import { StoreType } from "../types";

const LoginButtons: React.FC = (props) => {
  // const store = useStore<StoreType>();
  const auth = useSelector((store: StoreType) => !!store.userSession.user);
  const dispatch = useDispatch();
  const history = useHistory();
  if (auth) {
    return (
      <>
        <Link className="btn btn-link" to={"/profile"}>
          Profile
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
