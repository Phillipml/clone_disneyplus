document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabButton;
      const tabButton = document.querySelector(
        `[data-tab-button=${tabTarget}]`
      );
      const showsList = document.querySelector(`[data-tab-id=${tabTarget}]`);

      hideAllTabs();
      showsList.classList.add("shows__list--is--active");
      hideBorderButton();
      tabButton.classList.add("shows__tabs__button--is--active");
    });
  }
});

function hideBorderButton() {
  const borderButtons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < borderButtons.length; i++) {
    borderButtons[i].classList.remove("shows__tabs__button--is--active");
  }
}

function hideAllTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("shows__list--is--active");
  }
}
