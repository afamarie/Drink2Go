const openElement = document.querySelector('.sort-form__open-button');
const listWrapper = document.querySelector('.sort-form__sort-drop-down');

const openList = () => {
  listWrapper.classList.add('sort-form__sort-drop-down--opened');
};

const closeList = () => {
  listWrapper.classList.remove('sort-form__sort-drop-down--opened');
};

const onClickListToggle = () => {
  if (!listWrapper.classList.contains('sort-form__sort-drop-down--opened')) {
    openList();
  } else {
    closeList();
  }
};

const toggleSort = (evt) => {
  const sortButton = evt.target.closest('.sort-form__sort-button');
  const value = sortButton.textContent;
  const current = listWrapper.querySelector('.sort-form__sort-button--choosen');

  if (!listWrapper.contains(current)) {
    sortButton.classList.add('sort-form__sort-button--choosen');
  } else if (current !== sortButton) {
    sortButton.classList.add('sort-form__sort-button--choosen');
    current.classList.remove('sort-form__sort-button--choosen');
  }

  openElement.textContent = value;
  setTimeout((() => closeList()), 500);
};

openElement.addEventListener('click', onClickListToggle);
listWrapper.addEventListener('click', toggleSort);
