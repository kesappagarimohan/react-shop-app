import React from "react";

const Container: React.FC<{ fluid?: boolean }> = ({ children, fluid }) => {
  const cls = fluid ? "container-fluid" : "container";
  return <div className={cls}>{children}</div>;
};
export default Container;
