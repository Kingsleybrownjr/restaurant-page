import { renderContactTab } from "./contact";
import { renderHomeTab } from "./home";
import { renderMenuTab } from "./menu";
import { renderNavBar } from "./navbar";

renderNavBar();
renderHomeTab();
renderMenuTab();
renderContactTab();

const homeLink = document.querySelector(".home-link");
const menuLink = document.querySelector(".menu-link");
const contactLink = document.querySelector(".contact-link");
const menu = document.querySelector(".menu-div");
const home = document.querySelector(".showcase");
const contact = document.querySelector(".contacts");

const handleHomeLink = () => {
	if (
		menu.className.includes("active") ||
		contact.className.includes("active")
	) {
		menuLink.classList.remove("selected");
		contactLink.classList.remove("selected");
		homeLink.classList.add("selected");
		menu.classList.remove("active");
		menu.classList.add("hide");
		contact.classList.remove("active");
		contact.classList.add("hide");
		home.classList.remove("hide");
		home.classList.add("active");
	}
};

const handleMenuLink = () => {
	if (
		home.className.includes("active") ||
		contact.className.includes("active")
	) {
		contactLink.classList.remove("selected");
		homeLink.classList.remove("selected");
		menuLink.classList.add("selected");
		home.classList.remove("active");
		home.classList.add("hide");
		contact.classList.remove("active");
		contact.classList.add("hide");
		menu.classList.remove("hide");
		menu.classList.add("active");
	}
};

const handleContactLink = () => {
	if (home.className.includes("active") || menu.className.includes("active")) {
		menuLink.classList.remove("selected");
		homeLink.classList.remove("selected");
		contactLink.classList.add("selected");
		home.classList.remove("active");
		home.classList.add("hide");
		menu.classList.remove("active");
		menu.classList.add("hide");
		contact.classList.remove("hide");
		contact.classList.add("active");
	}
};

export { handleHomeLink, handleMenuLink, handleContactLink };
