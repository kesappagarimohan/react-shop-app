import React from "react";
type props = {};
const Row: React.FC = (props) => {
  return <div className="row">{props.children}</div>;
};
export default Row;
