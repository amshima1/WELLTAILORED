/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   WHATSAPP BUTTON
========================= */

/*
    Replace this number with
    Well Tailored's real WhatsApp
    number.

    Example:
    2348012345678
*/

const whatsappNumber = "2340000000000";

const whatsappMessage =
    "Hello Well Tailored, I would like to make an enquiry about your tailoring services.";

const whatsappButton =
    document.getElementById("whatsappBtn");


whatsappButton.addEventListener("click", function (event) {

    event.preventDefault();

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .collection-card, .about-content"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${currentYear} Well Tailored. All Rights Reserved.`;

}
