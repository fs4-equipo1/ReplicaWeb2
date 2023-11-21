document.addEventListener('DOMContentLoaded', function () {
    function initSwiper(containerClass) {
        const containers = document.querySelectorAll(`.${containerClass}`);
        
        containers.forEach(container => {
            const slides = container.querySelectorAll('.swiper-slide');
            const prevBtn = container.querySelector('.prevBtn');
            const nextBtn = container.querySelector('.nextBtn');
            let currentIndex = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.style.transform = `translateX(-${index * 100}%)`;
                });
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }

            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        });
    }

    // Initialize multiple swipers
    initSwiper('swiper-container-1');
    initSwiper('swiper-container-2');
    initSwiper('swiper-container-3')
    // Add more if needed
});