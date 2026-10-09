const menu = document.querySelector(".menu");

const recruit1 = document.querySelector(".recruit1");
const recruit2 = document.querySelector(".recruit2");
const recruit3 = document.querySelector(".recruit3");

const recruit4 = document.querySelector(".recruit4");
const recruit5 = document.querySelector(".recruit5");
const recruit6 = document.querySelector(".recruit6");
//-----------------------------popup------------------------------------
const menu_popup = document.querySelector(".menu_popup");

const recruit1_popup1 = document.querySelector(".recruit1_popup1");
const recruit1_popup2 = document.querySelector(".recruit1_popup2");
const recruit1_popup3 = document.querySelector(".recruit1_popup3");

const recruit1_popup4 = document.querySelector(".recruit1_popup4");
const recruit1_popup5 = document.querySelector(".recruit1_popup5");
const recruit1_popup6 = document.querySelector(".recruit1_popup6");

menu.addEventListener("click", () => {
    menu_popup.classList.add("on");
});

recruit1, recruit2, recruit3,
recruit4, recruit5, recruit6.addEventListener("click", ()=> {
    recruit1, recruit2, recruit3, recruit4, recruit5, recruit6.classList.add("on");
});
//-----------------------------nav------------------------------------
const s_recruit = document.querySelector(".s_recruit");
const resume_guide = document.querySelector(".resume_guide");
const my_resume = document.querySelector(".my_resume");
const login = document.querySelector(".login");

const recruit_contents = document.querySelector(".recruit_contents")
const resume_guide_contents = document.querySelector(".resume_guide_contents")
const my_resume_contents = document.querySelector(".my_resume_contents")
const login_contents = document.querySelector(".login_contents")

s_recruit.addEventListener("click", () => {
    recruit_contents.classList.add("on");
    resume_guide_contents.classList.remove("on");
    my_resume_contents.classList.remove("on");
    login_contents.classList.remove("on");
    s_recruit.classList.add("on");
    resume_guide.classList.remove("on");
    my_resume.classList.remove("on");
    login.classList.remove("on");
});

resume_guide.addEventListener("click", () => {
    recruit_contents.classList.remove("on");
    resume_guide_contents.classList.add("on");
    my_resume_contents.classList.remove("on");
    login_contents.classList.remove("on");
    s_recruit.classList.remove("on");
    resume_guide.classList.add("on");
    my_resume.classList.remove("on");
    login.classList.remove("on");
});

my_resume.addEventListener("click", () => {
    recruit_contents.classList.remove("on");
    resume_guide_contents.classList.remove("on");
    my_resume_contents.classList.add("on");
    login_contents.classList.remove("on");
    s_recruit.classList.remove("on");
    resume_guide.classList.remove("on");
    my_resume.classList.add("on");
    login.classList.remove("on");
});

login.addEventListener("click", () => {
    recruit_contents.classList.remove("on");
    resume_guide_contents.classList.remove("on");
    my_resume_contents.classList.remove("on");
    login_contents.classList.add("on");
    s_recruit.classList.remove("on");
    resume_guide.classList.remove("on");
    my_resume.classList.remove("on");
    login.classList.add("on");
});
