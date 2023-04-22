
const wrapper = document.querySelector('.swiper');
wrapper.classList.remove('swiper--no-js');

const swiper = new Swiper('.swiper', {

  loop: true,
  slidesPerView: 4,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoHeight: true,
});

export {swiper};
