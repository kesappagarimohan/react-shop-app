import IconButton from "@material-ui/core/IconButton";
import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveIcon from "@material-ui/icons/Remove";
type Props = {
  btnClick: () => void;
  btnInc: () => void;
  qty: number;
  stock: number;
};
type State = {
  qty: number;
  stock: number;
};
class Button extends Component<Props, State> {
  state: State = {
    qty: this.props.qty,
    stock: this.props.stock,
  };

  incrementQty = () => {
    if (this.state.stock > this.state.qty) {
      this.setState({
        qty: this.state.qty + 1,
      });
    }
  };
  decrimentQty = () => {
    if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1,
      });
    } else {
      this.setState({
        qty: this.state.qty,
      });
    }
  };
  render() {
    return (
      <div>
        <div className="d-flex mb-5">
          <IconButton onClick={this.incrementQty}>
            <AddIcon />
          </IconButton>
          <p className="my-3 mx-3">{this.state.qty}</p>
          <IconButton onClick={this.decrimentQty}>
            <RemoveIcon />
          </IconButton>
        </div>
        <div className="v">
          <IconButton onClick={() => this.props.btnClick()}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Button;
