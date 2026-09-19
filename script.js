const roles = ["Technical Assistant","IT Support", "Field Service Technician", "Web Developer"]
const typedRole = document.getElementById('typed-role');

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedRole.textContent = currentRole.substring(0, charIndex);

    let delay = deleting ? 40 : 80;

    if (!deleting && charIndex === currentRole.length) {
        delay = 1500;
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
    }

    setTimeout(typeLoop, delay);
}

if (typedRole) {
    typeLoop();
}

const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
