"use strict";
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
console.log("menuBtn :>> ", closeBtn);
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
    });
    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
    });
    // Close menu on link click
    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
        });
    });
}
