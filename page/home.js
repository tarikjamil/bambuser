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
    wordClass: "loading-animation-split",
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

  tl.from(".loading-animation-split", {
    y: "100%",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
    delay: -1,
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
        arrows: false,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false,
      },
    },
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
          perPage: 1,
        },
        767: {
          // Mobile Landscape
          perPage: 1,
        },
        479: {
          // Mobile Portrait
          perPage: 1,
        },
      },
    }).mount();
  }
}
slider2();

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-hero", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 500,
    drag: false,
    gap: "0rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false,
      },
    },
  });
  splide.mount();
});

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
      },
    });
  });
});

$(".btn_hidden").on("mouseenter mouseleave", function () {
  $(this)
    .closest(".home--script")
    .siblings(".video_element")
    .toggleClass("is--active");
});
