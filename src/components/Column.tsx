import React, { useContext } from "react";
import { ThemeContext } from "../context";

type Props = {
  size: number;
  classes?: string;
};

const Column: React.FC<Props> = ({ classes, size, children }) => {
  const theme = useContext(ThemeContext);
  const color = theme === "dark" ? "text-light" : "text-dark";
  const cls = `col-md-${size}`;
  return <div className={`${cls} ${color} ${classes}`}>{children}</div>;
};
export default Column;
