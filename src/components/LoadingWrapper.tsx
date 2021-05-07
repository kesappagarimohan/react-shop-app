import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../types";
const LoadingWrapper: React.FC<{}> = ({ children }) => {
  const loading = useSelector<StoreType>((store) => store.loading);
  return (
    <>
      <div
        className="spinner-border"
        style={{
          width: "3rem",
          height: "3rem",
          visibility: loading ? "visible" : "hidden",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      {children}
    </>
  );
};
export default LoadingWrapper;
