document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Afficher accueil au chargement SANS aucun défilement
    document.getElementById("accueil").classList.add("active");
    document.querySelector('nav a[href="#accueil"]').classList.add("active-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();

                sections.forEach(sec => sec.classList.remove("active"));
                navLinks.forEach(l => l.classList.remove("active-link"));

                const target = document.getElementById(href.replace("#", ""));
                if (target) {
                    target.classList.add("active");
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 50);
                }

                link.classList.add("active-link");
            }
        });
    });

    // SLIDER
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    if (slides.length) {
        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 5000);
    }

});