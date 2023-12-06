import Popup from "reactjs-popup";
import { selectIcon } from "./helperFunctions";
import { useState } from "react";
import { createOpenArray } from "./helperFunctions";
import { refreshToken } from "./helperFunctions";
import add_comment from "./assets/add_comment.png";
import AddComModal from "./AddComMod";

function ConditionModal(props) {
  const [reviews, setReviews] = useState([]);
  const [openAddComMod, setOpenAddComMod] = useState(false);

  async function getReviews(runId) {
    let header = new Headers({
      "Content-type": "application/json",
    });

    const response = await fetch(
      `${import.meta.env.VITE_DJANGO_API}/api/conditions/${runId}/`,
      {
        method: "GET",
        headers: header,
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.reviews);
      setReviews(data.reviews);
    }
  }

  return (
    <Popup
      open={props.openComMod}
      modal
      nested
      onOpen={() => {
        refreshToken(null, getReviews, props.query.name);
        props.setOpen(createOpenArray()); // closes all tooltips
      }}
      onClose={() => {
        props.setOpenComMod(false);
      }}
      contentStyle={{
        width: "60%",
        height: "85%",
        backgroundColor: "#FFF",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
    >
      <div className="modal">
        <button
          className="close"
          onClick={() => {
            props.setOpenComMod(false);
          }}
        >
          &times;
        </button>
        <div
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
          className="header flex items-center justify-between"
        >
          <div className="flex items-center justify-center gap-1">
            {" "}
            <div style={{ fontWeight: "bold" }}>{props.query.title}</div>
            <img
              style={{ height: "20px" }}
              src={selectIcon(props.query.category)}
              alt="category"
            />
            <div>| Conditions</div>
          </div>
          <Popup
            trigger={() => (
              <div
                className="flex items-center justify-center cursor-pointer add-video-btn"
                style={{
                  borderRadius: "18px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(26, 115, 232)",
                  width: "36px",
                  height: "36px",
                }}
                onClick={() => setOpenAddComMod(true)}
              >
                <button>
                  <img
                    style={{ height: "20px" }}
                    src={add_comment}
                    alt="add video"
                  />
                </button>
              </div>
            )}
            position="bottom center"
            closeOnDocumentClick
            on={["hover", "focus"]}
            contentStyle={{
              textAlign: "center",
              maxWidth: "200px",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <span>Add a review on the conditions</span>
          </Popup>
        </div>
        <div
          className="content flex flex-col items-center justify-center"
          style={{
            width: "100%",
          }}
        >
          {reviews.length > 0 ? (
            <div
              style={{
                overflowY: "scroll",
                maxHeight: "500px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              {reviews.map((review) => (
                <div className="flex flex-col gap-2" key={review.id}>
                  <div className="flex justify-between">
                    <div style={{ fontWeight: "bold" }}>
                      @{review.user.username}
                    </div>
                    <div style={{ color: "rgb(101, 110, 94)" }}>
                      {review.date}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                      Comment:{" "}
                    </span>
                    <span>{review.comment}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <div
                      style={{
                        fontSize: "15px",
                        color: "rgb(26, 115, 232)",
                        fontWeight: "bold",
                      }}
                    >
                      Snow Conditions:{" "}
                    </div>
                    {review.snow_condition.map((condition) => (
                      <div className="snow-condition" key={condition.category}>
                        {condition.category}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <div
                      style={{
                        fontSize: "15px",
                        color: "rgb(95, 26, 232)",
                        fontWeight: "bold",
                      }}
                    >
                      Trail Features:{" "}
                    </div>
                    {review.trail_feature.map((feature) => (
                      <div className="trail-feature" key={feature.category}>
                        {feature.category}
                      </div>
                    ))}
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <div>There are currently no reviews on the conditions 😔</div>
          )}
        </div>
      </div>
      <AddComModal
        query={props.query}
        openAddComMod={openAddComMod}
        setOpenAddComMod={setOpenAddComMod}
      />
    </Popup>
  );
}

export default ConditionModal;
