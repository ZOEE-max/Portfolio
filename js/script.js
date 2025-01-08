// Forsinkelse til min tekst på index
window.addEventListener("load", function () {
  const content = document.querySelector(".content");
  content.style.opacity = 1;
});

// Zooom til mine billeder-------------
//
const image = document.querySelector(".zoomable");

image.addEventListener("click", () => {
  if (image.classList.contains("zoomed")) {
    image.classList.remove("zoomed");
  } else {
    image.classList.add("zoomed");
  }
});
