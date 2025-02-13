let swiper = new Swiper(".swiper", {
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    370: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.33,
    },
    1280: {
      slidesPerView: 2.33,
    },
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
