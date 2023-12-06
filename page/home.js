$(function () {
  // Navbar dropdown toggle
  $(".navbar--dropdown-trigger").on("click", function () {
    if (window.innerWidth < 992) {
      let $this = $(this);
      let targetElement = $this.siblings(".navbar--dropdown-list");
      let arrowElement = $this.find(".dropdown--icon-tablet");

      targetElement.animate(
        {
          height: $this.hasClass("open")
            ? "0px"
            : targetElement.css("height", "auto").height(),
        },
        500,
        function () {
          if ($this.hasClass("open")) {
            arrowElement.css("transform", "");
          } else {
            targetElement.css("height", "");
            arrowElement.css("transform", "rotate(-90deg)");
          }
        }
      );

      $this.toggleClass("open");
    }
  });

  // Text splitting and window resize update
  let text;
  function runSplit() {
    text = new SplitType("[animation=loading-split]", {
      types: "lines, words",
      lineClass: "overflow-hidden",
      wordClass: "loading-animation-split",
    });
  }
  runSplit();
  let windowWidth = $(window).width();
  $(window).on("resize", function () {
    if (windowWidth !== $(window).width()) {
      windowWidth = $(window).width();
      text.revert();
      runSplit();
    }
  });

  // GSAP animations on page load
  gsap.registerPlugin(ScrollTrigger);
  function pageLoad() {
    gsap
      .timeline()
      .to(".main-wrapper", { opacity: 1, ease: "Quint.easeOut", duration: 0.5 })
      .from(".loading-animation-split", {
        y: "100%",
        stagger: 0.1,
        ease: "Quint.easeOut",
        duration: 1,
      })
      .from("[animation=loading]", {
        y: "20rem",
        opacity: 0,
        stagger: 0.1,
        ease: "Quint.easeOut",
        duration: 1,
        delay: -1,
      });
  }
  pageLoad();

  // Sliders initialization
  new Splide(".slider1", {
    type: "loop",
    perPage: 4,
    autoplay: true,
    speed: 7000,
    drag: false,
    easing: "linear",
    gap: "24rem",
    breakpoints: {
      991: { perPage: 1, arrows: false },
      767: { perPage: 1, arrows: false },
      479: { perPage: 1, arrows: false },
    },
  }).mount();

  $(".slider2").each(function () {
    new Splide(this, {
      perPage: 1,
      type: "slide",
      gap: "24em",
      arrows: "slider",
      speed: 600,
      breakpoints: {
        991: { perPage: 1 },
        767: { perPage: 1 },
        479: { perPage: 1 },
      },
    }).mount();
  });

  // Page color power-up
  $("[tr-pagecolor-element='trigger']").each(function () {
    let classSetting = attr("home--hero", $(this).attr("tr-pagecolor-class"));
    ScrollTrigger.create({
      trigger: this,
      start: "top center",
      end: "bottom top",
      onToggle: ({ isActive }) => {
        $(".body").toggleClass(classSetting, isActive);
      },
    });
  });

  // Toggle video element on hover
  $(".btn_hidden").hover(function () {
    $(this)
      .closest(".home--script")
      .siblings(".video_element")
      .toggleClass("is--active");
  });
});

function attr(defaultVal, attrVal) {
  if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
  if (attrVal === "true" && typeof defaultVal === "boolean") return true;
  if (attrVal === "false" && typeof defaultVal === "boolean") return false;
  if (!isNaN(attrVal) && typeof defaultVal === "number") return +attrVal;
  return attrVal || defaultVal;
}
