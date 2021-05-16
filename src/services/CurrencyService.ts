import axios from "axios";
import constants from "../constants";
//import { ExchangeCurrencyType } from "../types";

const getExchangeRate = () => {
  const url = `${constants.CURRENCY_URL}`;
  return axios.get(url);
};

export default { getExchangeRate };
