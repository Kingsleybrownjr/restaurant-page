import { handleHomeLink, handleMenuLink, handleContactLink } from "./views";

const homeLink = document.querySelector(".home-link");
const menuLink = document.querySelector(".menu-link");
const contactLink = document.querySelector(".contact-link");

homeLink.addEventListener("click", () => handleHomeLink());
menuLink.addEventListener("click", () => handleMenuLink());
contactLink.addEventListener("click", () => handleContactLink());
