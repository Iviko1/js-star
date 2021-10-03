// Globals
const BOXCOUNT = 24;
const ROTATIONDECREMENT = 15;
const BREAKWIDTH = 480;
const BOXANIMATIONDURATION = 3000;
const TEXTANIMATIONDURATION = 3000;
// Code
window.addEventListener("load", () => {
  const NAMETEXT = document.querySelector(".name");
  const CONTAINER = document.querySelector(".box-container");
  const BUTTON = document.querySelector(".btn");
  let animationHeight = window.innerWidth > BREAKWIDTH ? "4rem" : "2rem";
  let HEIGHT = window.innerWidth > BREAKWIDTH ? "20rem" : "10rem";
  // Name Animation
  NAMETEXT.animate(
    [
      { transform: "translateY(0)" },
      { transform: `translateY(1rem)` },
      { transform: "translateY(0)" },
    ],
    {
      duration: TEXTANIMATIONDURATION,
      iterations: Infinity,
    }
  );
  // Box Animation
  let degrees = 360;
  for (let i = 0; i < BOXCOUNT; i++) {
    const box = document.createElement("div");
    box.classList.add(`box`);
    animateBox(box, HEIGHT, animationHeight, BOXANIMATIONDURATION, degrees);
    degrees -= ROTATIONDECREMENT;
    CONTAINER.appendChild(box);
  }
  // Random Color
  const BOXES = document.querySelectorAll(".box");
  BUTTON.addEventListener("click", () => {
    const COLOR =
      "#" + (~~(Math.random() * 2 ** 24)).toString(16).padStart(6, 0);
    NAMETEXT.style.color = COLOR;
    BOXES.forEach((box) => (box.style.borderColor = COLOR));
    BUTTON.style.color = COLOR;
    BUTTON.style.borderColor = COLOR;
    BUTTON.style.outlineColor = COLOR;
  });
  // Responsiveness
  window.addEventListener("resize", () => {
    animationHeight = window.innerWidth > BREAKWIDTH ? "4rem" : "2rem";
    HEIGHT = window.innerWidth > BREAKWIDTH ? "20rem" : "10rem";
    let degrees = 360;
    BOXES.forEach((box) => {
      animateBox(box, HEIGHT, animationHeight, BOXANIMATIONDURATION, degrees);
      degrees -= ROTATIONDECREMENT;
    });
  });
});

// Box Animation Function
const animateBox = (
  box,
  boxHeight,
  animationHeight,
  animationDuration,
  degrees
) => {
  box.animate(
    [
      // KEYFRAMES
      {
        transform: `rotate(0deg)`,
        borderRadius: "0%",
        height: boxHeight,
      },
      {
        transform: `rotate(${degrees}deg)`,
        borderRadius: "50%",
        height: animationHeight,
      },
      {
        transform: `rotate(360deg)`,
        borderRadius: "0%",
        height: boxHeight,
      },
    ],
    {
      // TIMING
      duration: animationDuration,
      iterations: Infinity,
    }
  );
};
