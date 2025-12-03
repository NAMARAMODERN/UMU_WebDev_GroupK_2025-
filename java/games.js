document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-wrapper');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const totalImages = images.length;
        let currentIndex = 0;
    
        const sliderWidth = `${totalImages * 100}%`;
        const imageWidth = `${100 / totalImages}%`;
        Object.assign(slider.style, {
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            width: sliderWidth
        });

        images.forEach(img => {
            img.style.width = imageWidth;
        });
        const slideTo = (index) => {
            currentIndex = (index < 0) ? totalImages - 1 : (index >= totalImages) ? 0 : index;
            
            const offset = -currentIndex * (100 / totalImages);
            
            slider.style.transform = `translateX(${offset}%)`;
        };
        const startAutoplay = () => {
            return setInterval(() => slideTo(currentIndex + 1), 3000); 
        };

        slideTo(0);
        let slideInterval = startAutoplay();
    
        const card = slider.closest('.card');
        card.addEventListener('mouseenter', () => clearInterval(slideInterval));

        card.addEventListener('mouseleave', () => {
            slideInterval = startAutoplay();
        });
    });
});
