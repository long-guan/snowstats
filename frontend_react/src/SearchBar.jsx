import { useState } from "react";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";

const notFocusedStyle = {
  borderRadius: "20px",
  maxWidth: "200px",
  paddingTop: "10px",
  paddingBottom: "10px",
  backgroundColor: "#fff",
};

const focusedStyle = {
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  maxWidth: "200px",
  paddingTop: "10px",
  paddingBottom: "10px",
  backgroundColor: "#fff",
};

function SearchBar(props) {
  const [style, setStyle] = useState(notFocusedStyle);
  // used to track focus on drop down select so the onBlur from the input
  // doesn't close it when trying to select an option
  const [selectClick, setSelectClick] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={{ alignSelf: "start" }}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search Trails
      </label>
      <div className="relative">
        <div
          style={{ height: "42px" }}
          className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-1 pl-10 text-sm border focus:outline-none shadow-lg"
          style={style}
          placeholder="Search..."
          required
          onChange={(e) => props.setRunSelection(e.target.value)}
          value={props.runSelection}
          onFocus={() => {
            setStyle(focusedStyle);
            setShowDropDown(true);
          }}
          onBlur={() => {
            if (selectClick !== true) {
              setStyle(notFocusedStyle);
              setShowDropDown(false);
            }
          }}
        />
        {showDropDown === true ? (
          <select
            className="focus:outline-none"
            size="4"
            style={{
              width: "100%",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            onClick={() => {
              setShowDropDown(false);
              setStyle(notFocusedStyle);
            }}
            onMouseEnter={() => setSelectClick(true)}
            onMouseLeave={() => setSelectClick(false)}
            onChange={(e) => {
              props.setRunSelection(e.target.value);
            }}
            name="search"
          >
            {stevens_pass_runs.map((run) => (
              <option
                className="text-sm searchbar-option"
                style={{
                  height: "42px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
                key={run.name}
                value={run.title}
              >
                {run.title}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </form>
  );
}

export default SearchBar;
