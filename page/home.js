$(".navbar--dropdown-trigger").each(function (index) {
  let triggerElement = $(this);
  let targetElement = triggerElement.siblings(".navbar--dropdown-list");
  let arrowElement = triggerElement.find(".dropdown--icon-tablet");

  let tl = gsap.timeline({ paused: true });

  tl.to(targetElement, {
    height: "auto",
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.to(arrowElement, {
    rotate: "-90deg",
    ease: "Quint.easeOut",
    duration: 0.5,
    delay: -0.5
  });

  let clickCount = 0;

  function handleClick() {
    if (window.innerWidth < 992) {
      // Check screen size
      clickCount++;

      if (clickCount === 1) {
        tl.play();
      } else if (clickCount === 2) {
        tl.reverse();
        clickCount = 0; // Reset click count after the second click
      }
    }
  }

  triggerElement.on("click", handleClick);
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

  tl.from(".loading-animation-split", {
    y: "100%",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
    delay: -1
  });
}
pageLoad();

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 0,
    speed: 7000,
    drag: false,
    easing: "linear",
    gap: "24rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false
      }
    }
  });
  splide.mount();
});

// slider testimonial
function slider2() {
  let splides = $(".slider2");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "24em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1
        },
        767: {
          // Mobile Landscape
          perPage: 1
        },
        479: {
          // Mobile Portrait
          perPage: 1
        }
      }
    }).mount();
  }
}
slider2();

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".body");
    // settings
    let classSetting = attr("home--hero", triggerEl.attr("tr-pagecolor-class"));
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom top",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      }
    });
  });
});

$(".btn_hidden").on("mouseenter mouseleave", function () {
  $(this)
    .closest(".home--script")
    .siblings(".video_element")
    .toggleClass("is--active");
});
