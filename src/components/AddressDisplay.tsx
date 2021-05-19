import React, { Component } from "react";

type Props = {
  add: any;
};
type State = {
  add: any;
};
export default class AddressDisplay extends Component<Props, State> {
  state: State = {
    add: this.props.add,
  };
  render() {
    return (
      <div>
        hi
        <table className="table table-bordered">
          <thead className="text-light bg-dark">
            <th>ID</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>City</th>
            <th>State</th>
            <th>Piincode </th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.add.map((address: any) => (
              <tr>
                <th>{address.id}</th>
                <th>{address.line1}</th>
                <th>{address.line2}</th>
                <th>{address.city}</th>
                <th>{address.state}</th>
                <th>{address.pincode}</th>
                <th>
                  <button className="btn btn-danger" value={address.id}>
                    <i className="fas fa-trash display-7"></i>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
