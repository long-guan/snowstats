import SearchBar from "./SearchBar";
import ProfileSignIn from "./ProfileSignIn";
import GreenRunsBtn from "./GreenRunsBtn";
import BlueRunsBtn from "./BlueRunsBtn";
import BlackRunsBtn from "./BlackRunsBtn";
import DoubleBlackRunsBtn from "./DoubleBlackRunsBtn";
import ChairLiftsBtn from "./ChairLiftsBtn";

function Hud(props) {
  function openPopups(indexStart, indexEnd) {
    let openArray = [];
    for (let i = 0; i <= 49; i++) {
      if (i >= indexStart && i <= indexEnd) {
        openArray.push(true);
      } else {
        openArray.push(false);
      }
    }
    props.setOpen(openArray);
  }

  function closePopups() {
    let openArray = [];
    for (let i = 0; i <= 49; i++) {
      openArray.push(false);
    }
    return openArray;
  }

  function toggleOnOff(idx) {
    if (props.toggle[idx] === "") {
      props.setDisabled(true);
      // props.setImgClickDisabled(true);
      let newToggle = ["", "", "", "", ""];
      newToggle[idx] = "underline decoration-2";
      props.setToggle(newToggle);
      // green runs
      if (idx === 0) {
        openPopups(0, 3);
      }
      // blue runs
      else if (idx === 1) {
        openPopups(4, 22);
      }
      // black runs
      else if (idx === 2) {
        openPopups(23, 31);
      }
      // double black runs
      else if (idx === 3) {
        openPopups(32, 41);
      }
      // chairlifts
      else {
        openPopups(42, 49);
      }
    } else {
      props.setDisabled(false);
      props.setImgClickDisabled(false);
      props.setToggle(["", "", "", "", ""]);
      props.setOpen(closePopups());
    }
  }

  return (
    <div className="hud">
      <ProfileSignIn />
      <div className="flex flex-row gap-1 categorybtn-cont">
        <GreenRunsBtn toggle={props.toggle} toggleOnOff={toggleOnOff} />
        <BlueRunsBtn toggle={props.toggle} toggleOnOff={toggleOnOff} />
        <BlackRunsBtn toggle={props.toggle} toggleOnOff={toggleOnOff} />
        <DoubleBlackRunsBtn toggle={props.toggle} toggleOnOff={toggleOnOff} />
        <ChairLiftsBtn toggle={props.toggle} toggleOnOff={toggleOnOff} />
      </div>
      <SearchBar
        openRunSelection={props.openRunSelection}
        runSelection={props.runSelection}
        setRunSelection={props.setRunSelection}
        setDisabled={props.setDisabled}
        setOpen={props.setOpen}
        setToggle={props.setToggle}
        showPanel={props.showPanel}
        setShowPanel={props.setShowPanel}
      />
    </div>
  );
}

export default Hud;
