import ImageMapper from "react-img-mapper";
import stevens_pass_map from "./assets/stevens_pass_map.jpg";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";
import { useState, useEffect } from "react";
import Hud from "./Hud";
import PopupHud from "./PopupHud";
import { createOpenArray } from "./helperFunctions";

function StevensPassMap() {
  const [mapperWidth, setMapperWidth] = useState(null); // sets the width of the client screen
  const [mapperHeight, setMapperHeight] = useState(null);
  const [runSelection, setRunSelection] = useState("");
  const [scaleRatio, setScaleRatio] = useState(null); // used to scale the HUD and PopupHud
  const [open, setOpen] = useState(() => createOpenArray()); // array to toggle tooltip where index associates to the area name
  const [disabled, setDisabled] = useState(false); // toggles the hover to show tooltips
  const [imgClickDisabled, setImgClickDisabled] = useState(false); // allows clicking of runs/lifts

  const MAP = {
    name: "stevenspassmap",
    areas: stevens_pass_runs,
  };

  // returns width of client screen
  const viewWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // toogles on the tooltip of the searched run inside runSelection
  function openRunSelection(runName = runSelection) {
    stevens_pass_runs.forEach((run) => {
      if (run.title.toLowerCase() === runName.toLowerCase()) {
        let openArray = createOpenArray();
        openArray[run.name] = true;
        setOpen(openArray);
      }
    });
  }

  // turns on the tooltip when hover over the area
  const handleEnterHover = (area) => {
    let copyOpen = Array.from(open);
    copyOpen[area.name] = true;
    setOpen(copyOpen);
  };

  const handleClick = (area) => {
    setRunSelection(area.title);
  };

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
        onClick={handleClick}
        onMouseEnter={handleEnterHover}
        responsive={true}
        parentWidth={mapperWidth}
        src={stevens_pass_map}
        map={MAP}
        active={false}
        onImageClick={() => {
          if (imgClickDisabled === false) {
            setOpen(createOpenArray()); // closes all tooltips
            setDisabled(false); // enables hover to show tooltip
          }
        }}
        disabled={disabled} // toggles hover for tooltips
      />
      <Hud
        runSelection={runSelection}
        setRunSelection={setRunSelection}
        mapperHeight={mapperHeight}
        mapperWidth={mapperWidth}
        setOpen={setOpen}
        setDisabled={setDisabled}
        setImgClickDisabled={setImgClickDisabled}
        openRunSelection={openRunSelection}
      />
      <PopupHud
        scaleRatio={scaleRatio}
        mapperHeight={mapperHeight}
        mapperWidth={mapperWidth}
        open={open}
        setRunSelection={setRunSelection}
      />
    </div>
  );
}

export default StevensPassMap;
