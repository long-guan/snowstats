import Popup from "reactjs-popup";
import { useState } from "react";

const normal =
  "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

// const success =
//   "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500";

// const error =
//   "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

function AddVideoModal(props) {
  const [videoLink, setVideoLink] = useState("");
  const [videoLinkInputClass, setVideoLinkInputClass] = useState(normal);

  const handleAddVideo = async (e) => {
    e.preventDefault();

    // const video = {
    //   : username,
    // };
    // const response = await fetch(
    //   `${import.meta.env.VITE_DJANGO_API}/api/user/`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   }
    // );
    // if (response.ok) {
    //   props.setOpenSignUpMod(false);
    //   props.setOpenLogMod(true);
    // } else {
    //   setUsernameClass(error);
    // }
  };

  return (
    <Popup
      open={props.openAddVideoMod}
      modal
      nested
      // onOpen={() => {}}
      onClose={() => {
        props.setOpenSignUpMod(false);
      }}
      contentStyle={{
        width: "50%",
        height: "50%",
        backgroundColor: "#FFF",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
    >
      <div className="modal">
        <button
          className="close"
          onClick={() => {
            props.setOpenAddVideoMod(false);
          }}
        >
          &times;
        </button>
        <div className="header flex items-center justify-center">
          <div style={{ fontWeight: "bold" }}>Add a video</div>
        </div>
        <div
          style={{ height: "200px" }}
          className="flex flex-col items-center justify-center"
        >
          <form
            onSubmit={handleAddVideo}
            className="content flex flex-col items-center gap-6"
          >
            <div>
              <label htmlFor="videolink" className="block text-sm font-medium">
                Youtube Embed Link
              </label>
              <input
                onChange={(e) => setVideoLink(e.target.value)}
                type="text"
                id="videolink"
                className={videoLinkInputClass}
                placeholder="Embedded Youtube Link"
                required
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className="text-base cursor-pointer acc-link">
                Where to find embedded YouTube link
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#4285f4" }}
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Add Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
}

export default AddVideoModal;
