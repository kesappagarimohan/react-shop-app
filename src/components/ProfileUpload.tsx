import axios from "axios";
import StorageService from "../services/StorageService";

type Props = {
  getData: () => void;
};

const ProfileUpload: React.FC<Props> = (props) => {
  let file: any;

  const changeFile = (e: any) => {
    file = e.target.files[0];
  };

  const uploadImage = () => {
    if (file !== undefined) {
      const formData = new FormData();

      // Update the formData object
      formData.append("file", file);

      return StorageService.getData("token").then((token) =>
        axios
          .post(`http://localhost:5000/auth/upload`, formData, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => props.getData())
      );
    } else {
      alert("Select Image");
    }
  };

  return (
    <>
      {" "}
      <input type="file" onChange={changeFile} />
      <button onClick={uploadImage}>Upload</button>{" "}
    </>
  );
};

export default ProfileUpload;
