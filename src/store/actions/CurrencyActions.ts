const ActionTypes = {
  UPDATE_CURRENCY: "[Currency] Update Currency",
};

const updateCurrency = (code: string) => {
  return {
    type: ActionTypes.UPDATE_CURRENCY, // required, unique
    code, // payload (optional)
  };
};

export default { updateCurrency, ActionTypes };
