import axios from "axios";
import constants from "../constants";
import StorageService from "./StorageService";

const AddAddress = (
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
const Address = () => {
  const url = `${constants.BASE_URL}/address`;
  return StorageService.getData("token").then((token) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  );
};
const DeleteAddress = () => {
  const url = `${constants.BASE_URL}/address`;

  return StorageService.getData("token").then((token) =>
    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("data deleted");
      })
      .catch((err) => console.log(err))
  );
};

export default { AddAddress, DeleteAddress, Address };
