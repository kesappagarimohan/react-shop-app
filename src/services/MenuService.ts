import axios from "axios";
import { MenuType } from "../types";

const getMenuData = () => {
  const url = "/menu.json";
  return axios.get<MenuType[]>(url);
};

export default { getMenuData };
