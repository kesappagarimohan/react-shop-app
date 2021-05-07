import axios from "axios";
import constants from "../constants";
import { ProductResponseType, ProductType } from "../types";

const getProducts = (page = 1) => {
  const url = `${constants.BASE_URL}/product?page=${page}`;
  return axios.get<ProductResponseType>(url);
};

const getProductById = (id: string) => {
  const url = `${constants.BASE_URL}/product/${id}`;
  return axios.get<ProductType>(url);
};

export default { getProducts, getProductById };
