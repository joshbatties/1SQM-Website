document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('nav');
    var logo = nav.querySelector('.logo');
    var logoText = "One Square Metre";

    function updateNavStyle() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        // Keep logo text constant
        logo.textContent = logoText;
    }

    window.addEventListener('scroll', updateNavStyle);

    // Remove hover effect changing text
    logo.removeEventListener('mouseenter', function() {});
    logo.removeEventListener('mouseleave', updateNavStyle);

    // Initial update
    updateNavStyle();

    const menuToggle = document.querySelector('.menu-toggle');
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    const closeButton = document.querySelector('.close-button');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        fullScreenMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        fullScreenMenu.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (fullScreenMenu.classList.contains('active') && !fullScreenMenu.contains(event.target) && event.target !== menuToggle) {
            fullScreenMenu.classList.remove('active');
        }
    });

    // Prevent clicks inside the menu from closing it
    fullScreenMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});