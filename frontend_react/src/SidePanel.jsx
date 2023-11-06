import { useState, useEffect } from "react";
import right_arrow from "./assets/right_arrow.png";
import ski_lift_picture from "./assets/ski_lift_picture.webp";
import stevens_pass_runs from "./assets/stevens_pass_runs.json";
import { selectIcon } from "./helperFunctions";

function SidePanel(props) {
  const [sidePanelWidth, setPanelWidth] = useState(0);
  const [query, setQuery] = useState(stevens_pass_runs[0]);

  // calculates width of side panel
  function calcWidthSidePanel() {
    let categoryCont = document.querySelector(".categorybtn-cont");
    let searchbarCont = document.querySelector(".searchbar-cont");
    let categoryContWidth = categoryCont.getBoundingClientRect().width;
    let categoryContLeft = categoryCont.getBoundingClientRect().left;
    let searchBarContLeft = searchbarCont.getBoundingClientRect().left;
    let searchBarContWidth = searchbarCont.getBoundingClientRect().width;
    let sidePanelWidth =
      searchBarContLeft -
      categoryContLeft -
      categoryContWidth +
      searchBarContWidth;
    return sidePanelWidth;
  }

  function getQuery(runName) {
    stevens_pass_runs.forEach((run) => {
      if (run.title.toLowerCase() === runName.toLowerCase()) {
        setQuery(run);
      }
    });
  }

  // updates width of side panel whenever the screen resizes
  window.addEventListener("resize", () => {
    setPanelWidth(calcWidthSidePanel());
  });

  useEffect(() => {
    if (props.showPanel === true) {
      setPanelWidth(calcWidthSidePanel());
      getQuery(props.runSelection);
    } else {
      setPanelWidth(0);
    }
  }, [props.showPanel]);

  return (
    <div className="side-panel" style={{ width: sidePanelWidth }}>
      <button
        className="close-panel-btn"
        style={{ right: sidePanelWidth }}
        onClick={() => {
          setPanelWidth(0);
          // allows for sliding animation before setting display to false
          setTimeout(() => {
            props.setShowPanel(false);
          }, 250);
        }}
      >
        <img style={{ height: "10px" }} src={right_arrow} alt="" />
      </button>
      <div>
        <img src={ski_lift_picture} alt="" />
        <div
          className="flex flex-col gap-5"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "20px",
          }}
        >
          <div className="flex justify-between">
            <div>{props.runSelection}</div>
            <div>
              <img
                style={{ height: "20px" }}
                src={selectIcon(query.category)}
                alt="category"
              />
            </div>
          </div>
          {query.category === "chairlift" ? (
            <>
              <hr />
              <div>
                <div>Vertical Rise: {query.lift_data.vertical_rise}</div>
                <div>Riders Per Hour: {query.lift_data.riders_per_hour}</div>
                <div>Chair Type: {query.lift_data.type}</div>
              </div>
            </>
          ) : null}
          <hr />
          <div>See Videos Button</div>
          <hr />
          <div>See Latest Updates</div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
