const ActionTypes = {
  SIGN_IN_SUCCESS: "[User] Login success",
  SIGN_IN_ERROR: "[User] Login error",
  SIGN_OUT: "[User] Logout",
};

const loginSuccess = (user: object) => {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    user,
  };
};
const loginError = (error: string) => {
  return {
    type: ActionTypes.SIGN_IN_ERROR,
    error,
  };
};
const logout = () => {
  return { type: ActionTypes.SIGN_OUT };
};

const UserActions = { loginError, loginSuccess, logout, ActionTypes };
export default UserActions;
