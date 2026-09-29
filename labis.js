let logo = document.querySelector(".logo");
let box1 = document.querySelector(".box1");

box1.addEventListener("mouseenter", () => {
    logo.classList.add("on");
    box1.classList.add("on");
});

box1.addEventListener("mouseleave", () => {
    logo.classList.remove("on");
    box1.classList.remove("on");
});