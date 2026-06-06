// INTRODUCTION PAGE
const eyes = document.querySelector(".eyes-default");
const mouth = document.querySelector(".mouth-default");
const sleepFace = document.querySelector(".face-sleepy");
const leftHand = document.querySelector(".left-hand");
const rightHand = document.querySelector(".right-hand");
const hiBubble = document.querySelector(".greeting-hi");
const Zzzz = document.querySelector(".ZZzz");
const hairHitbox = document.querySelector(".hair-hitbox");
const headPat = document.querySelector(".head-pat");
const faceHitbox = document.querySelector(".face-hitbox");
const faceTouch = document.querySelector(".touch-face");
const drawnReactionOne = document.querySelector(".suprise-1");
const hiFive = document.querySelector(".Hi-five");
const drawnReactionTwo = document.querySelector(".suprise-3");
const drawnReactionThree = document.querySelector(".suprise-2");
const rightHitbox = document.querySelector(".right-hand-hitbox");
const leftHitbox = document.querySelector(".left-hand-hitbox");
const portfoliobtn = document.querySelector(".portfolio-btn");
const stlPortfolioBtn = document.querySelector(".selectportfolio");
const githubbtn = document.querySelector(".github-btn");
const stlGithubBtn = document.querySelector(".selectgithub");

let idleTimer;
let sleepTimer;
let isSleeping = false;

function startSleepTimer() {
  clearTimeout(sleepTimer);

  sleepTimer = setTimeout(() => {
    //hiding initial expressions
    isSleeping = true;
    eyes.style.display = "none";
    mouth.style.display = "none";
    leftHand.style.opacity = "0";
    rightHand.style.opacity = "0";

    //show sleep expression
    sleepFace.style.display = "block";
    Zzzz.style.opacity = "1";
  }, 6000);
}
sleepFace.style.display = "none";
startSleepTimer();

document.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = ((event.clientX - centerX) / centerX) * 10;
  const moveY = ((event.clientY - centerY) / centerY) * 10;

  eyes.style.transform = `translate(${moveX}px, ${moveY}px)`;

  //Eyes comming back to center
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    eyes.style.transform = `translate(0px, 0px)`;
  }, 900);
  if (isSleeping) {
    //WAKE UP AFTER MOVEMENT
    sleepFace.style.display = "none";
    Zzzz.style.opacity = "0";
    eyes.style.display = "block";
    mouth.style.display = "block";
    leftHand.style.opacity = "1";
    rightHand.style.opacity = "1";
    isSleeping = false;
  }
  //sleep counter restart
  startSleepTimer();
});
//head-pat expression
hairHitbox.addEventListener("mouseenter", () => {
  headPat.style.display = "block";
  drawnReactionOne.style.display = "block";

  eyes.style.display = "none";
  mouth.style.display = "none";
});

hairHitbox.addEventListener("mouseleave", () => {
  headPat.style.display = "none";
  drawnReactionOne.style.display = "none";

  eyes.style.display = "block";
  mouth.style.display = "block";
});

//touch face expression
faceHitbox.addEventListener("mouseenter", () => {
  faceTouch.style.display = "block";

  eyes.style.display = "none";
  mouth.style.display = "none";
});
faceHitbox.addEventListener("mouseleave", () => {
  faceTouch.style.display = "none";

  eyes.style.display = "block";
  mouth.style.display = "block";
});

// HI BUBBLE TO APPREAR
setTimeout(() => {
  hiBubble.style.opacity = "1";
  setTimeout(() => {
    hiBubble.style.opacity = "0";
  }, 2500);
}, 1500);

//Hi Five feature
//show Hi-five
function showHiFive() {
  eyes.style.display = "none";
  mouth.style.display = "none";

  hiFive.style.display = "block";
  drawnReactionTwo.style.display = "block";
}

rightHitbox.addEventListener("mouseenter", showHiFive);
leftHitbox.addEventListener("mouseenter", showHiFive);

//hide Hi-five

function hideHiFive() {
  eyes.style.display = "block";
  mouth.style.display = "block";

  hiFive.style.display = "none";
  drawnReactionTwo.style.display = "none";
}

rightHitbox.addEventListener("mouseleave", hideHiFive);
leftHitbox.addEventListener("mouseleave", hideHiFive);

//portfolio button rection
portfoliobtn.addEventListener("mouseenter", () => {
  eyes.style.display = "none";
  mouth.style.display = "none";

  stlPortfolioBtn.style.display = "block";
  drawnReactionTwo.style.display = "block";
  drawnReactionThree.style.display = "block";
});

portfoliobtn.addEventListener("mouseleave", () => {
  stlPortfolioBtn.style.display = "none";
  drawnReactionTwo.style.display = "none";
  drawnReactionThree.style.display = "none";

  eyes.style.display = "block";
  mouth.style.display = "block";
});

//github button reaction
githubbtn.addEventListener("mouseenter", () => {
  stlGithubBtn.style.display = "block";

  eyes.style.display = "none";
  mouth.style.display = "none";
});
githubbtn.addEventListener("mouseleave", () => {
  eyes.style.display = "block";
  mouth.style.display = "block";

  stlGithubBtn.style.display = "none";
});
