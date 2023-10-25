import { useState, useEffect } from "react";

function SearchBtn(props) {
  const [search, setSearch] = useState("");

  console.log(props.runSelection);

  useEffect(() => {
    setSearch(props.runSelection);
  }, [props.runSelection]);

  return (
    <input
      type="text"
      placeholder="Search Stevens Pass"
      className="input input-bordered input-primary max-w-xs"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}

export default SearchBtn;
