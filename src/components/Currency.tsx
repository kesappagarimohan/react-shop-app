import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CurrencyActions from "../store/actions/CurrencyActions";

type CurrencyProps = {
  currencyChange: (code: string) => void;
  theme?: "light" | "dark";
};

class Currency extends React.Component<CurrencyProps> {
  render() {
    const codes = ["INR", "USD", "CAD", "GBP", "EUR"];
    const bgcolor = this.props.theme === "dark" ? "text-light" : "text-dark";
    return (
      <select
        onChange={(e) => this.props.currencyChange(e.target.value)}
        className={`form-control-sm ${bgcolor} bg-${this.props.theme}`}
      >
        {codes.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    );
  }
}
// connect(what data to fetch from the store, what data to update inside the store)(component)
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    currencyChange: (code: string) =>
      dispatch(CurrencyActions.updateCurrency(code)),
  };
};
export default connect(null, mapDispatchToProps)(Currency);
