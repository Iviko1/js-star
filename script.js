window.addEventListener("load", () => {
  const CONTAINER = document.createElement("div");
  const WELCOME = document.createElement("h1");
  const BUTTON = document.createElement("button");
  let animationHeight = window.innerWidth > 768 ? "4rem" : "2rem";
  let HEIGHT = window.innerWidth > 768 ? "20rem" : "10rem";
  WELCOME.innerHTML = "IveX";
  WELCOME.classList.add("welcome");
  CONTAINER.classList.add("container");
  BUTTON.innerText = "Change Color";
  document.body.appendChild(WELCOME);
  document.body.appendChild(CONTAINER);
  document.body.appendChild(BUTTON);
  // Welcome Animation
  WELCOME.animate(
    [
      { transform: "translateY(0)" },
      { transform: `translateY(1rem)` },
      { transform: "translateY(0)" },
    ],
    {
      duration: 2000,
      iterations: Infinity,
    }
  );
  // Box Animation
  let degrees = 360;
  for (let i = 0; i < 24; i++) {
    const box = document.createElement("div");
    box.classList.add(`box`);
    box.animate(
      [
        // KEYFRAMES
        {
          transform: `rotate(${0}deg)`,
          borderRadius: "0%",
          height: HEIGHT,
        },
        {
          transform: `rotate(${degrees}deg)`,
          borderRadius: "50%",
          height: animationHeight,
        },
        {
          transform: `rotate(${0}deg)`,
          borderRadius: "0%",
          height: HEIGHT,
        },
      ],
      {
        // TIMING
        duration: 4000,
        iterations: Infinity,
      }
    );
    degrees -= 15;
    CONTAINER.appendChild(box);
  }
  // Random Color
  const BOXES = document.querySelectorAll(".box");
  BUTTON.addEventListener("click", () => {
    const COLOR =
      "#" + (~~(Math.random() * 2 ** 24)).toString(16).padStart(6, 0);
    WELCOME.style.color = COLOR;
    BOXES.forEach((box) => (box.style.borderColor = COLOR));
    BUTTON.style.color = COLOR;
    BUTTON.style.borderColor = COLOR;
    BUTTON.style.outlineColor = COLOR;
  });
});

// Responsiveness
window.addEventListener("resize", () => {
  animationHeight = window.innerWidth > 768 ? "4rem" : "2rem";
  HEIGHT = window.innerWidth > 768 ? "20rem" : "10rem";

  const BOXES = document.querySelectorAll(".box");
  let degrees = 360;

  BOXES.forEach((box) => {
    box.animate(
      [
        // KEYFRAMES
        {
          transform: `rotate(${0}deg)`,
          borderRadius: "0%",
          height: HEIGHT,
        },
        {
          transform: `rotate(${degrees}deg)`,
          borderRadius: "50%",
          height: animationHeight,
        },
        {
          transform: `rotate(${0}deg)`,
          borderRadius: "0%",
          height: HEIGHT,
        },
      ],
      {
        // TIMING
        duration: 4000,
        iterations: Infinity,
      }
    );
    degrees -= 15;
  });
});
