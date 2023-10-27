import SearchBar from "./SearchBar";

function Hud(props) {
  return (
    <div className="hud">
      <SearchBar
        runSelection={props.runSelection}
        setRunSelection={props.setRunSelection}
      />
    </div>
  );
}

export default Hud;
