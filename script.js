document.addEventListener("DOMContentLoaded", () => {

    // NAVIGATION
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.classList.remove("active");
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add("active");

            nav.classList.remove("active");
        });
    });

    // SLIDER
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 2000);
    }

});