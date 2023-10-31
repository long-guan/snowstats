import green_circle from "./assets/green_circle.png";

function GreenRunsBtn() {
  return (
    <div className="text-sm category-btn">
      <img src={green_circle} alt="green runs" style={{ height: "20px" }} />{" "}
      Easiest
    </div>
  );
}

export default GreenRunsBtn;
