const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});