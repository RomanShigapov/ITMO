const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper__pagination',
    bulletClass: 'swiper__page-bullet',
    bulletActiveClass: 'swiper__page-bullet_active'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button_type_next',
    prevEl: '.swiper__button_type_prev',
  },

  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 10,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 30,
      slidesOffsetBefore: 39,
      slidesOffsetAfter: 39,
    },
    // when window width is >= 1280px
    1280: {
      spaceBetween: 32,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 12,
    }
  }
});
