let clicked = document.querySelector("nav");
let ai = document.querySelector('.ai');
let adult = document.querySelector('.adult');
let sale = document.querySelector('.sale');
let kid = document.querySelector('.kid');


ai.addEventListener('mouseover', () => {
    ai.classList.add("on");
});

ai.addEventListener('mouseleave', () => {
    ai.classList.remove("on");
});

adult.addEventListener('mouseover', () => {
    adult.classList.add("on");
});

adult.addEventListener('mouseleave', () => {
    adult.classList.remove("on");
});

sale.addEventListener('mouseover', () => {
    sale.classList.add("on");
});

sale.addEventListener('mouseleave', () => {
    sale.classList.remove("on");
});

kid.addEventListener('mouseover', () => {
    kid.classList.add("on");
});

kid.addEventListener('mouseleave', () => {
    kid.classList.remove("on");
});