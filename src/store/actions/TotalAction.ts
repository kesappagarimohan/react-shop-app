const ActionTypes = {
  TOTAL_AMOUNT: "TOTAL_AMOUNT",
};
const totalAmount = (totalAmount: any) => {
  return {
    type: ActionTypes.TOTAL_AMOUNT,
    totalAmount,
  };
};

const TotalActions = { totalAmount, ActionTypes };
export default TotalActions;
