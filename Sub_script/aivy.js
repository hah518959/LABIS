document.addEventListener('DOMContentLoaded', () => {
    
    const topSlider = document.getElementById('top_slider');
    const bottomSlider = document.getElementById('bottom_slider');
    
    if (topSlider && bottomSlider) {
        let topImagesHTML = '';
        let bottomImagesHTML = '';
        
        for (let i = 0; i < 2; i++) { 
            for (let j = 1; j <= 10; j++) {
                topImagesHTML += `<img src="img/fashion${j}.png" alt="cloth${j}">`;
            }
            for (let j = 11; j <= 20; j++) {
                bottomImagesHTML += `<img src="img/fashion${j}.png" alt="cloth${j}">`;
            }
        }
        topSlider.innerHTML = topImagesHTML;
        bottomSlider.innerHTML = bottomImagesHTML;
    }

    const reviewTrack = document.getElementById('review_track');
    if (reviewTrack) {
        const clone = reviewTrack.innerHTML;
        reviewTrack.innerHTML += clone;
    }

    const animElements = document.querySelectorAll('.scroll_anim');
    
    if (animElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is_visible');
                }
            });
        }, {
            threshold: 0.15
        });

        animElements.forEach(el => observer.observe(el));
    }

    const header = document.querySelector('.main_header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(18, 19, 20, 1)';
                header.style.borderBottom = '1px solid #444';
            } else {
                header.style.backgroundColor = 'rgba(18, 19, 20, 0.95)';
                header.style.borderBottom = '1px solid #333';
            }
        });
    }

});
