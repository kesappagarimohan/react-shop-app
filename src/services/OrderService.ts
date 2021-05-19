import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const createOrder = async (
  amount: number,
  productId: number,
  sDate: string,
  qty: number
) => {
  const url = `${constants.BASE_URL}/order`;
  return StorageService.getData("token").then((token) =>
    axios.post(
      url,
      { amount, productId, sDate, qty },
      { headers: { Authorization: `Bearer ${token}` } }
    )
  );
};

const getOrder = async () => {
  const url = `${constants.BASE_URL}/order`;
  return StorageService.getData("token").then((token) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  );
};

const deleteOrder = async (id: number) => {
  const url = `${constants.BASE_URL}/order?id=${id}`;
  return StorageService.getData("token").then((token) =>
    axios.delete(url, { headers: { Authorization: `Bearer${token}` } })
  );
};

export default { createOrder, getOrder, deleteOrder };
