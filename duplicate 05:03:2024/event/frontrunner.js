// smooth scroll

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// split type
let text;
// Split the text up
function runSplit() {
  text = new SplitType(".split-type", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "is--scroll-intoview-scrub",
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
    duration: 0.5,
  });
  tl.from(".nyfw-bg-animation", {
    scale: "1.1",
    opacity: "0",
    ease: "Quint.easeOut",
    duration: 1,
  });
  tl.from(".loading-animation", {
    y: "100%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
  });
}
pageLoad();

// img parallax
$(".section-hero").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".nyfw-image-bg");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    opacity: "0.3",
  });
});

// into view scrub image
$(".is--scroll-intoview-scrub").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "bottom bottom -=120rem",
      end: "top center",
      scrub: true,
    },
  });
  tl.from(targetElement, {
    y: "100%",
  });
});
