const header = document.querySelector('.header__container');
const burger = document.querySelector('.burger');
const lineBurger = document.querySelectorAll('.burger__line');
const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.nav__item');
const input = document.querySelector('.input');

burger.addEventListener('click', () => {
    menu.classList.toggle('disable');
    input.classList.toggle('input-active');
    for (let i = 0; i <= items.length; i++) {
        let time = 40 * (i + 1);
        setTimeout(() => {
            items[i].classList.toggle('item__active');
        }, time)
    }
    if (!header.classList.contains('active')) {
        for (let i = 0; i <= lineBurger.length; i++) {
            lineBurger[0].classList.toggle('active-1');
            lineBurger[1].classList.toggle('active-2');

            setTimeout(() => {
                lineBurger[0].classList.toggle('active-3');
                lineBurger[1].classList.toggle('active-4');
            }, 100)

            header.classList.add('active');
        }
    } else {
        for (let i = 0; i <= lineBurger.length; i++) {
            lineBurger[0].classList.toggle('active-3');
            lineBurger[1].classList.toggle('active-4');

            setTimeout(() => {
                lineBurger[0].classList.toggle('active-1');
                lineBurger[1].classList.toggle('active-2');
            }, 100)

            header.classList.remove('active');
        }
    }
})