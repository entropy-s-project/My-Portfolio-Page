// INTRODUCTION PAGE
const eyes = document.querySelector(".eyes-default");
let idleTimer;
document.addEventListener("mousemove", (event) => {

  const widthOneThird = window.innerWidth / 3;
  const heightOneThird = window.innerHeight / 3;

  let horizontalZone;
  let verticalZone;

  // for Horizontal movement zones
  if(event.clientX < widthOneThird){
    horizontalZone = "LEFT";
  }else if (event.clientX < widthOneThird * 2){
    horizontalZone = "MID";
  }else{
    horizontalZone = "RIGHT";
  }

  // for Vertical movement zones
  if(event.clientY < heightOneThird){
    verticalZone = "UP";
  }else if (event.clientY < heightOneThird *2){
    verticalZone = "MID";
  }else{
    verticalZone ="DOWN"
  }

  let moveX = 0;
  let moveY = 0;

  //horizontal movements
  if (horizontalZone === "LEFT"){
    moveX = -7;
  }else if (horizontalZone === "RIGHT"){
    moveX = 7;
  }

  //vertical movements
  if(verticalZone === "UP"){
    moveY = -7;
  } else if (verticalZone === "DOWN"){
    moveY = 7;
  }

  eyes.style.transform = `translate(${moveX}px, ${moveY}px)`

  clearTimeout(idleTimer)
   idleTimer = setTimeout(() =>{
    eyes.style.transform = `translate(0px, 0px)`;
   }, 900);
});

