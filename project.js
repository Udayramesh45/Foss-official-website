document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        console.log('Menu icon clicked'); // Debugging: check if click is detected
        navbar.classList.toggle('show');
    });
});
