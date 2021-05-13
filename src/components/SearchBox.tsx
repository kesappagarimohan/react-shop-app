import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../types";
type Props = {};

const SearchBox: React.FC<Props> = () => {
  const search = useSelector<StoreType>((store) => store.search);
  const [set, setSearch] = useState(search);

  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(set);
    setSearch("");
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </form>
  );
};
export default SearchBox;
