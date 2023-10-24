import ImageMapper from "react-img-mapper";
import stevens_pass_map from "./assets/stevens_pass_map.jpg";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";

function StevensPassMap() {
  const MAP = {
    name: "stevenspassmap",
    areas: stevens_pass_runs,
  };

  return <ImageMapper natural="true" src={stevens_pass_map} map={MAP} />;
}

export default StevensPassMap;
