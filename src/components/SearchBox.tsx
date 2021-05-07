import React from "react";
type Props = {};

const SearchBox: React.FC<Props> = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
};
export default SearchBox;
