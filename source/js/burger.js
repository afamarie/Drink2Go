const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__button');

header.classList.remove('header--no-js');

const onClickToggleMenu = () => {

  if (header.classList.contains('header--opened')) {
    header.classList.remove('header--opened');
  } else {
    header.classList.add('header--opened');
  }
};

navToggle.addEventListener('click', onClickToggleMenu);
