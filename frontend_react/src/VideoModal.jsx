import Popup from "reactjs-popup";
import { selectIcon } from "./helperFunctions";
import { useState } from "react";
import { createOpenArray } from "./helperFunctions";

function VideoModal(props) {
  const [videos, setVideos] = useState([]);

  async function getVideos(runId) {
    const response = await fetch(`http://localhost:8000/api/videos/${runId}/`);
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
          style={{ overflowY: "scroll", maxHeight: "92%" }}
        >
          {videos.length > 0 ? (
            videos.map((video) => (
              <iframe
                key={video.id}
                width="560"
                height="315"
                style={{ minHeight: "315px" }}
                src={video.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
