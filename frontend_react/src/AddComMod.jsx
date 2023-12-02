import Popup from "reactjs-popup";
import { useState } from "react";
import { refreshToken } from "./helperFunctions";

const normal =
  "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

// const success =
//   "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500";

// const error =
//   "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

function AddComModal(props) {
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [successMsg, setSuccessMsg] = useState(false); // used to track if form is successfully submitted

  const handleAddCom = async () => {
    const data = {
      src: comment,
      runId: props.query.name,
      userId: localStorage.getItem("user_id"),
    };
    const response = await fetch(
      `${import.meta.env.VITE_DJANGO_API}/api/videos/`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-type": "application/json",
        }),
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      setSuccessMsg(true);
      setTimeout(() => {
        props.setOpenAddVideoMod(false);
        setSuccessMsg(false);
        setComment("");
      }, 1500);
      // add to video to Video Modal
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <Popup
      open={props.openAddComMod}
      modal
      nested
      // onOpen={() => {}}
      onClose={() => {
        props.setOpenAddComMod(false);
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
            props.setOpenAddComMod(false);
          }}
        >
          &times;
        </button>
        <div className="header flex items-center justify-center">
          <div style={{ fontWeight: "bold" }}>
            Add a review for {props.query.title}
          </div>
        </div>
        <div
          style={{ height: "280px" }}
          className="flex flex-col items-center justify-center"
        >
          {successMsg === true ? (
            <div
              className="p-4 mb-4 text-base text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span className="font-medium">Review successfully added 😊</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => refreshToken(e, handleAddCom)}
              className="content flex flex-col items-center gap-6"
            >
              <div
                style={{ width: "400px", maxWidth: "400px" }}
                className="flex flex-col"
              >
                <label htmlFor="date" className="block text-sm font-medium">
                  Date
                </label>
                <input
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  type="date"
                  id="date"
                  className={normal}
                  required
                />
              </div>
              <div
                style={{ width: "400px", maxWidth: "400px" }}
                className="flex flex-col"
              >
                <label htmlFor="comment" className="block text-sm font-medium">
                  Review
                </label>
                <input
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  type="text"
                  id="comment"
                  className={normal}
                  required
                  placeholder="Share your thoughts so others know what to expect"
                />
              </div>
              <div>
                <h3>Snow Description</h3>
                <div className="flex gap-1">
                  <div>Champagne Powder</div>
                  <div>Deep</div>
                  <div>Pow</div>
                  <div>Groomers</div>
                  <div>Slush</div>
                  <div>Wet</div>
                  <div>Choppy</div>
                  <div>Corn</div>
                  <div>Mashed Potatoes</div>
                  <div>Moguls</div>
                  <div>Hard Pack</div>
                  <div>Dust on Crust</div>
                  <div>Cascade Concrete</div>
                  <div>Icy</div>
                </div>
              </div>
              <div>
                <h3>Trail Features</h3>
                <div className="flex gap-1">
                  <div>Crowded</div>
                  <div>Narrow</div>
                  <div>Wide</div>
                  <div>Side hits</div>
                  <div>Cat Track</div>
                  <div>Flat</div>
                  <div>Straight</div>
                  <div>Curvy</div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-1">
                <button
                  type="submit"
                  style={{ backgroundColor: "#4285f4" }}
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Add Video
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Popup>
  );
}

export default AddComModal;
