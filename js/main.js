const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-linkss");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", isOpen ? "ri-close-line" : "ri-menu-5-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-5-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});
ScrollReveal().reveal(".about-btn", {
    ...scrollRevealOption,
    delay:2000,
});
ScrollReveal().reveal(".blog-card", {
    duration: 1000,
    interval: 500,
});
ScrollReveal().reveal(".blog-btn" , {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".contact-image img" , {
    ...scrollRevealOption,
});