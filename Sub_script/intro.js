document.addEventListener("DOMContentLoaded", () => {
    const imgBoxes = document.querySelectorAll(".img_box");

    imgBoxes.forEach(box => {
        box.style.clipPath = "inset(0 100% 0 0)";
    });

    function handleScroll() {
        const windowHeight = window.innerHeight;

        imgBoxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            
            const scrollTotal = windowHeight + rect.height;
            const scrolled = windowHeight - rect.top;
            
            let progress = scrolled / scrollTotal;
            progress = Math.max(0, Math.min(1, progress));

            let clipRight = 100;
            let clipLeft = 0;

            if (progress < 0.4) {
                clipRight = 100 - (progress / 0.4 * 100);
            } else if (progress > 0.6) {
                clipRight = 0;
                clipLeft = ((progress - 0.6) / 0.4 * 100);
            } else {
                clipRight = 0;
                clipLeft = 0;
            }

            box.style.clipPath = `inset(0 ${clipRight}% 0 ${clipLeft}%)`;
        });
    }

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    handleScroll();
});
