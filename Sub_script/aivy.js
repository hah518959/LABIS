document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 패션 이미지 슬라이더 동적 생성 (index.html에서만 실행)
    const topSlider = document.getElementById('top_slider');
    const bottomSlider = document.getElementById('bottom_slider');
    
    if (topSlider && bottomSlider) {
        let topImagesHTML = '';
        let bottomImagesHTML = '';
        
        // 무한 슬라이드를 위해 2세트 반복
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

    // 2. 리뷰 무한 스크롤(Marquee) 트랙 복제 로직 (index.html에서만 실행)
    const reviewTrack = document.getElementById('review_track');
    if (reviewTrack) {
        // 부드러운 무한 반복을 위해 HTML 내부에 직접 작성된 카드들을 복제하여 뒤에 이어붙임
        const clone = reviewTrack.innerHTML;
        reviewTrack.innerHTML += clone;
    }

    // 3. 스크롤 애니메이션 (Intersection Observer - 공통 실행)
    const animElements = document.querySelectorAll('.scroll_anim');
    
    if (animElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is_visible');
                }
            });
        }, {
            threshold: 0.15 // 요소가 15% 보일 때 작동
        });

        animElements.forEach(el => observer.observe(el));
    }

    // 4. 헤더 스크롤 이벤트 (공통 실행)
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
