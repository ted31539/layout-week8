"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // 精心設計、課程多元

var swiper = new Swiper(".mySwiper-class", {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    rows: 2,
    fill: "row"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    768: {
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      }
    }
  }
}); // 聽聽他們怎麼說

var swiper = new Swiper(".mySwiper-credit", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: "row"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  },
  spaceBetween: 28,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
