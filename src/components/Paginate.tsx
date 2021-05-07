import React, { useState } from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  changePage: (pageno: number) => void;
};
const Paginate: React.FC<Props> = ({ totalPages, currentPage, changePage }) => {
  const [selected, setSelected] = useState(0);
  const pages = Array(totalPages).fill(0);
  return (
    <div className="btn-group me-2" role="group" aria-label="First group">
      {pages.map((p, i) => (
        <button
          type="button"
          className={`btn btn-sm ${
            selected === i ? "btn-primary" : "btn-outline-primary"
          }`}
          key={i}
          onClick={() => {
            changePage(i + 1);
            setSelected(i);
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
export default Paginate;
