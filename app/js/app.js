import Aos from 'aos';
import IMask from 'imask';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, EffectFade, Pagination]);

document.addEventListener('DOMContentLoaded', () => {

	Aos.init({
		duration: 700,
		easing: 'ease-in-out-back',
		anchorPlacement: 'top-top',
		delay: '0ms'
	});

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

	/* Для фиксации меню при скроле вниз */
	window.addEventListener('DOMContentLoaded', function () {
		const scrollUpButton = document.querySelector('.backToTop');

		if (scrollUpButton) {
			scrollUpButton.addEventListener('click', function name() {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			});

			window.addEventListener('scroll', function () {
				const scrolled = window.pageYOffset || document.documentElement.scrollTop;

				if (scrolled >= 37) {
					scrollUpButton.classList.add('backToTop_visible');
				} else {
					scrollUpButton.classList.remove('backToTop_visible');
				}
			});
		}
	});

	// Аккордион

	// получить все аккардионы на странице
	const accordionList = document.querySelectorAll('.accordion__list')
	accordionList.forEach(list => list.addEventListener('click', accordionListClickHandler))

	function accordionListClickHandler(e) {
		const accordion = e.target.closest('.accordion')
		if (!accordion) {
			return // если клик не по аккордиону, тогда ничего не делаем
		}

		if (!e.target.closest('.accordion__control')) {
			return // если клик не по контролу, тогда ничего не делаем
		}

		toggleAccordion(accordion)
	}

	function toggleAccordion(accordion) {
		const control = accordion.querySelector('.accordion__control')
		const content = accordion.querySelector('.accordion__content')
		const isOpen = accordion.classList.contains('open')

		if (isOpen) {
			accordion.classList.remove('open')
			control.setAttribute('aria-expanded', false);
			content.setAttribute('aria-hidden', true);
			content.style.maxHeight = null;
		} else {
			accordion.classList.add('open')
			control.setAttribute('aria-expanded', true);
			content.setAttribute('aria-hidden', false);
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	}


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
				slidesPerView: 2.7,
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

	// About-page

	const aboutSlider = new Swiper(".aboutSwiper", {
		spaceBetween: 30,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".about-pagination",
			dynamicBullets: true,
			paginationType: "custom",
			paginationCustomRender: function (swiper, current, total) {
				let names = [];
				document.querySelector(".swiper-wrapper .swiper-slide").each(function (i) {
					names.push(document.querySelector(this).data("name"));
				});
				let text = "<span style='background-color:black;padding:20px;'>";
				for (let i = 1; i <= total; i++) {
					if (current == i) {
						text += "<span style='border-top:1px solid green;margin-right:4px;color:green;padding:10px;'>" + names[i] + "</span>";
					} else {
						text += "<span style='border-top:1px solid white;margin-right:4px;color:white;padding:10px;'>" + names[i] + "</span>";
					}

				}
				text += "</span>";
				return text;
			}
		},
	});

	//!

})
