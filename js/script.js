function enterResult(index) {
    console.log(index);
}

const section = document.querySelector('.section');
const listElements = document.querySelectorAll('.menu__item');
const listIcons = document.querySelectorAll('.menu__icon');
const circle = document.querySelector('.menu__circle');
const description = document.querySelectorAll('.menu__item-description');
const menu = document.querySelector('.menu__list');

function changeColor (number, el) {
    listElements.forEach((el) => {
        el.classList.remove('active');
    })

    if (number === 0) {
        section.style.backgroundColor = '#cb2c2c';
        el.classList.add('active');
    }

    if (number === 70) {
        section.style.backgroundColor = '#374fc8';
        el.classList.add('active');
    }

    if (number === 140) {
        section.style.backgroundColor = '#5eb143';
        el.classList.add('active');
    }

    if (number === 210) {
        section.style.backgroundColor = '#33c0d6';
        el.classList.add('active');
    }

    if (number === 280) {
        section.style.backgroundColor = '#e9d22b';
        el.classList.add('active');
    }
}

for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('mouseover', () => {
        let number = 70 * i;
        circle.style.transform = 'translateX(' + number + 'px)';

        if (number === 0) {
            listIcons[0].classList.add('active-icon');
            circle.style.backgroundColor = '#cb2c2c';
        } else {
            listIcons[0].classList.remove('active-icon');
        }

        if (number === 70) {
            listIcons[1].classList.add('active-icon');
            circle.style.backgroundColor = '#374fc8';
        } else {
            listIcons[1].classList.remove('active-icon');
        }

        if (number === 140) {
            listIcons[2].classList.add('active-icon');
            circle.style.backgroundColor = '#5eb143';
        } else {
            listIcons[2].classList.remove('active-icon');
        }

        if (number === 210) {
            listIcons[3].classList.add('active-icon');
            circle.style.backgroundColor = '#33c0d6';
        } else {
            listIcons[3].classList.remove('active-icon');
        }

        if (number === 280) {
            listIcons[4].classList.add('active-icon');
            circle.style.backgroundColor = '#e9d22b';
        } else {
            listIcons[4].classList.remove('active-icon');
        }

        circle.addEventListener('click', () => {
            changeColor(number);
        })

        listElements[i].addEventListener('click', () => {
            changeColor(number, listElements[i]);
        })
    });

    menu.addEventListener('mouseout', () => {
        let currentElement = document.querySelector('.active');

    })
}
