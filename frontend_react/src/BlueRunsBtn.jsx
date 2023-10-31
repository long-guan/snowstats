import blue_square from "./assets/blue_square.png";

function BlueRunsBtn(props) {
  function handleClick() {
    props.toggleOnOff(1);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[1]}
      onClick={handleClick}
    >
      <img src={blue_square} alt="blue runs" style={{ height: "20px" }} /> More
      Difficult
    </div>
  );
}

export default BlueRunsBtn;
