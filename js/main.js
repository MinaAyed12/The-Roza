// Select Element Function
const selectElement = function (element) {
	return document.querySelector(element);
};

let navbar = selectElement('.nav'),
	menuToggler = selectElement('.menu-toggle');

menuToggler.addEventListener('click', function () {
	navbar.classList.toggle('open');
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
