import './sass/main.scss';
import menuCards from './templation/menu-cards.hbs';
import menu from './menu.json';

const refMenu = document.querySelector('.js-menu');
console.log(refMenu);
refMenu.insertAdjacentHTML('beforeend', menuCards(menu));
console.log(menuCards([]));
//пример РЕПЕТА
// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 3 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);
//Тема
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refBody = document.querySelector('body');
const refSwitchToggle = document.querySelector('#theme-switch-toggle');

if (!localStorage.theme) localStorage.theme = theme.LIGHT;
refBody.className = localStorage.theme;

if (refBody.classList.value === theme.DARK) {
  refSwitchToggle.checked = true;
}
refSwitchToggle.addEventListener('change', function (e) {
  if (e.target.checked) {
    localStorage.setItem('theme', theme.DARK);
    refBody.classList = theme.DARK;
  } else {
    localStorage.setItem('theme', theme.LIGHT);
    refBody.classList = theme.LIGHT;
  }
});

//РАБОЧИЙ ВАРИАНТ
// refBody.classList.add(
//   localStorage.getItem('theme') === null ? theme.LIGHT : localStorage.getItem('theme'),
// );
// if (refBody.classList.value === theme.DARK) {
//   refSwitchToggle.checked = true;
// }
// refSwitchToggle.addEventListener('change', function (e) {
//   if (e.target.checked) {
//     localStorage.setItem('theme', theme.DARK);
//     refBody.classList.replace(theme.LIGHT, theme.DARK);
//   } else {
//     localStorage.setItem('theme', theme.LIGHT);
//     refBody.classList.replace(theme.DARK, theme.LIGHT);
//   }
// });
