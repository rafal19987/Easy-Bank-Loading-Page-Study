const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const overlay = document.querySelector('.overlay');

const hideAndShowHambugerMenu = () => {
  header.classList.contains('open')
    ? header.classList.remove('open')
    : header.classList.add('open');
};

hamburgerBtn.addEventListener('click', hideAndShowHambugerMenu);
