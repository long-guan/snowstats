import { useState } from "react";
import LoginModal from "./LoginModal";

function ProfileSignIn() {
  const [openLogMod, setOpenLogMod] = useState(false);

  return (
    <div
      onClick={() => {
        setOpenLogMod(true);
      }}
    >
      <button className="profile-sign-in text-sm">Sign In</button>
      <LoginModal openLogMod={openLogMod} setOpenLogMod={setOpenLogMod} />
    </div>
  );
}

export default ProfileSignIn;
