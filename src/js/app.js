import * as flsFunctions from "./vendor/functions.js";
import "lazysizes";

flsFunctions.isWebp();

if (navigator.userAgent.indexOf("Firefox") >= 0) {
	var elms = document.querySelectorAll("link[rel=preload][as=style]");
	for (let i = 0; i < elms.length; i++) {
		elms[i].rel = "stylesheet";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");

	const header = document.querySelector('.header');
	const menuButton = header.querySelector('.menu__button');
	const topMenu = header.querySelector('.top-menu');

	const openMenu = (event) => {
		menuButton.classList.toggle('is-open');
		body.classList.toggle('is-fixed');
		topMenu.classList.toggle('is-open');
	}

	menuButton.addEventListener('click', openMenu);

});




