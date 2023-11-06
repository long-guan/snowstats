import green_circle from "./assets/green_circle.png";
import blue_square from "./assets/blue_square.png";
import black_diamond from "./assets/black_diamond.png";
import double_black_diamond from "./assets/double_black_diamond.png";
import chair_lift from "./assets/chair_lift.png";

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
