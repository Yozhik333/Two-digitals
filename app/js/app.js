import Aos from 'aos';
import IMask from 'imask';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, EffectFade, Pagination]);

// import {hello} from './quiz';
import './quiz.js'
import './ajaxBackup.js'

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

		// Найти все ссылки начинающиеся на #
		const anchors = document.querySelectorAll('a[href^="#consultation-yak"]')

		// Цикл по всем ссылкам
		for (let anchor of anchors) {
			anchor.addEventListener("click", function (e) {
				e.preventDefault() // Предотвратить стандартное поведение ссылок
				// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
				const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
				// Плавная прокрутка до элемента с id = href у ссылки
				document.querySelector(goto).scrollIntoView({
					behavior: "smooth",
					block: "start"
				})
			})
		}

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
	window.onscroll = function showHeader() {
		var headerFixed = document.querySelector('.header');

		if (window.pageYOffset > 50) {
			headerFixed.classList.add('backToTop_visible');
		} else {
			headerFixed.classList.remove('backToTop_visible');
		}
	}

	/* Для фиксации меню при скроле вниз */
	//window.addEventListener('DOMContentLoaded', function () {
	//	const scrollUpButton = document.querySelector('.backToTop');

	//	if (scrollUpButton) {
	//		scrollUpButton.addEventListener('click', function name() {
	//			window.scrollTo({
	//				top: 0,
	//				behavior: 'smooth',
	//			});
	//		});

	//		window.addEventListener('scroll', function () {
	//			const scrolled = window.pageYOffset || document.documentElement.scrollTop;

	//			if (scrolled >= 37) {
	//				scrollUpButton.classList.add('backToTop_visible');
	//			} else {
	//				scrollUpButton.classList.remove('backToTop_visible');
	//			}
	//		});
	//	}
	//});

	// Аккордион

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
		spaceBetween: 30,
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
		allowTouchMove: false,
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

	const aboutNavigation = new Swiper(".aboutNavigation", {
		spaceBetween: 30,
		slidesPerView: 8,
		direction: "vertical",
		allowTouchMove: false,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".about-pagination",
			dynamicBullets: true,
			paginationType: "custom"
		},
		breakpoints: {
			320: {
				slidesPerView: 2.5,
				direction: "horizontal",
			},
			1024: {
				slidesPerView: 8,
				direction: "vertical",
			},
		}
	});

	//!

	//! modal ==========================================================

	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");

	let unlock = true;

	const timeout = 200;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(curentPopup) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('_lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('_lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойство
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();

	// Blog-post

	let spisok_blog_class = [
		'.blog-menu-rc', '.blog-menu-direct',
		'.blog-menu-target', '.blog-menu-facebook',
		'.blog-menu-vk', '.blog-menu-api',
		'.blog-menu-resume'
	]

	// active class of menu items onscroll
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (window.innerWidth > 500) {
			document.querySelectorAll('.blog-post__text').forEach((el, i) => {
				if (el.offsetTop - document.querySelector('.blogs__col-menu').clientHeight <= scrollDistance - 300) {
					document.querySelectorAll('.sub-headings a').forEach((el) => {
						if (el.classList.contains('sub-headings-cubes')) {
							el.classList.remove('sub-headings-cubes');
						}
					});

					document.querySelectorAll('.sub-headings')[i].querySelector('a').classList.add('sub-headings-cubes');
				}
			});
		}
	});

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (window.innerWidth > 500) {
			document.querySelectorAll('.blog-post').forEach((el, i) => {
				if (el.offsetTop - document.querySelector('.blogs__col-menu').clientHeight <= scrollDistance) {
					document.querySelectorAll('.blogs__menu-headeer').forEach((el) => {
						if (el.classList.contains('sub-headings-color')) {
							el.classList.remove('sub-headings-color');
						}
					});

					document.querySelectorAll('.blogs__menu-headeer')[i].classList.add('sub-headings-color');
				}
			});
		}
	});

	// flags
	class ChangeFlag {
		constructor(element) {
			this.container = element;
			this.flagsPhone = {
				"RU": '+7(000)000-00-00',
				"KZ": '+77(000)000-00-00',
				"UA": '+380(000)000-00-00',
				"BY": '+375(000)000-00-00',
			}

			this.container.querySelector('.div').innerHTML = "<input class='user-phone-mask' type='text' name='user-phone' id='user-phone'>"
			this.container.querySelector('.user-phone-mask').placeholder = this.flagsPhone['RU'];
			let phoneMask = IMask(
				this.container.querySelector('.user-phone-mask'), {
				mask: this.flagsPhone['RU']
			});

			this.start();

			this.isOpen = true;

			this.flagsWebSite = 'https://www.countryflags.io/';
		}
		start() {
			this.container.querySelector('.request__form-change__flag').onclick = () => {
				if (this.isOpen) {
					this.container.querySelector('.request__form-change__flag').classList.add('open-change__flag');
					this.isOpen = false;
				}
			};

			document.addEventListener('click', (e) => {
				if (e.target.nodeName != 'IMG') {
					this.container.querySelector('.request__form-change__flag').classList.remove('open-change__flag');
					this.isOpen = true;
				}
			})

			this.container.querySelector('.request__form-change__flag').querySelectorAll('img').forEach(item => {
				item.onclick = () => {
					if (!this.isOpen) {
						this.container.querySelector('.request__form-change__flag').querySelectorAll('img').forEach(img => {
							img.style.order = 1;
						});

						item.style.order = 0;

						this.container.querySelector('.request__form-change__flag').classList.remove('open-change__flag');

						console.log(item.dataset.country)

						this.container.querySelector('.div').innerHTML = "<input class='user-phone-mask' type='text' name='user-phone' id='user-phone'>"
						this.container.querySelector('.user-phone-mask').placeholder = this.flagsPhone[item.dataset.country];

						let phoneMask = IMask(
							this.container.querySelector('.user-phone-mask'), {
							mask: this.flagsPhone[item.dataset.country]
						});

						setTimeout(() => {
							this.isOpen = true;
						}, 200)
					}
				}
			})

		}
	}


	let changeFlag = document.querySelectorAll(".request__form");
	changeFlag.forEach(item => {
		new ChangeFlag(item);
	});



	// let phoneMask = IMask(
	// 	document.getElementById('user-phone2'), {
	// 		mask: '+{6}(000)000-00-00'
	// });

})
