import Popup from "reactjs-popup";

const InfoPopup = (props) => {
  return (
    <Popup
      trigger={
        <div
          className="popup-dot-locator"
          style={{
            left: props.scaleRatio * props.left,
            top: props.scaleRatio * props.top,
          }}
        ></div>
      }
      position={props.position}
      open={props.open}
      contentStyle={{
        width: "auto",
        backgroundColor: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
        position: "absolute",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        borderRadius: "10px",
      }}
      arrowStyle={{
        color: "beige",
      }}
      closeOnDocumentClick={false}
    >
      <div>{props.name}</div>
    </Popup>
  );
};

export default InfoPopup;
