import double_black_diamond from "./assets/double_black_diamond.png";

function DoubleBlackRunsBtn() {
  return (
    <div className="text-sm category-btn">
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
