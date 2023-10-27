import SearchBtn from "./SearchBtn";

function Hud(props) {
  return (
    <div className="hud">
      <SearchBtn
        runSelection={props.runSelection}
        setRunSelection={props.setRunSelection}
      />
    </div>
  );
}

export default Hud;
