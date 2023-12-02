import Popup from "reactjs-popup";
import { selectIcon } from "./helperFunctions";
import { useState } from "react";
import { createOpenArray } from "./helperFunctions";
import { refreshToken } from "./helperFunctions";
import add_comment from "./assets/add_comment.png";
import AddComModal from "./AddComMod";

function ConditionModal(props) {
  const [review, setReview] = useState([]);
  const [openAddComMod, setOpenAddComMod] = useState(false);

  async function getComments(runId) {
    // if logged in, send access_token to see which videos user liked/disliked
    let header = new Headers({
      "Content-type": "application/json",
    });
    if (localStorage.getItem("access_token") !== null) {
      header = new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-type": "application/json",
      });
    }
    const response = await fetch(
      `${import.meta.env.VITE_DJANGO_API}/api/videos/${runId}/`,
      {
        method: "GET",
        headers: header,
      }
    );
    if (response.ok) {
      const data = await response.json();
      let combineVideosLikes = [];
      for (let i = 0; i < data.videos.length; i++) {
        combineVideosLikes.push(
          Object.assign(data.videos[i], data.like_status[i])
        );
      }
      setComments(combineVideosLikes);
    }
  }

  return (
    <Popup
      open={props.openComMod}
      modal
      nested
      onOpen={() => {
        // refreshToken(null, getComments, props.query.name);
        props.setOpen(createOpenArray()); // closes all tooltips
      }}
      onClose={() => {
        props.setOpenComMod(false);
      }}
      contentStyle={{
        width: "85%",
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
          className="content flex flex-col items-center"
          style={{
            overflowY: "scroll",
            maxHeight: "92%",
            paddingBottom: "20px",
            maxWidth: "500px",
          }}
        ></div>
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
