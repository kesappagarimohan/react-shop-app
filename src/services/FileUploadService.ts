import axios from "axios";
import constants from "../constants";

const uploadfile = (file: any) => {
  const url = `${constants.BASE_URL}/auth/upload`;
  return axios
    .post(url, { file })
    .catch((e) => Promise.reject(e.response.data));
};
export default { uploadfile };
