document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel img');
    const totalItems = carouselItems.length;
    const itemWidth = carouselItems[0].clientWidth;
    const viewportWidth = document.querySelector('.carousel-container').offsetWidth;
    let scrollPosition = 0;
    let direction = 1; // 1 for forward, -1 for backward
    const scrollSpeed = 2.5; // Increased speed by 20%

    function animateCarousel() {
        scrollPosition += scrollSpeed * direction;

        // Calculate when the last image comes fully into view
        const maxScrollPosition = (itemWidth * totalItems) - viewportWidth;

        // Check for bounds to reverse direction
        if (scrollPosition >= maxScrollPosition) {
            direction = -1; // Reverse direction when the last image is fully in view
        } else if (scrollPosition <= 0) {
            direction = 1; // Reverse direction at the start
        }

        carousel.style.transform = `translateX(${-scrollPosition}px)`;
        requestAnimationFrame(animateCarousel);
    }

    animateCarousel();
});