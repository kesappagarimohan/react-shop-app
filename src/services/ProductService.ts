import axios from "axios";
import constants from "../constants";
import { ProductResponseType, ProductType } from "../types";

const getProducts = (
  page = 1,
  minPrice: any,
  maxPrice: any,
  searchByTerm: any,
  sortByName: any,
  sortByPrice: any
) => {
  const url = `${constants.BASE_URL}/product?page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&searchByTerm=${searchByTerm}&sortByName=${sortByName}&sortByPrice=${sortByPrice}`;
  return axios.get<ProductResponseType>(url);
};

const getProductById = (id: string) => {
  const url = `${constants.BASE_URL}/product/${id}`;
  return axios.get<ProductType>(url);
};

export default { getProducts, getProductById };
