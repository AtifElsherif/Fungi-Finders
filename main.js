const navToggleButton = document.querySelector(
  '[aria-controls="navigation-menu"]'
);
const navMenu = document.querySelector("#navigation-menu");

navToggleButton.addEventListener("click", () => {
  const navStats = navToggleButton.getAttribute("aria-expanded");

  if (navStats === "false") {
    navToggleButton.setAttribute("aria-expanded", "true");
  } else {
    navToggleButton.setAttribute("aria-expanded", "false");
  }
  console.log(navStats);
});
