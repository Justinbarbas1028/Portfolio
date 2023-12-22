//navigation focus and hover

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('#header, #about, #skill, #project, #contact');
    const navLinks = document.querySelectorAll('.main-navigation ul li a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.main-navigation ul li a[href="#${id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.7 });

    sections.forEach(section => observer.observe(section));
});

function toggleNav() {
    const nav = document.querySelector('.main-navigation ul');
    nav.classList.toggle('show');
}


const hamburgerIcon = document.getElementById('hamburger-icon');
hamburgerIcon.addEventListener('click', toggleNav);

let skillPercent = document.querySelector('.skill-percent');
let width = window.getComputedStyle(skillPercent).getPropertyValue('width');
skillPercent.setAttribute('per', width);