import React, { PureComponent } from "react";
import axios from "axios";

type Props = {};
type State = {
  profileImg: any;
  file: any;
};
class FileUpload extends PureComponent<Props, State> {
  state: State = {
    profileImg: "",
    file: File,
  };

  onSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    axios
      .post("http://localhost:5000/auth/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="file"
                name="file"
                onChange={(e: any) =>
                  this.setState({
                    profileImg: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default FileUpload;
