import Popup from "reactjs-popup";
import { useState } from "react";
import { refreshToken } from "./helperFunctions";
import SnowConditionBtn from "./SnowConditionBtn";

const normal =
  "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

// const success =
//   "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500";

// const error =
//   "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

function AddComModal(props) {
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [snowConditions, setSnowConditions] = useState([]);
  const [trailFeatures, setTrailFeatures] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false); // used to track if form is successfully submitted

  const handleAddCom = async () => {
    const data = {
      date: date,
      runId: props.query.name,
      userId: localStorage.getItem("user_id"),
      comment: comment,
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
        height: "75%",
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
        <div style={{ height: "100%" }} className="flex flex-col">
          {successMsg === true ? (
            <div
              className="p-4 mb-4 text-base text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span className="font-medium">Review successfully added 😊</span>
            </div>
          ) : (
            <form
              style={{
                paddingTop: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onSubmit={(e) => refreshToken(e, handleAddCom)}
              className="content flex flex-col gap-6"
            >
              <div style={{ maxWidth: "140px" }} className="flex flex-col">
                <label
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                  htmlFor="date"
                  className="block text-sm font-medium"
                >
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
              <div className="flex flex-col">
                <label
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                  htmlFor="comment"
                  className="block text-sm font-medium"
                >
                  Comment:
                </label>
                <textarea
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  id="comment"
                  rows="4"
                  style={{ width: "100%", padding: "5px" }}
                  className={normal}
                  required
                  placeholder="Share your thoughts so others know what to expect"
                ></textarea>
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Snow Conditions
                </div>
                <div className="flex gap-1 flex-wrap">
                  <SnowConditionBtn condition="Champagne Powder" />
                  <SnowConditionBtn condition="Deep" />
                  <SnowConditionBtn condition="Pow" />
                  <SnowConditionBtn condition="Groomers" />
                  <SnowConditionBtn condition="Slush" />
                  <SnowConditionBtn condition="Wet" />
                  <SnowConditionBtn condition="Choppy" />
                  <SnowConditionBtn condition="Corn" />
                  <SnowConditionBtn condition="Mashed Potatoes" />
                  <SnowConditionBtn condition="Moguls" />
                  <SnowConditionBtn condition="Hard Pack" />
                  <SnowConditionBtn condition="Dust on Crust" />
                  <SnowConditionBtn condition="Cascade Concrete" />
                  <SnowConditionBtn condition="Icy" />
                </div>
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Trail Features
                </div>
                <div className="flex gap-1 flex-wrap">
                  <button type="button" className="trail-condition-btn">
                    Crowded
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Narrow
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Wide
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Side hits
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Cat Track
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Flat
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Straight
                  </button>
                  <button type="button" className="trail-condition-btn">
                    Curvy
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-1">
                <button
                  type="submit"
                  style={{ backgroundColor: "#4285f4" }}
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Add Review
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
