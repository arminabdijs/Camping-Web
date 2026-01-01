const navBtn = document.querySelector('.nav__btn');
const navMenuMobile= document.querySelector('.nav__menu');

let navOpen = false;

navBtn.addEventListener('click', () => {
    if (navOpen) {
        navBtn.classList.remove('nav__btn--open');
        navMenuMobile.classList.remove('nav__menu--open');
        navOpen = false
    } else {
        navBtn.classList.add('nav__btn--open');
        navMenuMobile.classList.add('nav__menu--open');
        navOpen = true
    }
});
