document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.nav-links');

    if (!menuIcon || !navbar) return;

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close the mobile menu after choosing a link.
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navbar.classList.remove('active'));
    });
});
