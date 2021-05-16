import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const addressPost = (
  line1: string,
  line2: string,
  city: string,
  stateName: string,
  pincode: number,
  mobile: number
) => {
  const url = `${constants.BASE_URL}/address`;
  return StorageService.getData("token").then((token) =>
    axios.post(
      url,
      { line1, line2, city, stateName, pincode, mobile },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  );
};

export default { addressPost };
