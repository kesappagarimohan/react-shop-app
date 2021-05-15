import IconButton from "@material-ui/core/IconButton";
import React, { Component } from "react";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import Container from "../components/Container";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import { type } from "node:os";
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
            <PlusOneIcon />
          </IconButton>
          <IconButton>
            <p>{this.state.qty}</p>
          </IconButton>
          <IconButton onClick={this.decrimentQty}>
            <ExposureNeg1Icon />
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
