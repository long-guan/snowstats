import black_diamond from "./assets/black_diamond.png";

function BlackRunsBtn() {
  return (
    <div className="text-sm category-btn">
      <img src={black_diamond} alt="black runs" style={{ height: "20px" }} />{" "}
      Advanced
    </div>
  );
}

export default BlackRunsBtn;
