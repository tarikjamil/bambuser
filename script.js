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
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
  });
}
pageLoad();

// video player
document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".player--video-container");

  videoContainers.forEach((container) => {
    const video = container.querySelector(".player--video");
    const playPauseBtn = container.querySelector(".player--playpause");
    const playIcon = container.querySelector(".player--icon-play");
    const pauseIcon = container.querySelector(".player--icon-pause");
    const currentTimeElem = container.querySelector(".player--currenttime");
    const durationElem = container.querySelector(".player--duration");
    const progressContainer = container.querySelector(
      ".player--progresscontainer"
    );
    const progressFilled = container.querySelector(".player--progressfilled");

    const overlay = container.querySelector(".player--overlay");
    const playOverlayButton = container.querySelector(".player--overlay-play");
    const repeatOverlayButton = container.querySelector(
      ".player--overlay-repeat"
    );
    const videoControls = container.querySelector(".player--video-controls");

    // Initially hide the playPause button
    playPauseBtn.style.display = "none";

    playPauseBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "";
      } else {
        video.pause();
        playIcon.style.display = "";
        pauseIcon.style.display = "none";
      }
    });

    playOverlayButton.addEventListener("click", function () {
      video.play();
      overlay.style.display = "none";
      videoControls.style.display = "grid"; // set the controls to display as grid
      playPauseBtn.style.display = "block"; // Make the playPause button visible
    });

    repeatOverlayButton.addEventListener("click", function () {
      video.currentTime = 0;
      video.play();
      repeatOverlayButton.style.display = "none";
      overlay.style.display = "none";
      playPauseBtn.style.display = "block"; // Make the playPause button visible
    });

    video.addEventListener("ended", function () {
      overlay.style.display = "flex";
      repeatOverlayButton.style.display = "";
      playOverlayButton.style.display = "none";
      playPauseBtn.style.display = "none"; // Hide the playPause button again
    });

    video.addEventListener("timeupdate", function () {
      const percentage = (video.currentTime / video.duration) * 100;
      progressFilled.style.width = percentage + "%";
      currentTimeElem.textContent = formatTime(
        video.currentTime,
        video.duration
      );
    });

    progressContainer.addEventListener("click", function (e) {
      const clickPositionInPixels =
        e.pageX - progressContainer.getBoundingClientRect().left;
      const clickPositionInPercentage =
        (clickPositionInPixels / progressContainer.offsetWidth) * 100;
      video.currentTime = (clickPositionInPercentage / 100) * video.duration;
    });

    video.addEventListener("loadedmetadata", function () {
      durationElem.textContent = formatTime(0, video.duration);
    });
  });

  // Updated formatTime function for countdown timer
  function formatTime(seconds, duration) {
    const timeLeft = duration - seconds;
    const mins = Math.floor(timeLeft / 60);
    const secs = Math.floor(timeLeft % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }
});

// ------- marquee scrolling ---------------------------- //

// marquee is--marquee-scrolling
const scrollSpeed = 50; // pixels per second, adjust as needed

function updateScrollingSpeed() {
  document.querySelectorAll(".is--marquee-scrolling").forEach((element) => {
    const scrollWidth = element.offsetWidth;
    const duration = scrollWidth / scrollSpeed; // seconds

    element.style.setProperty("--scroll-width", `${scrollWidth}px`);
    element.style.animationDuration = `${duration}s`;
  });
}
