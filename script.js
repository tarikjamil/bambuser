$(".navbar--dropdown-trigger").on("click", function () {
  // Check if window's inner width is below 992 pixels
  if (window.innerWidth < 992) {
    // Save the sibling of the toggle we clicked on
    let targetElement = $(this).siblings(".navbar--dropdown-list");
    let arrowElement = $(this).find(".dropdown--icon-tablet");
    let animationDuration = 500;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      targetElement.animate({ height: "0px" }, animationDuration, () => {
        arrowElement.css("transform", "rotate(0deg)");
      });
    } else {
      // Open the content div if already closed
      targetElement.css("height", "auto");
      let autoHeight = targetElement.height();
      targetElement.css("height", "0px");
      targetElement.animate({ height: autoHeight }, animationDuration, () => {
        targetElement.css("height", "auto");
        arrowElement.css("transform", "rotate(-90deg)");
      });
    }

    // Toggle the open class
    $(this).toggleClass("open");
  }
});

// split type
let text;
// Split the text up
function runSplit() {
  text = new SplitType("[animation=loading-split]", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "loading-animation-split"
  });
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
}
pageLoad();
