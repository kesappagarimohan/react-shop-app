import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../types";

const LoadingWrapper: React.FC<{}> = ({ children }) => {
  const loading = useSelector<StoreType>((store) => store.loading);
  return (
    <>
      <div
        className="loader-overlay"
        style={{ visibility: loading ? "visible" : "hidden" }}
      >
        <div
          className="spinner-border text-primary"
          style={{
            width: "3rem",
            height: "3rem",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      {children}
    </>
  );
};
export default LoadingWrapper;
