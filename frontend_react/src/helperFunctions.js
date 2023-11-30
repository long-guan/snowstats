import green_circle from "./assets/green_circle.png";
import blue_square from "./assets/blue_square.png";
import black_diamond from "./assets/black_diamond.png";
import double_black_diamond from "./assets/double_black_diamond.png";
import chair_lift from "./assets/chair_lift.png";

// returns icon depending on category in stevens_pass_runs json file
export function selectIcon(category) {
  if (category === "green") {
    return green_circle;
  } else if (category === "blue") {
    return blue_square;
  } else if (category === "black") {
    return black_diamond;
  } else if (category === "doubleblack") {
    return double_black_diamond;
  } else {
    return chair_lift;
  }
}

export function createOpenArray() {
  let openArray = [];
  for (let i = 0; i <= 49; i++) {
    openArray.push(false);
  }
  return openArray;
}

// check if access token is valid, if invalid,
// request new access token before running the next HTTP request as nextHttpFn
export async function refreshToken(e, nextHttpFn, nextParam = null) {
  console.log("clicked");
  e.preventDefault();
  let currentDateTime = new Date();
  let accessTokenExpiry = localStorage.getItem("access_token_expiry");
  if (accessTokenExpiry === null) {
    nextHttpFn(nextParam);
  }
  // check year
  else if (accessTokenExpiry.slice(0, 4) < currentDateTime.getFullYear()) {
    console.log("need refreshing");
    return getNewAccessToken(nextHttpFn, nextParam);
  }
  // check month
  else if (accessTokenExpiry.slice(5, 7) < currentDateTime.getMonth()) {
    console.log("need refreshing");
    return getNewAccessToken(nextHttpFn, nextParam);
  }
  // check date
  else if (accessTokenExpiry.slice(8, 10) < currentDateTime.getDate()) {
    console.log("need refreshing");
    return getNewAccessToken(nextHttpFn, nextParam);
  }
  // check hour
  else if (accessTokenExpiry.slice(11, 13) < currentDateTime.getHours()) {
    console.log("need refreshing");
    return getNewAccessToken(nextHttpFn, nextParam);
  }
  // check minutes
  else if (accessTokenExpiry.slice(14, 16) < currentDateTime.getMinutes()) {
    console.log("need refreshing");
    return getNewAccessToken(nextHttpFn, nextParam);
  }
  // executes the nextHttpFn if access token is still valid
  else {
    nextHttpFn(nextParam);
  }
}

// sends refresh token to get new access token and executes the nextHttpFn
async function getNewAccessToken(nextHttpFn, nextParam) {
  const response = await fetch(
    `${import.meta.env.VITE_DJANGO_API}/api/login/refresh/`,
    {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify({ refresh: localStorage.getItem("refresh_token") }),
    }
  );
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    nextHttpFn(nextParam);
  }
  // resets localStorage to force user to sign in again
  else {
    localStorage.clear();
    nextHttpFn(nextParam);
  }
}
