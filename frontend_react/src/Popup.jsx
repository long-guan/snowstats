import Popup from "reactjs-popup";

const InfoPopup = (props) => {
  return (
    <Popup
      trigger={
        <button
          className="popup"
          style={{
            left: props.scaleRatio * props.left,
            top: props.scaleRatio * props.top,
          }}
        >
          <div></div>
        </button>
      }
      position={props.position}
      on={["hover", "focus"]}
      open={props.open}
    >
      <div>{props.name}</div>
    </Popup>
  );
};

export default InfoPopup;
