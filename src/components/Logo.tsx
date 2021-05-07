import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="navbar-brand text-primary" to="/">
      <i className="fas fa-dragon" style={{ fontSize: "1.2em" }}></i> Store
    </Link>
  );
}
