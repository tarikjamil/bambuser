// One to many popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=onetomany-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--onetomany--popup");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// One to one popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=onetoone-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--onetoone--popup");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

//  close button popup --------- //

document.addEventListener("DOMContentLoaded", function () {
  const closeButtons = document.querySelectorAll(".calculator--popup--close");

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      let currentElement = closeButton;

      while (currentElement) {
        if (currentElement.classList.contains("calculator--popup--parent")) {
          currentElement.style.opacity = "0";

          // After the transition is complete, set display to 'none'
          setTimeout(() => {
            currentElement.style.display = "none";
          }, 400); // Adjust the timeout duration to match the transition duration in your CSS

          break;
        }

        currentElement = currentElement.parentElement;
      }
    });
  });
});

$(".calculator--popup--bg").on("click", function () {
  $(this)
    .siblings(".calculator--item-parent")
    .find(".calculator--popup--close")
    .click();
});
