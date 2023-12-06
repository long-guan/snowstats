import { useState } from "react";

function SnowConditionBtn(props) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={(e) => {
        setSelected(!selected);
        if (e.target.style.backgroundColor != "") {
          e.target.style.backgroundColor = "";
        } else {
          e.target.style.backgroundColor = "#04ff006d";
        }
      }}
      type="button"
      className="snow-condition-btn"
    >
      {props.condition}
    </button>
  );
}

export default SnowConditionBtn;
