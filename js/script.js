// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= CLOSE MENU =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active-link");
        }

    });

});

// ================= SCROLL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".about-container, .certificate-card, .resume-card, .contact-card"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ================= TYPING EFFECT =================

const roles = [
    "Data Analyst",
    "Web Developer",
    "Python Enthusiast",
    "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".home h2");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }
    else{
        setTimeout(eraseEffect, 1500);
    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }

}

typingElement.textContent = "";
typeEffect();

// ================= TOP BUTTON =================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.classList.add("show-top-btn");
    }
    else{
        topBtn.classList.remove("show-top-btn");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

console.log("Portfolio Loaded Successfully 🚀");