// INTRODUCTION PAGE
const eyes = document.querySelector(".eyes-default");
const mouth = document.querySelector(".mouth-default");
const sleepFace = document.querySelector(".face-sleepy");
const leftHand = document.querySelector(".left-hand");
const rightHand = document.querySelector(".right-hand");

let idleTimer;
let sleepTimer;

document.addEventListener("mousemove", (event) => {
  const widthOneThird = window.innerWidth / 3;
  const heightOneThird = window.innerHeight / 3;

  let horizontalZone;
  let verticalZone;

  // for Horizontal movement zones
  if (event.clientX < widthOneThird) {
    horizontalZone = "LEFT";
  } else if (event.clientX < widthOneThird * 2) {
    horizontalZone = "MID";
  } else {
    horizontalZone = "RIGHT";
  }

  // for Vertical movement zones
  if (event.clientY < heightOneThird) {
    verticalZone = "UP";
  } else if (event.clientY < heightOneThird * 2) {
    verticalZone = "MID";
  } else {
    verticalZone = "DOWN";
  }

  let moveX = 0;
  let moveY = 0;

  //horizontal movements
  if (horizontalZone === "LEFT") {
    moveX = -7;
  } else if (horizontalZone === "RIGHT") {
    moveX = 7;
  }

  //vertical movements
  if (verticalZone === "UP") {
    moveY = -7;
  } else if (verticalZone === "DOWN") {
    moveY = 7;
  }

  eyes.style.transform = `translate(${moveX}px, ${moveY}px)`;

  //Eyes comming back to center
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    eyes.style.transform = `translate(0px, 0px)`;
  }, 900);

  //Sleep Expression
  clearTimeout(sleepTimer);

  //hide sleep expression
  sleepFace.style.display = "none";

  //show initial expression
  eyes.style.display = "block";
  mouth.style.display = "block";
  leftHand.style.display = "block";
  rightHand.style.display = "block";

  sleepTimer = setTimeout(() => {
    //hiding initial expressions
    eyes.style.display = "none";
    mouth.style.display = "none";
    leftHand.style.display = "none";
    rightHand.style.display = "none";

    //show sleep expression
    sleepFace.style.display = "block";
  }, 5000);
});
