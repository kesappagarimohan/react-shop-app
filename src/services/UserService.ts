import axios from "axios";
import constants from "../constants";
import { LoginResponseType } from "../types";
import StorageService from "./StorageService";

const login = async (email: string, password: string) => {
  const url = `${constants.BASE_URL}/auth/login`;
  return axios
    .post<LoginResponseType>(url, { email, password })
    .catch((e) => Promise.reject(e.response.data));
};

const profile = async () => {
  const url = `${constants.BASE_URL}/auth/profile`;
  return StorageService.getData("token").then((token) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  );
};
const register = (
  email: string,
  password: string,
  name: string,
  mobile: number
) => {
  const url = `${constants.BASE_URL}/auth/register`;
  return axios.post(url, { email, password, name, mobile });
};
export default { login, profile, register };
