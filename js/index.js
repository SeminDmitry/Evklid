// клик на burger

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".header__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header-nav--active");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener(
    "click",

    function () {
      burger.classList.remove("burger--active");

      menu.classList.remove("header-nav--active");
    }
  );
});

// swiper

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  a11y: {
    enabled: false,
  },
});

// work tabs

let workBtn = document.querySelectorAll(".work__btn");
let tabsItem = document.querySelectorAll(".tabs__item");

workBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    workBtn.forEach(function (btn) {
      btn.classList.remove("work__btn--active");
    });
    e.currentTarget.classList.add("work__btn--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("tabs__item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs__item--active");
  });
});
