import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeHolder, onChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeHolder}
      onChange={onChange}
    ></input>
  );
};

export default SearchBox;
