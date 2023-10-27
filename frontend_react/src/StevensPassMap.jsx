import ImageMapper from "react-img-mapper";
import stevens_pass_map from "./assets/stevens_pass_map.jpg";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";
import { useState, useEffect } from "react";
import Hud from "./Hud";
import PopupHud from "./PopupHud";

function createOpenArray() {
  let openArray = [];
  for (let i = 0; i <= 49; i++) {
    openArray.push(false);
  }
  return openArray;
}

function StevensPassMap() {
  const [mapperWidth, setMapperWidth] = useState(null); // sets the width of the client screen
  const [mapperHeight, setMapperHeight] = useState(null);
  const [runSelection, setRunSelection] = useState("");
  const [scaleRatio, setScaleRatio] = useState(null); // used to scale the HUD and PopupHud
  const [open, setOpen] = useState(createOpenArray); // array to toggle tooltip where index associates to the area name

  const MAP = {
    name: "stevenspassmap",
    areas: stevens_pass_runs,
  };

  // returns width of client screen
  const viewWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // turns on the tooltip when hover over the area
  const handleEnterHover = (area) => {
    let copyOpen = Array.from(open);
    copyOpen[area.name] = true;
    setOpen(copyOpen);
  };

  // turns off the tooltip when leaving the area
  function handleLeaveHover(area) {
    let copyOpen = Array.from(open);
    copyOpen[area.name] = false;
    setOpen(copyOpen);
  }

  // updates dimensions whenever the screen resizes
  window.addEventListener("resize", () => {
    setMapperWidth(window.innerWidth);
    setMapperHeight(viewWidth * (1452 / 2400));
    setScaleRatio(viewWidth / 2400);
  });

  useEffect(() => {
    setMapperWidth(viewWidth); // sets initial screen width
    setMapperHeight(viewWidth * (1452 / 2400)); // trail map is 2400x1452
    setScaleRatio(viewWidth / 2400);
  }, []);

  return (
    <div>
      <ImageMapper
        onClick={(e) => setRunSelection(e.title)}
        onMouseEnter={handleEnterHover}
        onMouseLeave={handleLeaveHover}
        responsive={true}
        parentWidth={mapperWidth}
        src={stevens_pass_map}
        map={MAP}
        active={false}
      />
      <Hud
        runSelection={runSelection}
        setRunSelection={setRunSelection}
        mapperHeight={mapperHeight}
        mapperWidth={mapperWidth}
      />
      <PopupHud
        scaleRatio={scaleRatio}
        mapperHeight={mapperHeight}
        mapperWidth={mapperWidth}
        open={open}
      />
    </div>
  );
}

export default StevensPassMap;
