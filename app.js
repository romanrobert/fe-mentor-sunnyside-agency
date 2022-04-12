// Burger Menu

const nav = document.querySelector('.nav__links');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a');


burger.addEventListener('click', () => {

    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle')

});


links.forEach(link => {
    link.addEventListener('click', () => {

        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle')

    });
});



// GSAP Animations

const heroAnimation = gsap.timeline({
    defaults: {ease: "power4.inOut", duration: 2}});
    heroAnimation.to('.hero__img', { 'clip-path' :  'polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, x: 0, duration: 2.5}, '-=1')
    heroAnimation.to('.hero__content, h1', { 'clip-path' :  'polygon(100% 0, 0 0, 0 100%, 100% 100%)', opacity: 1, y: 0, duration: 2}, '-=1')
    heroAnimation.to('.hero__content, .arrow', { 'clip-path' :  'polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1}, '-=1');
