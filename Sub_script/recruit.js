const menu = document.querySelector(".menu");

const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");

const detail4 = document.querySelector(".detail4");
const detail5 = document.querySelector(".detail5");
const detail6 = document.querySelector(".detail6");
//-----------------------------popup------------------------------------

const detail_popup1 = document.querySelector(".detail_popup1");
const detail_popup2 = document.querySelector(".detail_popup2");
const detail_popup3 = document.querySelector(".detail_popup3");
const detail_popup4 = document.querySelector(".detail_popup4");
const detail_popup5 = document.querySelector(".detail_popup5");
const detail_popup6 = document.querySelector(".detail_popup6");

const block_back = document.querySelector(".background_block_box")
const detailButtons = [detail1, detail2, detail3, detail4, detail5, detail6];
const detailPopups = [
    detail_popup1,
    detail_popup2,
    detail_popup3,
    detail_popup4,
    detail_popup5,
    detail_popup6,
];

detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        detailPopups.forEach((popup) => popup.classList.remove("on"));
        detailPopups[index].classList.add("on");
        block_back.classList.add("on");
    });
});

document.querySelectorAll(".popup_close").forEach((button) => {
    button.addEventListener("click", () => {
        detailPopups.forEach((popup) => popup.classList.remove("on"));
        block_back.classList.remove("on");
    });
});






//-----------------------------nav------------------------------------
const s_recruit = document.querySelector(".s_recruit");
const resume_guide = document.querySelector(".resume_guide");
const my_resume = document.querySelector(".my_resume");
const login = document.querySelector(".login");
const login_btn = document.querySelector(".login_btn");
const buttons = document.querySelectorAll(".button");

const recruit_contents = document.querySelector(".recruit_contents");
const resume_guide_contents = document.querySelector(".resume_guide_contents");
const my_resume_contents = document.querySelector(".my_resume_contents");
const login_contents = document.querySelector(".login_contents");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        recruit_contents.classList.remove("on");
        resume_guide_contents.classList.remove("on");
        my_resume_contents.classList.add("on");
        login_contents.classList.remove("on");
        s_recruit.classList.remove("on");
        resume_guide.classList.remove("on");
        my_resume.classList.add("on");
        login.classList.remove("on");
    });
});

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

login_btn.addEventListener("click", () => {
    recruit_contents.classList.remove("on");
    resume_guide_contents.classList.remove("on");
    my_resume_contents.classList.remove("on");
    login_contents.classList.add("on");
    s_recruit.classList.remove("on");
    resume_guide.classList.remove("on");
    my_resume.classList.remove("on");
    login.classList.add("on");
})

