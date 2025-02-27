document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector(".hero");
  const heroSectionHeight = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    scrollPosition < heroSectionHeight ? hiddenHeader() : showHeader();
  });

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
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openCloseAnswer);
  }
});
function hiddenHeader() {
  const headerSelector = document.querySelector(".header");
  headerSelector.classList.add("header--is-hidden");
}
function showHeader() {
  const headerSelector = document.querySelector(".header");
  headerSelector.classList.remove("header--is-hidden");
}
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
function openCloseAnswer(questionSelector) {
  const openCloseClass = "faq__questions__item--is-open";
  const questionParent = questionSelector.target.parentNode;
  questionParent.classList.toggle(openCloseClass);
}
