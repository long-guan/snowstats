import ImageMapper from "react-img-mapper";
import stevens_pass_map from "./assets/stevens_pass_map.jpg";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";
import { useState, useEffect } from "react";
import Hud from "./Hud";

function StevensPassMap() {
  const [mapperWidth, setMapperWidth] = useState(null); // sets the width of the client screen
  const [runSelection, setRunSelection] = useState("");

  const MAP = {
    name: "stevenspassmap",
    areas: stevens_pass_runs,
  };

  // returns width of client screen
  const viewWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  function handleSelection(area) {
    setRunSelection(area.title);
  }

  // updates mapperWidth whenever the client screen resizes
  window.addEventListener("resize", () => {
    setMapperWidth(window.innerWidth);
  });

  useEffect(() => {
    setMapperWidth(viewWidth);
  }, []);

  return (
    <div>
      <ImageMapper
        onClick={handleSelection}
        responsive="true"
        parentWidth={mapperWidth}
        src={stevens_pass_map}
        map={MAP}
        // stayHighlighted="true"
      />
      <Hud runSelection={runSelection} />
    </div>
  );
}

export default StevensPassMap;
