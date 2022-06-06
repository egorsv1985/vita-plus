/**
 * It creates a new image, sets the source to a base64 encoded webp image, and then checks the height
 * of the image. If the height is 2, then the browser supports webp.
 */
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
/* Функция, которая блокирует тело страницы. */
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
/**
 * Он удаляет заполнение из тела и элементов с атрибутом data-lp.
 * @param [delay=500] - Время, необходимое для разблокировки тела.
 */
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
/**
 * Если bodyLockStatus имеет значение true, добавьте класс 'lock' в documentElement и установите для
 * bodyLockStatus значение false, а после задержки в 500 мс установите для bodyLockStatus значение
 * true.
 * @param [delay=500] - Задержка в миллисекундах перед разблокировкой тела.
 */
export let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/**
 * Если bodyLockStatus имеет значение true, то переключите функцию bodyLockToggle и переключите
 * открытый класс в documentElement.
 */
export function menuInit() {
	let iconMenu = document.querySelector(".burger");
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle("open");
			}
		});
	};
}
/**
 * Когда вызывается функция menuOpen, вызывается функция bodyLock, и к элементу документа добавляется
 * класс open.
 */
export function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("open");
}
/**
 * Если меню открыто, закройте его.
 */
export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("open");
}


menuInit();