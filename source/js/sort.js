const openElement = document.querySelector('.sort-form__open-button');
const listWrapper = document.querySelector('.sort-form__sort-buttons-list');

const openList = () => {
  listWrapper.classList.add('sort-form__sort-buttons-list--opened');
};

const closeList = () => {
  listWrapper.classList.remove('sort-form__sort-buttons-list--opened');
};

const onClickListToggle = () => {
  if (!listWrapper.classList.contains('sort-form__sort-buttons-list--opened')) {
    openList();
  } else {
    closeList();
  }
};

const toggleSort = (evt) => {
  const sortButton = evt.target.closest('.sort-form__sort-button');
  const current = document.querySelector('.sort-form__sort-button--choosen');

  if (listWrapper.contains(current)) {
    current.classList.remove('sort-form__sort-button--choosen');
    sortButton.classList.add('sort-form__sort-button--choosen');
  } else if (!listWrapper.contains(current)) {
    sortButton.classList.add('sort-form__sort-button--choosen');
  }

  openElement.textContent = sortButton.textContent;
  setTimeout((() => closeList()), 500);
};

openElement.addEventListener('click', onClickListToggle);
listWrapper.addEventListener('click', toggleSort);
