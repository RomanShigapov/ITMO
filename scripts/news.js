const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
      // slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetBefore: 39,
      slidesOffsetAfter: 39,
    },
    // when window width is >= 1280px
    1280: {
      // slidesPerView: 3,
      spaceBetween: 32,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 12,

    }
  }

});
