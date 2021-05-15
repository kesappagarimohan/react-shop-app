const ActionTypes = {
  QTY_COUNT: "QTY_COUNT",
};
const updateCount = (count: any) => {
  return {
    type: ActionTypes.QTY_COUNT,
    count,
  };
};

const QtyActions = { updateCount, ActionTypes };
export default QtyActions;
