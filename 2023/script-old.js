$(".navbar--dropdown-trigger").each(function (index) {
  let triggerElement = $(this);
  let targetElement = triggerElement.siblings(".navbar--dropdown-list");
  let arrowElement = triggerElement.find(".dropdown--icon-tablet");

  let tl = gsap.timeline({ paused: true });

  tl.fromTo(
    targetElement,
    {
      height: "0rem",
      ease: "Quint.easeOut",
      duration: 0.5
    },
    {
      height: "270rem"
    }
  );
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
