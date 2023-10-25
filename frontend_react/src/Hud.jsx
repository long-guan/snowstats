import SearchBtn from "./SearchBtn";

function Hud(props) {
  return (
    <div className="hud">
      <SearchBtn runSelection={props.runSelection} />
    </div>
  );
}

export default Hud;
