// init Swiper:
const swiper = new Swiper(".doctors__swiper", {

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// Default parameters
	slidesPerView: 1.5,
	spaceBetween: 10,
	// Responsive breakpoints
	breakpoints: {

		// when window width is >= 480px
		600: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 1024px
		1024: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
});