import axios from "axios";
import constants from "../constants";
import { LoginResponseType } from "../types";

const login = (email: string, password: string) => {
  const url = `${constants.BASE_URL}/auth/login`;
  return axios
    .post<LoginResponseType>(url, { email, password })
    .catch((e) => Promise.reject(e.response.data));
};

const profile = () => {
  const url = `${constants.BASE_URL}/auth/profile`;
  return axios.get(url, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  });
};

export default { login, profile };
