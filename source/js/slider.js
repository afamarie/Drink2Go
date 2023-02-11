const wrapper = document.querySelector('.hero-banner__slider');
wrapper.classList.remove('hero-banner__slider--no-js');

const swiper = new Swiper('.hero-banner__slider', {

  loop: true,
  slidesPerView: 1,
  watchSlidesProgress: true,

  pagination: {
    el: '.hero-banner__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoHeight: true,
});

export {swiper};
