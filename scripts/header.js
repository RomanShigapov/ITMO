const headerClass = 'header';
const headerContentClass = 'header__content';
const headerOpenedClass = 'header__content_opened';
const menuButtonClass = 'header__menu-button';
const menuButtonDisabledClass = 'header__menu-button_disabled';
const menuClass = 'header__menu';
const menuOpenedClass = 'header__menu_opened';
const menuLinkClass = 'header__menu-link';
const closeButtonClass = 'header__close-button';

const header = document.querySelector(`.${headerClass}`);
const headerContent = header.querySelector(`.${headerContentClass}`);
const menu = header.querySelector(`.${menuClass}`);
const menuButton = header.querySelector(`.${menuButtonClass}`);
const closeButton = header.querySelector(`.${closeButtonClass}`);

function openMenu () {
  menuButton.classList.add(menuButtonDisabledClass);
  headerContent.classList.add(headerOpenedClass);
  menu.classList.add(menuOpenedClass);
}

function closeMenu () {
  menuButton.classList.remove(menuButtonDisabledClass);
  headerContent.classList.remove(headerOpenedClass);
  menu.classList.remove(menuOpenedClass);
}

menuButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

menu.addEventListener('click', function (event) {
  if (event.target.classList.contains(menuLinkClass)) closeMenu ();
})
