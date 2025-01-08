window.addEventListener("load", function () {
  const content = document.querySelector(".content");
  content.style.opacity = 1;
});

// Zooom til mine billeder-------------
// Find billedet
const image = document.querySelector(".zoomable");

// Tilføj klik-event til billedet
image.addEventListener("click", () => {
  // Tjek om billedet allerede er zoomet
  if (image.classList.contains("zoomed")) {
    image.classList.remove("zoomed"); // Fjern zoom
  } else {
    image.classList.add("zoomed"); // Tilføj zoom
  }
});
