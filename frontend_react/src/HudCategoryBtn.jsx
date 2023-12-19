function HudCategoryBtn(props) {
  function handleClick() {
    props.toggleOnOff(props.toggleIdx);
  }

  return (
    <div
      className={"text-sm category-btn " + props.toggle[props.toggleIdx]}
      onClick={handleClick}
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{ height: props.height, width: props.height }}
      />{" "}
      {props.btnName}
    </div>
  );
}

export default HudCategoryBtn;
