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

let insta_box = document.querySelector(".insta_box");
let insta_on = document.querySelector(".insta_on");
let insta_off = document.querySelector(".insta_off");

let youtube_box = document.querySelector(".youtube_box");
let youtube_on = document.querySelector(".youtube_on");
let youtube_off = document.querySelector(".youtube_off");

insta_box.addEventListener("mouseover", () => {
    insta_on.classList.add("on");
    insta_off.classList.add("off");
});

insta_box.addEventListener("mouseleave", () => {
    insta_on.classList.remove("on");
    insta_off.classList.remove("off");
});

youtube_box.addEventListener("mouseover", () => {
    youtube_on.classList.add("on");
    youtube_off.classList.add("off");
});

youtube_box.addEventListener("mouseleave", () => {
    youtube_on.classList.remove("on");
    youtube_off.classList.remove("off");
});
