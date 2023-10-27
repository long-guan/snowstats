// import { useState, useEffect } from "react";

function SearchBtn(props) {
  return (
    <input
      type="text"
      placeholder="Search Stevens Pass"
      className="input input-bordered input-primary max-w-xs"
      onChange={(e) => props.setRunSelection(e.target.value)}
      value={props.runSelection}
    />
  );
}

export default SearchBtn;
