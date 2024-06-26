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
      let n = e.height();
      e.css("height", "0px"),
        e.animate({ height: n }, 500, () => {
          e.css("height", "auto"), t.css("transform", "rotate(-90deg)");
        });
    }
    $(this).toggleClass("open");
  }
});
function pageLoad() {
  let e = gsap.timeline();
  e.to(".main-wrapper", { opacity: 1, ease: "Quint.easeOut", duration: 0.5 }),
    e.from("[animation=loading]", {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    });
}
window.addEventListener("resize", function () {
  windowWidth !== $(window).innerWidth() &&
    ((windowWidth = $(window).innerWidth()), text.revert(), runSplit());
}),
  gsap.registerPlugin(ScrollTrigger),
  pageLoad();
const scrollSpeed = 50;
function updateScrollingSpeed() {
  document.querySelectorAll(".is--marquee-scrolling").forEach((e) => {
    let t = e.offsetWidth;
    e.style.setProperty("--scroll-width", `${t}px`),
      (e.style.animationDuration = `${t / 50}s`);
  });
}
document.addEventListener("DOMContentLoaded", updateScrollingSpeed),
  window.addEventListener("resize", updateScrollingSpeed),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll(".player--video-container");
    function t(e, t) {
      let n = t - e,
        i = Math.floor(n % 60);
      return `${Math.floor(n / 60)}:${i < 10 ? "0" : ""}${i}`;
    }
    e.forEach((e) => {
      let n = e.querySelector(".player--video"),
        i = e.querySelector(".player--playpause"),
        o = e.querySelector(".player--icon-play"),
        r = e.querySelector(".player--icon-pause"),
        l = e.querySelector(".player--currenttime"),
        a = e.querySelector(".player--duration"),
        s = e.querySelector(".player--progresscontainer"),
        d = e.querySelector(".player--progressfilled"),
        y = e.querySelector(".player--overlay"),
        c = e.querySelector(".player--overlay-play"),
        p = e.querySelector(".player--overlay-repeat"),
        u = e.querySelector(".player--video-controls");
      (i.style.display = "none"),
        i.addEventListener("click", function () {
          n.paused
            ? (n.play(), (o.style.display = "none"), (r.style.display = ""))
            : (n.pause(), (o.style.display = ""), (r.style.display = "none"));
        }),
        c.addEventListener("click", function () {
          n.play(),
            (y.style.display = "none"),
            (u.style.display = "grid"),
            (i.style.display = "block");
        }),
        p.addEventListener("click", function () {
          (n.currentTime = 0),
            n.play(),
            (p.style.display = "none"),
            (y.style.display = "none"),
            (i.style.display = "block");
        }),
        n.addEventListener("ended", function () {
          (y.style.display = "flex"),
            (p.style.display = ""),
            (c.style.display = "none"),
            (i.style.display = "none");
        }),
        n.addEventListener("timeupdate", function () {
          let e = (n.currentTime / n.duration) * 100;
          (d.style.width = e + "%"),
            (l.textContent = t(n.currentTime, n.duration));
        }),
        s.addEventListener("click", function (e) {
          let t =
            ((e.pageX - s.getBoundingClientRect().left) / s.offsetWidth) * 100;
          n.currentTime = (t / 100) * n.duration;
        }),
        n.addEventListener("loadedmetadata", function () {
          a.textContent = t(0, n.duration);
        });
    });
  });
const videoContainer = document.querySelector(".player--video-container"),
  videoControls = document.querySelector(".player--video-controls");
videoContainer.addEventListener("mouseover", () => {
  videoControls.style.opacity = 1;
}),
  videoContainer.addEventListener("mouseout", () => {
    setTimeout(() => {
      videoControls.style.opacity = 0;
    }, 3e3);
  });
