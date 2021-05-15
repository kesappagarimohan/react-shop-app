import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const createOrder = (amount: number, productId: number) => {
  const url = `${constants.BASE_URL}/order`;
  return StorageService.getData("token").then((token) =>
    axios.post(
      url,
      { amount, productId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
  );
};
export default { createOrder };
