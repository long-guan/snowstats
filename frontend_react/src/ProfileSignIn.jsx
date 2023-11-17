import { useState, useEffect } from "react";
import SignInModal from "./SignInModal";

function ProfileSignIn() {
  const [openLogMod, setOpenLogMod] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setSignedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    const refresh_token = {
      refresh: localStorage.getItem("refresh_token"),
    };
    const response = await fetch(
      `${import.meta.env.VITE_DJANGO_API}/api/token/blacklist/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refresh_token),
      }
    );
    if (response.ok) {
      setSignedIn(false);
      localStorage.clear();
      console.log("logged out");
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      {signedIn ? (
        <button onClick={handleLogout} className="profile-sign-in text-sm">
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => {
            setOpenLogMod(true);
          }}
          className="profile-sign-in text-sm"
        >
          Sign In
        </button>
      )}
      <SignInModal
        setSignedIn={setSignedIn}
        openLogMod={openLogMod}
        setOpenLogMod={setOpenLogMod}
      />
    </div>
  );
}

export default ProfileSignIn;