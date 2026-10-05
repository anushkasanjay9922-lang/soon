
const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

// Welcome button interaction
welcomeBtn.addEventListener("click", function () {
    message.textContent =
        "✓ Welcome, Gargi! Keep learning, keep building, and keep innovating! 🚀";

    message.hidden = false;
    welcomeBtn.innerHTML = "<span>✓</span> Welcome Message Displayed";

    welcomeBtn.setAttribute("aria-describedby", "message");
});

// Mobile navigation
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update the copyright year
year.textContent = new Date().getFullYear();