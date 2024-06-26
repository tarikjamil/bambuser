$(".navbar--dropdown-trigger").on("click", function () {
  if (window.innerWidth < 992) {
    let e = $(this).siblings(".navbar--dropdown-list"),
      t = $(this).find(".dropdown--icon-tablet");
    if ($(this).hasClass("open"))
      e.animate({ height: "0px" }, 500, () => {
        t.css("transform", "rotate(0deg)");
      });
    else {
      e.css("height", "auto");
      let i = e.height();
      e.css("height", "0px"),
        e.animate({ height: i }, 500, () => {
          e.css("height", "auto"), t.css("transform", "rotate(-90deg)");
        });
    }
    $(this).toggleClass("open");
  }
});
function pageLoad() {
  let e = gsap.timeline();
  e.to(".main-wrapper", { opacity: 1, ease: "Quint.easeOut", duration: 0.5 }),
    e.from(".loading-animation-split", {
      y: "100%",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    }),
    e.from("[animation=loading]", {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
      delay: -1,
    });
}
function slider2() {
  let e = $(".slider2");
  for (let t = 0, i = e.length; t < i; t++)
    new Splide(e[t], {
      perPage: 1,
      perMove: 1,
      focus: 0,
      type: "slide",
      gap: "24em",
      arrows: "slider",
      pagination: !1,
      speed: 600,
      dragAngleThreshold: 30,
      autoWidth: !1,
      rewind: !1,
      rewindSpeed: 400,
      waitForTransition: !1,
      updateOnMove: !0,
      trimSpace: !1,
      breakpoints: {
        991: { perPage: 1 },
        767: { perPage: 1 },
        479: { perPage: 1 },
      },
    }).mount();
}
window.addEventListener("resize", function () {
  windowWidth !== $(window).innerWidth() &&
    ((windowWidth = $(window).innerWidth()), text.revert(), runSplit());
}),
  gsap.registerPlugin(ScrollTrigger),
  pageLoad(),
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".slider1", {
      type: "loop",
      perPage: 4,
      perMove: 1,
      autoplay: !0,
      interval: 0,
      speed: 7e3,
      drag: !1,
      easing: "linear",
      gap: "24rem",
      breakpoints: {
        991: { perPage: 1, arrows: !1 },
        767: { perPage: 1, arrows: !1 },
        479: { perPage: 1, arrows: !1 },
      },
    }).mount();
  }),
  slider2(),
  window.addEventListener("DOMContentLoaded", (e) => {
    function t(e, t) {
      let i = typeof e;
      return "string" != typeof t || "" === t.trim()
        ? e
        : ("true" === t && "boolean" === i) ||
            (("false" !== t || "boolean" !== i) &&
              (isNaN(t) && "string" === i
                ? t
                : isNaN(t) || "number" !== i
                ? e
                : +t));
    }
    $("[tr-pagecolor-element='trigger']").each(function (e) {
      let i = $(this),
        n = $(".body"),
        a = t("home--hero", i.attr("tr-pagecolor-class"));
      ScrollTrigger.create({
        trigger: i,
        start: "top center",
        end: "bottom top",
        onToggle({ self: e, isActive: t }) {
          t ? n.addClass(a) : n.removeClass(a);
        },
      });
    });
  }),
  $(".btn_hidden").on("mouseenter mouseleave", function () {
    $(this)
      .closest(".home--script")
      .siblings(".video_element")
      .toggleClass("is--active");
  });
