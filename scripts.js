"use strict"

/*---------------Открытие и закрытие блока Навигация------------------*/ 

const menuBlock = document.querySelector('.navigation');
const header = document.querySelector('header');
const navContent = document.querySelector('.navigation_content');
const allInfo = document.querySelector('.all-info');

/*---------Блок Меню - открытие-----------*/

const lines = document.querySelector('.lines');
if (lines) {
    lines.addEventListener("click", function (e) {
        e.preventDefault;
        menuBlock.classList.add('active');
        header.classList.add('active');
        allInfo.classList.add('active');
        lines.classList.add('first-active');
    });
}

/*---------Блок Меню - закрытие-----------*/

const cross = document.querySelector('.cross');
if (cross) {
    cross.addEventListener("click", function(e) {
        e.preventDefault;
        menuBlock.classList.remove('active');
        header.classList.remove('active');
        allInfo.classList.remove('active');
        lines.classList.remove('first-active');
    });
}

/*--------------Блок меню - закрытие на клик по экрану-----------------*/

if (menuBlock) {
    menuBlock.addEventListener("click", function(e) {
        e.preventDefault;
        menuBlock.classList.remove('active');
        header.classList.remove('active');
        allInfo.classList.remove('active');
        lines.classList.remove('first-active');
    });
}

/*----------------Блок меню - закрытие при навигации-----------------*/

const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        menuBlock.classList.remove('active');
        header.classList.remove('active');
        allInfo.classList.remove('active');
        lines.classList.remove('first-active');
    });
};

/*-----------Кнопка Отправить сообщение------------*/

const btnSendMessage = document.querySelector('.contacts_button');
const sendMessageActive = document.querySelector('.contacts_button_active');
const blackLine = document.querySelector('.black-line');
const whiteLineFirst = document.querySelector('.contacts_cross_white-line-first');
const whiteLineSecond = document.querySelector('.contacts_cross_white-line-second');

/*-------------Клик на кнопку - открытие---------------*/

if (btnSendMessage) {
    btnSendMessage.addEventListener("click", function(e) {
        e.preventDefault;
        sendMessageActive.classList.add('active');
        lines.classList.add('active');
        blackLine.classList.add('active');
        whiteLineFirst.classList.add('active');
        whiteLineSecond.classList.add('active');

        CloseSend();
    });
}

/*--------------Клик на крестик - закрытие-------------------*/

const crossSendMessage = document.querySelector('.contacts_button_cross');
if (crossSendMessage) {
    crossSendMessage.addEventListener("click", function(e) {
        e.preventDefault;
        sendMessageActive.classList.remove('active');
        lines.classList.remove('active');
        blackLine.classList.remove('active');
        whiteLineFirst.classList.remove('active');
        whiteLineSecond.classList.remove('active');
    });
}

/*--------------Клик на экран - закрытие---------------*/

const screenButton = document.querySelector('.wrapper_button');
if (screenButton) {
    screenButton.addEventListener("click", function(e) {
        e.preventDefault;
        sendMessageActive.classList.remove('active');
        lines.classList.remove('active');
        blackLine.classList.remove('active');
        whiteLineFirst.classList.remove('active');
        whiteLineSecond.classList.remove('active');
    });
}

/*---------------Закрытие окна через 10 секунд-----------------*/

function CloseSend() {
    setTimeout(function() {
        sendMessageActive.classList.remove('active'); 
        lines.classList.remove('active');
        blackLine.classList.remove('active');
        whiteLineFirst.classList.remove('active');
        whiteLineSecond.classList.remove('active');
    }, 10000);
};


/*---------Модальное окно отправить сообщение------------*/

const writeMe = document.querySelector('.write-me');
const writeMeCross = document.querySelector('.write-me_lines');
const writeMeFirst = document.querySelector('.write-me_lines_first-line');
const writeMeSecond = document.querySelector('.write-me_lines_second-line');

/*-------------Высота всей страницы с учетом прокрутки-------------*/
const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

/*-------------Высота видимой части экрана--------------*/
const screenHeight = window.innerHeight;

/*-------------Получение текущей прокрутки--------------*/
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

/*-------------Определяем положение прокрученной области относительно размера всего экрана---------------*/
let difference = scrollHeight - 1.1 * screenHeight;

setTimeout(function() {
    if (scrollTop < difference) {
        writeMeFirst.classList.add('active');
        writeMeSecond.classList.add('active');
        writeMe.classList.add('active');
        header.classList.add('active');
        allInfo.classList.add('active');
    }    
}, 30000)


/*--------Клик на крестик - закрытие---------*/

if (writeMeCross) {
    writeMeCross.addEventListener("click", function(e) {
        e.preventDefault;
        writeMeFirst.classList.remove('active');
        writeMeSecond.classList.remove('active');
        writeMe.classList.remove('active');
        header.classList.remove('active');
        allInfo.classList.remove('active');
    });
}

/*----------Клик на кнопку Отправить сообщение ----------*/

const writeMeButton = document.querySelector('.write-me_button');
const send = document.querySelector('.contacts');
if (writeMeButton) {
    writeMeButton.addEventListener("click", function(e) {
        e.preventDefault;
        writeMeFirst.classList.remove('active');
        writeMeSecond.classList.remove('active');
        writeMe.classList.remove('active');
        header.classList.remove('active');
        allInfo.classList.remove('active');
        send.scrollIntoView({
            behavior: "smooth"
        });
    });
}


/*---------Модальное окно блока Контакты----------*/

const TEST = document.querySelector('.contacts_menu_h4');
const sendMe = document.querySelector('.send-me');


if (TEST) {
    TEST.addEventListener("click", function(e) {
        e.preventDefault;
        sendMe.classList.add('active');
    })
}


/*------------Плавная прокрутка экрана----------------*/

for (let link of links) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const idNum = link.getAttribute('href');

        document.querySelector(idNum).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
