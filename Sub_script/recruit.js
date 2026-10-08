const text = document.querySelector(".recruit_text");
const a_text = document.querySelector(".logo").textContent;
let s_recruit = document.querySelector(".s_recruit");
const nav = document.querySelector("nav");

const bringText = text.textContent.replace(a_text, '').trim();


const target = "채용공고";

if(bringText == target){
    s_recruit.classList.add("on1");
};

nav.addEventListener("mouseenter", () => {
    s_recruit.classList.add("on2");
});
nav.addEventListener("mouseleave", () => {
    s_recruit.classList.remove("on2");
})
