document.addEventListener('DOMContentLoaded', () => {
    const lightLayer = document.querySelector('.light_layer');
    const lightContent = document.querySelector('.light_content');
    const header = document.querySelector('.sec_header');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            header.style.background = 'rgba(18, 19, 20, 0.95)';
        } else {
            header.style.background = 'transparent';
        }


        const transitionContainer = document.querySelector('.transition_container');
        const containerTop = transitionContainer.offsetTop; 
        const scrollDistance = transitionContainer.offsetHeight - window.innerHeight; 

        let progress = (scrollY - containerTop) / scrollDistance;
        progress = Math.max(0, Math.min(progress, 1));

        const circleSize = progress * 200; 
        lightLayer.style.clipPath = `circle(${circleSize}% at 50% 80%)`;

        if (circleSize > 50) {
            lightContent.style.opacity = '1';
        } else {
            lightContent.style.opacity = '0';
        }

        if (circleSize > 120) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.color = '#121314';
            header.style.borderBottom = '1px solid #eaeaea';
            document.querySelector('.logo_sub').style.color = '#0055ff'; 
            
            header.classList.add('is_light');
            
        } else if (scrollY > 50) {
            header.style.background = 'rgba(18, 19, 20, 0.95)';
            header.style.color = '#ffffff';
            header.style.borderBottom = 'none';
            document.querySelector('.logo_sub').style.color = '#00ffcc';
            
            header.classList.remove('is_light');
            
        } else {
            header.classList.remove('is_light');
        }
        
    });

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
});
