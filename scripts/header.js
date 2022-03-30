const headerClass = 'header';
const headerOpenedClass = 'header_opened';
const menuButtonClass = 'header__menu-button';
const menuButtonDisabledClass = 'header__menu-button_disabled';
const menuClass = 'header__menu';
const menuOpenedClass = 'header__menu_opened';
const closeButtonClass = 'header__close-button';

const header = document.querySelector(`.${headerClass}`);
const menu = header.querySelector(`.${menuClass}`);
const menuButton = header.querySelector(`.${menuButtonClass}`);
const closeButton = header.querySelector(`.${closeButtonClass}`);

menuButton.addEventListener('click', function () {
  menuButton.classList.add(menuButtonDisabledClass);
  header.classList.add(headerOpenedClass);
  menu.classList.add(menuOpenedClass);
});

closeButton.addEventListener('click', function () {
  menuButton.classList.remove(menuButtonDisabledClass);
  header.classList.remove(headerOpenedClass);
  menu.classList.remove(menuOpenedClass);
});
