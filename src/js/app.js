import * as flsFunctions from "./modules/functions.js";
// import Swiper from 'swiper';

flsFunctions.isWebp();
flsFunctions.bodyLockToggle();
flsFunctions.bodyUnlock();
flsFunctions.bodyLock();
// flsFunctions.bodyLockStatus();
flsFunctions.menuInit();
flsFunctions.menuOpen();
flsFunctions.menuClose();


// import Swiper bundle with all modules installed
import Swiper, {
	Navigation,
	Pagination
} from 'swiper';

// init Swiper:
const swiper = new Swiper(".doctorsSwiper", {
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// Default parameters
	slidesPerView: 1.35,
	spaceBetween: 10,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 10
		},

		// when window width is >= 1024px
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 1280px
		1280: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
});

// init Swiper:
// const swiper = new Swiper(".doctors__swiper", {

// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	// Default parameters
// 	slidesPerView: 1.5,
// 	spaceBetween: 10,
// 	// Responsive breakpoints
// 	breakpoints: {

// 		// when window width is >= 480px
// 		600: {
// 			slidesPerView: 3,
// 			spaceBetween: 30
// 		},
// 		// when window width is >= 1024px
// 		1024: {
// 			slidesPerView: 4,
// 			spaceBetween: 40
// 		}
// 	}
// });