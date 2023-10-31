import green_circle from "./assets/green_circle.png";

function GreenRunsBtn(props) {
  function handleClick() {
    props.toggleOnOff(0);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[0]}
      onClick={handleClick}
    >
      <img
        src={green_circle}
        alt="green runs"
        style={{ height: "20px", backgroundColor: props.toggle }}
      />{" "}
      Easiest
    </div>
  );
}

export default GreenRunsBtn;
