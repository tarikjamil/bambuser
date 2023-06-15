document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "slider",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    arrows: false,
    drag: false,
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        drag: true
      }
    }
  });

  splide.mount();
});
