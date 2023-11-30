import Popup from "reactjs-popup";
import { selectIcon } from "./helperFunctions";
import { useState } from "react";
import { createOpenArray } from "./helperFunctions";
import thumbs_up_selected from "./assets/thumbs_up_selected.png";
import thumbs_up_unselected from "./assets/thumbs_up_unselected.png";
import thumbs_down_selected from "./assets/thumbs_down_selected.png";
import thumbs_down_unselected from "./assets/thumbs_down_unselected.png";
import add_video from "./assets/add_video.png";
import AddVideoModal from "./AddVideoMod";
import { refreshToken } from "./helperFunctions";

function VideoModal(props) {
  const [videos, setVideos] = useState([]);
  const [openAddVideoMod, setOpenAddVideoMod] = useState(false);

  async function getVideos(runId) {
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
      console.log(data);
      let combineVideosLikes = [];
      for (let i = 0; i < data.videos.length; i++) {
        combineVideosLikes.push(
          Object.assign(data.videos[i], data.like_status[i])
        );
      }
      setVideos(combineVideosLikes);
    }
  }

  function updateVideoLikes(video_id, apiData) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id === video_id) {
        let copyVideos = Array.from(videos);
        if (apiData.message === "video liked") {
          copyVideos[i].vote.likes += 1;
          copyVideos[i].vote.total += 1;
          copyVideos[i].like_status = true;
        } else if (apiData.message === "video unliked") {
          copyVideos[i].vote.likes -= 1;
          copyVideos[i].vote.total -= 1;
          copyVideos[i].like_status = false;
        } else if (
          apiData.message === "video liked and removed user from Dislike"
        ) {
          copyVideos[i].vote.likes += 1;
          copyVideos[i].vote.dislikes -= 1;
          copyVideos[i].vote.total += 2;
          copyVideos[i].like_status = true;
          copyVideos[i].dislike_status = false;
        } else if (apiData.message === "video disliked") {
          copyVideos[i].vote.dislikes += 1;
          copyVideos[i].vote.total -= 1;
          copyVideos[i].dislike_status = true;
        } else if (apiData.message === "video undisliked") {
          copyVideos[i].vote.dislikes -= 1;
          copyVideos[i].vote.total += 1;
          copyVideos[i].dislike_status = false;
        } else if (
          apiData.message === "video disliked and removed user from Like"
        ) {
          copyVideos[i].vote.likes -= 1;
          copyVideos[i].vote.dislikes += 1;
          copyVideos[i].vote.total -= 2;
          copyVideos[i].dislike_status = true;
          copyVideos[i].like_status = false;
        }
        return setVideos(copyVideos);
      }
    }
  }

  async function likeVideo(video_id) {
    if (localStorage.getItem("access_token") === null) {
      alert("Please sign in to like a video");
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_DJANGO_API}/api/videos/like/${video_id}/`,
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-type": "application/json",
          }),
          body: JSON.stringify({ username: localStorage.getItem("username") }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        updateVideoLikes(video_id, data);
      }
    }
  }

  async function dislikeVideo(video_id) {
    if (localStorage.getItem("access_token") === null) {
      alert("Please sign in to dislike a video");
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_DJANGO_API}/api/videos/dislike/${video_id}/`,
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-type": "application/json",
          }),
          body: JSON.stringify({ username: localStorage.getItem("username") }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        updateVideoLikes(video_id, data);
      }
    }
  }

  return (
    <Popup
      open={props.openVidMod}
      modal
      nested
      onOpen={() => {
        getVideos(props.query.name);
        props.setOpen(createOpenArray()); // closes all tooltips
      }}
      onClose={() => {
        props.setOpenVidMod(false);
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
            props.setOpenVidMod(false);
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
                onClick={() => setOpenAddVideoMod(true)}
              >
                <button>
                  <img
                    style={{ height: "20px" }}
                    src={add_video}
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
              maxWidth: "100px",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <span>Add video</span>
          </Popup>
        </div>
        <div
          className="content flex flex-col items-center gap-10"
          style={{
            overflowY: "scroll",
            maxHeight: "92%",
            paddingBottom: "20px",
          }}
        >
          {videos.length > 0 ? (
            videos.map((video) => (
              <div
                className="flex flex-col justify-center items-center gap-2"
                style={{
                  backgroundColor: "black",
                  width: "600px",
                  minHeight: "370px",

                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
                key={video.id}
              >
                <iframe
                  width="560"
                  height="315"
                  style={{ minHeight: "315px" }}
                  src={video.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div
                  style={{
                    width: "100%",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                  className="flex justify-between"
                >
                  <div
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "12px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Added by:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {video.user.username}
                    </span>
                  </div>
                  <div className="flex">
                    <Popup
                      trigger={() => (
                        <div
                          className="flex justify-center items-center thumbs-up"
                          style={{
                            minWidth: "60px",
                            borderRightStyle: "solid",
                            borderRightColor: "black",
                            borderRightWidth: "1px",
                            borderTopLeftRadius: "12px",
                            borderBottomLeftRadius: "12px",
                          }}
                          onClick={(e) => {
                            refreshToken(e, likeVideo, video.id);
                          }}
                        >
                          {video.like_status === true ? (
                            <img
                              style={{ height: "20px" }}
                              src={thumbs_up_selected}
                              alt="thumbs up filled in"
                            />
                          ) : (
                            <img
                              style={{ height: "20px" }}
                              src={thumbs_up_unselected}
                              alt="thumbs up outline"
                            />
                          )}
                        </div>
                      )}
                      position="bottom center"
                      closeOnDocumentClick
                      on={["hover", "focus"]}
                      contentStyle={{
                        textAlign: "center",
                        boxShadow:
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                      }}
                    >
                      <span>Like for accuracy and video quality</span>
                    </Popup>
                    <div
                      className="flex justify-center items-center"
                      style={{ minWidth: "30px", backgroundColor: "#fff" }}
                    >
                      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        {video.vote.total}
                      </div>
                    </div>
                    <Popup
                      trigger={() => (
                        <div
                          className="flex justify-center items-center thumbs-up"
                          style={{
                            minWidth: "60px",
                            borderLeftStyle: "solid",
                            borderLeftColor: "black",
                            borderLeftWidth: "1px",
                            borderTopRightRadius: "12px",
                            borderBottomRightRadius: "12px",
                          }}
                          onClick={(e) => {
                            refreshToken(e, dislikeVideo, video.id);
                          }}
                        >
                          {video.dislike_status === true ? (
                            <img
                              style={{ height: "20px" }}
                              src={thumbs_down_selected}
                              alt="thumbs down filled in"
                            />
                          ) : (
                            <img
                              style={{ height: "20px" }}
                              src={thumbs_down_unselected}
                              alt="thumbs down outline"
                            />
                          )}
                        </div>
                      )}
                      position="bottom center"
                      closeOnDocumentClick
                      on={["hover", "focus"]}
                      contentStyle={{
                        textAlign: "center",
                        boxShadow:
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                      }}
                    >
                      <span>Dislike for inaccuracy and poor video quality</span>
                    </Popup>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>There are currently no videos 😔</div>
          )}
        </div>
      </div>
      <AddVideoModal
        openAddVideoMod={openAddVideoMod}
        setOpenAddVideoMod={setOpenAddVideoMod}
        query={props.query}
      />
    </Popup>
  );
}

export default VideoModal;
