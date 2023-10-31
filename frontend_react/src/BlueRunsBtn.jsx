import blue_square from "./assets/blue_square.png";

function BlueRunsBtn() {
  return (
    <div className="text-sm category-btn">
      <img src={blue_square} alt="blue runs" style={{ height: "20px" }} /> More
      Difficult
    </div>
  );
}

export default BlueRunsBtn;
