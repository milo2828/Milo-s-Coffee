document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.innerText = '☰'; // Menu icon
    document.querySelector('header').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
