import SearchBar from "./SearchBar";
import ProfileSignIn from "./ProfileSignIn";
import GreenRunsBtn from "./GreenRunsBtn";
import BlueRunsBtn from "./BlueRunsBtn";
import BlackRunsBtn from "./BlackRunsBtn";
import DoubleBlackRunsBtn from "./DoubleBlackRunsBtn";
import ChairLiftsBtn from "./ChairLifts";

function Hud(props) {
  return (
    <div className="hud">
      <ProfileSignIn />
      <div className="flex flex-row gap-1">
        <GreenRunsBtn />
        <BlueRunsBtn />
        <BlackRunsBtn />
        <DoubleBlackRunsBtn />
        <ChairLiftsBtn />
      </div>
      <SearchBar
        runSelection={props.runSelection}
        setRunSelection={props.setRunSelection}
      />
    </div>
  );
}

export default Hud;
