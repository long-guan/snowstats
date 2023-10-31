import double_black_diamond from "./assets/double_black_diamond.png";

function DoubleBlackRunsBtn(props) {
  function handleClick() {
    props.toggleOnOff(3);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[3]}
      onClick={handleClick}
    >
      <img
        src={double_black_diamond}
        alt="double black runs"
        style={{ height: "17px" }}
      />{" "}
      Experts Only
    </div>
  );
}

export default DoubleBlackRunsBtn;
