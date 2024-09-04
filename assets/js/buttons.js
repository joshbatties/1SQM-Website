// Button Container Opacity
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const buttonContainer = document.querySelector('.button-container');
        if (buttonContainer) {
            buttonContainer.classList.add('show');
        }
    }, 2000);
});