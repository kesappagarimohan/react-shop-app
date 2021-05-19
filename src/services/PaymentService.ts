import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const paymentPost = (
  Amount: number,
  cardName: string,
  cardNo: number,
  cvv: number
) => {
  const url = `${constants.BASE_URL}/payment`;
  return StorageService.getData("token").then((token) =>
    axios.post(
      url,
      { cardName, cardNo, cvv, Amount },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  );
};

export default { paymentPost };
