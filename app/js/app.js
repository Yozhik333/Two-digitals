import Aos from 'aos';
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {

	Aos.init();

	// IsMobile start

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		document.body.classList.add('_touch');

		let menuArrows = document.querySelectorAll('.menu__arrow-sub');
		if (menuArrows.length > 0) {
			for (let index = 0; index < menuArrows.length; index++) {
				const menuLinkSubList = menuArrows[index];
				menuLinkSubList.addEventListener("click", function (e) {
					menuLinkSubList.parentElement.classList.toggle('_active');
				});
			}
		}

	} else {
		document.body.classList.add('_pc');

	}
	// IsMobile end

	let menuHeader = document.querySelectorAll('.menu__arrow');
	if (menuHeader.length > 0) {
		for (let index = 0; index < menuHeader.length; index++) {
			const menuLinkList = menuHeader[index];
			menuLinkList.addEventListener("click", function (e) {
				menuLinkList.parentElement.classList.toggle('_active');
			});
		}
	}

	// Меню бургер
	const iconMenu = document.querySelector('.menu__icon');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu__body');
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	}

	// Аккордион

	let accr = document.querySelectorAll('.accordion__control');

	if (accr.length > 0) {
		for (let index = 0; index < accr.length; index++) {
			const accrOpen = accr[index];
			accrOpen.addEventListener("click", function (e) {
				accrOpen.parentElement.classList.toggle('open');
				const self = document.querySelector('.accordion');
				const control = document.querySelector('.accordion__control');
				const content = document.querySelector('.accordion__content');

				// если открыт аккордеон
				if (self.classList.contains('open')) {
					control.setAttribute('aria-expanded', true);
					content.setAttribute('aria-hidden', false);
					content.style.maxHeight = content.scrollHeight + 'px';
				} else {
					control.setAttribute('aria-expanded', false);
					content.setAttribute('aria-hidden', true);
					content.style.maxHeight = null;
				}
			});
		}
	}

	//let accr = document.querySelectorAll('.accordion__control');

	//if (accr.length > 0) {
	//	for (let index = 0; index < accr.length; index++) {
	//		const accrOpen = accr[index];
	//		accrOpen.addEventListener("click", function (e) {
	//			accrOpen.parentElement.classList.toggle('open');
	//			const self = document.querySelector('.accordion');
	//			const control = document.querySelector('.accordion__control');
	//			const content = document.querySelector('.accordion__content');

	//			// если открыт аккордеон
	//			if (self.classList.contains('open')) {
	//				control.setAttribute('aria-expanded', true);
	//				content.setAttribute('aria-hidden', false);
	//				content.style.maxHeight = content.scrollHeight + 'px';
	//			} else {
	//				control.setAttribute('aria-expanded', false);
	//				content.setAttribute('aria-hidden', true);
	//				content.style.maxHeight = null;
	//			}
	//		});
	//	}
	//}

	// !Аккордион-убрать
	//const accordions = document.querySelectorAll('.accordion');

	//accordions.forEach(el => {
	//	el.addEventListener('click', (e) => {
	//		const self = e.currentTarget;
	//		const control = self.querySelector('.accordion__control');
	//		const content = self.querySelector('.accordion__content');

	//		self.classList.toggle('open');

	//		// если открыт аккордеон
	//		if (self.classList.contains('open')) {
	//			control.setAttribute('aria-expanded', true);
	//			content.setAttribute('aria-hidden', false);
	//			content.style.maxHeight = content.scrollHeight + 'px';
	//		} else {
	//			control.setAttribute('aria-expanded', false);
	//			content.setAttribute('aria-hidden', true);
	//			content.style.maxHeight = null;
	//		}
	//	});
	//});


	//! Next sliders

	// main-page. Section Steps, slider

	const stepsWork = new Swiper('#stepsWork', {
		loop: false,
		slidesPerView: 3,
		spaceBetween: 110,
		navigation: {
			nextEl: '.steps-work-next',
			prevEl: '.steps-work-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			578: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
			},
		}
	});

	// main-page. Section blogSlider, slider

	const blogSlider = new Swiper('#blogSlider', {
		loop: false,
		slidesPerView: 2,
		spaceBetween: 110,
		navigation: {
			nextEl: '.blog-slider-next',
			prevEl: '.blog-slider-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			578: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 2,
			},
		}
	});

	//!

})
