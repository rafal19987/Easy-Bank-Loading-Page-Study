console.log('connected');
const hamburgerMenu = document.querySelector('.hamburgerBtn');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.contains('open')
    ? hamburgerMenu.classList.remove('open')
    : hamburgerMenu.classList.add('open');
});
