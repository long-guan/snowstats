import chair_lift from "./assets/chair_lift.png";

function ChairLiftsBtn(props) {
  function handleClick() {
    props.toggleOnOff(4);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[4]}
      onClick={handleClick}
    >
      <img src={chair_lift} alt="chair lifts" style={{ height: "20px" }} />{" "}
      Chairlifts
    </div>
  );
}

export default ChairLiftsBtn;
