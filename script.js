const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

// Open/close sidebar
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Auto-close sidebar on link click
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const elements = document.querySelectorAll(
    ".hero-text, .about-con-2, .skills-title, .skills-box, .project-card, .contact-row"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
