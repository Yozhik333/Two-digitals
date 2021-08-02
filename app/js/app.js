document.addEventListener('DOMContentLoaded', () => {

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

})
