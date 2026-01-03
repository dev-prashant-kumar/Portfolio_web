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

const images = document.querySelectorAll(
  ".hero-img img, .about-con-1 img, .project-card img"
);

const imageObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.25 }
);

images.forEach(img => imageObserver.observe(img));

const texts = [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "App Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    currentText = texts[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, charIndex++);
    } else {
        typingElement.textContent = currentText.slice(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1200;
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
