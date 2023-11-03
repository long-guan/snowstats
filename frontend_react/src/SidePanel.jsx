import { useState, useEffect } from "react";
import right_arrow from "./assets/right_arrow.png";

function SidePanel(props) {
  const [sidePanelWidth, setPanelWidth] = useState(0);

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

  // updates width of side panel whenever the screen resizes
  window.addEventListener("resize", () => {
    setPanelWidth(calcWidthSidePanel());
  });

  useEffect(() => {
    if (props.panelDisplay === true) {
      setPanelWidth(calcWidthSidePanel());
    } else {
      setPanelWidth(0);
    }
  }, [props.pandelDisplay]);

  return (
    <div className="side-panel" style={{ width: sidePanelWidth }}>
      <button
        className="close-panel-btn"
        style={{ right: sidePanelWidth }}
        onClick={() => {
          setPanelWidth(0);
          // allows for sliding animation before setting display to false
          setTimeout(() => {
            props.setShowPanelDisplay(false);
          }, 250);
        }}
      >
        <img style={{ height: "10px" }} src={right_arrow} alt="" />
      </button>
    </div>
  );
}

export default SidePanel;
