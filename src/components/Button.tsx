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
};
type State = {
  qty: number;
};
class Button extends Component<Props, State> {
  state: State = {
    qty: this.props.qty,
  };

  incrementQty = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };
  decrimentQty = () => {
    this.setState({
      qty: this.state.qty - 1,
    });
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
          <IconButton onClick={this.incrementQty}>
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
