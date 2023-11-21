import Popup from "reactjs-popup";
import { selectIcon } from "./helperFunctions";
import { useState } from "react";
import { createOpenArray } from "./helperFunctions";
import thumbs_up from "./assets/thumbs_up.png";
import thumbs_down from "./assets/thumbs_down.png";

function VideoModal(props) {
  const [videos, setVideos] = useState([]);

  async function getVideos(runId) {
    console.log(import.meta.env.VITE_DJANGO_API);
    const response = await fetch(
      `${import.meta.env.VITE_DJANGO_API}/api/videos/${runId}/`
    );
    if (response.ok) {
      const data = await response.json();
      setVideos(data.videos);
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
        <div className="header flex items-center justify-center gap-1">
          <div style={{ fontWeight: "bold" }}>{props.query.title}</div>
          <img
            style={{ height: "20px" }}
            src={selectIcon(props.query.category)}
            alt="category"
          />
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
                    <span style={{ fontWeight: "bold" }}>username</span>
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
                        >
                          <img src={thumbs_up} alt="" />
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
                        0
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
                        >
                          <img src={thumbs_down} alt="" />
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
    </Popup>
  );
}

export default VideoModal;
