


const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

// Menu burger
if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Navigation entre sections
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Cacher toutes les sections
        sections.forEach(sec => sec.classList.remove("active"));

        // Afficher la section ciblée
        const target = link.getAttribute("href").replace("#", "");
        const section = document.getElementById(target);

        if (section) {
            section.classList.add("active");
        }

        // Fermer le menu mobile
        if (nav) {
            nav.classList.remove("active");
        }
    });
});






// MENU
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// NAVIGATION
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        sections.forEach(sec => sec.classList.remove("active"));

        const target = link.getAttribute("href").replace("#", "");
        document.getElementById(target).classList.add("active");

        nav.classList.remove("active");
    });
});

// SLIDER AUTO
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 200);

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // masquer tout
        sections.forEach(sec => sec.classList.remove("active"));

        // afficher cible
        const target = link.getAttribute("href").replace("#", "");
        document.getElementById(target).classList.add("active");
    });
});