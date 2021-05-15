const ActionTypes = {
  SERACH_NAME: "SERACH_NAME",
};
const updateSearch = (serachField: any) => {
  return {
    type: ActionTypes.SERACH_NAME,
    serachField,
  };
};

const SerachActions = { updateSearch, ActionTypes };
export default SerachActions;
