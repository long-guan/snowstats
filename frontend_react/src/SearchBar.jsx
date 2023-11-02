import { useState, useEffect } from "react";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";
import green_circle from "./assets/green_circle.png";
import blue_square from "./assets/blue_square.png";
import black_diamond from "./assets/black_diamond.png";
import double_black_diamond from "./assets/double_black_diamond.png";
import chair_lift from "./assets/chair_lift.png";
import { createOpenArray } from "./helperFunctions";

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
  const [options, setOptions] = useState(stevens_pass_runs);

  function handleSubmit(e) {
    e.preventDefault();
    props.openRunSelection();
  }

  // returns icon depending on category in stevens_pass_runs json file
  function returnIcon(category) {
    if (category === "green") {
      return green_circle;
    } else if (category === "blue") {
      return blue_square;
    } else if (category === "black") {
      return black_diamond;
    } else if (category === "doubleblack") {
      return double_black_diamond;
    } else {
      return chair_lift;
    }
  }

  function filterOption() {
    let filteredOption = [];
    stevens_pass_runs.forEach((run) => {
      if (run.title.toLowerCase().includes(props.runSelection.toLowerCase())) {
        filteredOption.push(run);
      }
    });
    setOptions(filteredOption);
  }

  useEffect(() => {
    if (props.runSelection !== "") {
      filterOption();
    } else {
      setOptions(stevens_pass_runs);
    }
  }, [props.runSelection]);

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
            props.setDisabled(true); // disables tooltips hover
            props.setOpen(createOpenArray()); // closes all tooltips
            setStyle(focusedStyle);
            setShowDropDown(true);
          }}
          onBlur={() => {
            if (selectClick !== true) {
              props.setDisabled(false); // disables tooltips hover
              props.setOpen(createOpenArray()); // closes all tooltips
              setStyle(notFocusedStyle);
              setShowDropDown(false);
            }
          }}
        />
        {showDropDown === true ? (
          <div
            className="focus:outline-none"
            size="4"
            style={{
              maxWidth: "191.5px",
              maxHeight: "200px",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "#fff",
              overflowY: "scroll",
            }}
            onMouseEnter={() => setSelectClick(true)}
            onMouseLeave={() => setSelectClick(false)}
            name="search"
          >
            <ul>
              {options.map((run) => (
                <li
                  className="text-sm searchbar-option"
                  style={{
                    height: "42px",
                    paddingTop: "10px",
                  }}
                  key={run.name}
                  onClick={() => {
                    setShowDropDown(false); // disables tooltips hover
                    props.setOpen(createOpenArray()); // closes all tooltips
                    setStyle(notFocusedStyle);
                    props.setRunSelection(run.title);
                    props.openRunSelection(run.title);
                  }}
                >
                  <img
                    style={{ height: "20px", paddingLeft: "10px" }}
                    src={returnIcon(run.category)}
                    alt=""
                  />
                  <div>{run.title}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </form>
  );
}

export default SearchBar;
