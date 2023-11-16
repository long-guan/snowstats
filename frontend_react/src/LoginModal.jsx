import Popup from "reactjs-popup";
import { useState } from "react";

function LoginModal(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    const response = await fetch(`${import.meta.env.VITE_DJANGO_API}/token/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
    } else {
      console.log("error logging in");
    }
  };

  return (
    <Popup
      open={props.openLogMod}
      modal
      nested
      // onOpen={() => {}}
      onClose={() => {
        props.setOpenLogMod(false);
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
            props.setOpenLogMod(false);
          }}
        >
          &times;
        </button>
        <div className="header flex items-center justify-center">
          <div style={{ fontWeight: "bold" }}>Sign in</div>
        </div>
        <div
          style={{ height: "290px" }}
          className="flex flex-col items-center justify-center"
        >
          <form
            onSubmit={handleLogin}
            className="content flex flex-col items-center gap-6"
          >
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className="text-base cursor-pointer acc-link">
                Create account
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#4285f4" }}
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
}

export default LoginModal;
