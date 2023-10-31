import chair_lift from "./assets/chair_lift.png";

function ChairLiftsBtn() {
  return (
    <div className="text-sm category-btn">
      <img src={chair_lift} alt="chair lifts" style={{ height: "20px" }} />{" "}
      Chairlifts
    </div>
  );
}

export default ChairLiftsBtn;
