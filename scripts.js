"use strict"

const menuBlock = document.querySelector('.navigation');
const header = document.querySelector('header');

const lines = document.querySelector('.lines');
if (lines) {
    lines.addEventListener("click", function (e) {
        e.preventDefault;
        menuBlock.classList.add('active');
        header.classList.add('active');
    });
}

const cross = document.querySelector('.cross');
if (cross) {
    cross.addEventListener("click", function(e) {
        e.preventDefault;
        menuBlock.classList.remove('active');
        header.classList.remove('active');
    });
}

const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};