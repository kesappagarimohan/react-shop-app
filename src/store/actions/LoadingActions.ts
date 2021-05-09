const ActionTypes = {
  SHOW_LOADER: "[Loading] Show",
  HIDE_LOADER: "[Loading] Hide",
};

const showLoader = () => {
  return { type: ActionTypes.SHOW_LOADER };
};

const hideLoader = () => {
  return { type: ActionTypes.HIDE_LOADER };
};

export default {
  showLoader,
  hideLoader,
  ActionTypes,
};
