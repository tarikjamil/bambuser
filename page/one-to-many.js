// parallax image
$("[animation=scroll-stagger]").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find("[animation=scroll-stagger-el]");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top center+=100"
      }
    });
    tl.from(targetElement, {
      y: "40rem",
      opacity: 0,
      stagger: { each: 0.2, from: "start" },
      ease: "Quint.easeOut",
      duration: 1
    });
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
      let classSetting = attr(
        "after-hero-body",
        triggerEl.attr("tr-pagecolor-class")
      );
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
  