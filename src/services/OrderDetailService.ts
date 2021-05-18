import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const createOrderDetail = async (
  amount: number,
  qty: number,
  productId: number,
  orderId: number
) => {
  const url = `${constants.BASE_URL}/order-details`;
  return StorageService.getData("token").then((token) =>
    axios.post(
      url,
      { amount, productId, qty, orderId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
  );
};

const getOrderDetail = async () => {
  const url = `${constants.BASE_URL}/order-details`;
  return StorageService.getData("token").then((token) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  );
};

const deleteOrderDetail = async (id: number) => {
  const url = `${constants.BASE_URL}/order-details?id=${id}`;
  return StorageService.getData("token").then((token) =>
    axios.delete(url, { headers: { Authorization: `Bearer${token}` } })
  );
};

export default { createOrderDetail, getOrderDetail, deleteOrderDetail };
