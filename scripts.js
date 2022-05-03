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
    });
}

/*--------------Блок меню - закрытие на клик по экрану-----------------*/

if (menuBlock.classList.contains('active')) {
    document.addEventListener( "click", function(e) {
        const withinBoundaries = e.composedPath().includes(navContent);
     
        if (!withinBoundaries) {
            menuBlock.classList.remove('active');
            header.classList.remove('active');
            lines.classList.remove('active');
        }
    });
}



/*-----------Кнопка Отправить сообщение------------*/

const btnSendMessage = document.querySelector('.contacts_button');
const sendMessageActive = document.querySelector('.contacts_button_active');
const blackLine = document.querySelector('.black-line');
const whiteLineFirst = document.querySelector('.contacts_cross_white-line-first');
const whiteLineSecond = document.querySelector('.contacts_cross_white-line-second');

/*-------------Клик на кнопку - открытие---------------*/

if(btnSendMessage) {
    btnSendMessage.addEventListener("click", function(e) {
        e.preventDefault;
        sendMessageActive.classList.add('active');
        lines.classList.add('active');
        blackLine.classList.add('active');
        whiteLineFirst.classList.add('active');
        whiteLineSecond.classList.add('active');
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

/*-------------------Закрытие окна через 10 секунд---------------------------*/

if(sendMessageActive.classList.contains('active')){
    setTimeout(function(){
        sendMessageActive.classList.remove('active');
    }, 3000)
}


/*------------Плавная прокрутка экрана----------------*/

const links = document.querySelectorAll('a[href^="#"]');
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



