import black_diamond from "./assets/black_diamond.png";

function BlackRunsBtn(props) {
  function handleClick() {
    props.toggleOnOff(2);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[2]}
      onClick={handleClick}
    >
      <img src={black_diamond} alt="black runs" style={{ height: "20px" }} />{" "}
      Advanced
    </div>
  );
}

export default BlackRunsBtn;
