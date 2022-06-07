new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		/*
		// Буллеты
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/

		// Фракция
		type: 'fraction',
		// Кастомные вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		},

		/*
		// Прогрессбар
		type: 'progressbar'
	*/
	},
	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},

	// Включение/отключение свайпа на пк
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// управление клавишами
		// pageUP, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью
		eventsTarget: '.image-slider'
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала
	// если слайдов меньше чем нужно
	//watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	//centeredSlides: true,

	// Стартовый слайд
	//initialSlide: 0,

	// Мультирядность
	slidesPercolumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Количество дулирующих слайдов
	loopedSlides: 1,

	// Свободный режим
	freeMode: true,
	/*
		// Автопрокрутка
		autoplay: {
			// Пауза между прокруткой
			delay: 1000, //ms
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Включить\отключить после ручного переключения
			disableOnInteraction: false,
		},
		
		
	*/
	// Скорость смены слайдов
	speed: 800,
	// Вертикальное расположение
	//direction: 'vertical',

	// Эффекты переключения слайдов:
	// / Листание
	effect: 'slide',
	/*
	
	// / Смена прозрачности
	effect: 'fade',
	
	// Дополнения к fade
	fadeEffect: {
		// Паралельная смена прозрачности
		crossFade: true,
	}
	
// / Переворот
effect: 'flip',
// Дополнения к flip
flipEffect: {
	// Тень
	slideShadows: true,
	// Показ только активного слайда
	limitRotation: true,
}

// / Куб
effect: 'cube',
// Дополнения к cube
cubeEffect: {
	// Настройка тени
	slideShadows: true,
	shadow: true,
	shadowOffset: 20,
	shadowScale: 0.94,
},

// / Поток
effect: 'coverflow',
// Дополнения к cube
coverflowEffect: {
	// Угол
	rotate: 20,
	// Наложение
	stretch: 50,
	// Тень
	slideShadows: true,
}
*/
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},


});
"use strict"

// Меню бургер
const iconMenu = document.querySelector('.icon-burger');
const menuBody = document.querySelector('.menu-nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}





// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 20;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			}),
				e.preventDefault();
		}
	}
};

let isMobile = {
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
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let body = document.querySelector('body');

let tabNavs = document.querySelectorAll('.menu-nav__link');
let tabPanes = document.querySelectorAll('.sub-menu-nav__list');

// if (isMobile.any()) {
// body.classList.add('touch');
// let arrow = document.querySelectorAll('.arrow-menu-nav')
// let headWrap = document.querySelector('.header__wrapper_1')
// for (i = 0; i < arrow.length; i++) {
// 	let thisLink = arrow[i].previousElementSibling;
// 	let subMenu = arrow[i].nextElementSibling;
// 	let thisArrow = arrow[i];
// 	thisLink.classList.add('parent');

// 	arrow[i].addEventListener('click', function () {
// 		subMenu.classList.toggle('open');
// 		thisArrow.classList.toggle('active');
// 		headWrap.classList.toggle('active');
// 	})
// 	thisLink.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		subMenu.classList.toggle('open');
// 		thisArrow.classList.toggle('active');
// 		headWrap.classList.toggle('active');
// 	})
// }
// } else {
// 	body.classList.add('mouse');
// }


body.classList.add('touch');
let arrow = document.querySelectorAll('.arrow-menu-nav')
let subMenus = document.querySelectorAll('.sub-menu-nav__list')
let subSubMenus = document.querySelectorAll('.sub-sub-menu-nav__list')
let headWraps = document.querySelectorAll('.header__wrapper')
let headWrap = document.querySelector('.header__wrapper_1')
for (i = 0; i < arrow.length; i++) {
	let thisLink = arrow[i].previousElementSibling;
	let subMenu = arrow[i].nextElementSibling;
	let thisArrow = arrow[i];
	thisLink.classList.add('parent');

	arrow[i].addEventListener('click', function () {
		if (thisArrow.classList.contains('active')) {
			subMenu.classList.remove('open');
			thisArrow.classList.remove('active');
			headWrap.classList.remove('active');
		} else {
			for (el of arrow) {
				el.classList.remove('active');
			}
			for (ela of subMenus) {
				ela.classList.remove('open');
			}
			for (elaa of headWraps) {
				elaa.classList.remove('active');
			}
			for (elaaa of subSubMenus) {
				elaaa.classList.remove('open');
			}
			subMenu.classList.add('open');
			thisArrow.classList.add('active');
			headWrap.classList.add('active');
		}
	})
	thisLink.addEventListener('click', function (e) {
		if (thisArrow.classList.contains('active')) {
			subMenu.classList.remove('open');
			thisArrow.classList.remove('active');
			headWrap.classList.remove('active');
		} else {
			for (el of arrow) {
				el.classList.remove('active');
			}
			for (ela of subMenus) {
				ela.classList.remove('open');
			}
			for (elaa of headWraps) {
				elaa.classList.remove('active');
			}
			for (elaaa of subSubMenus) {
				elaaa.classList.remove('open');
			}
			subMenu.classList.add('open');
			thisArrow.classList.add('active');
			headWrap.classList.add('active');
		}
	})
	for (let index = 0; index < tabNavs.length; index++) {
		tabNavs[index].addEventListener('click', function (e) {
			if (tabNavs[index].classList.contains('parent') == false) {
				for (el of arrow) {
					el.classList.remove('active');
				}
				for (ela of subMenus) {
					ela.classList.remove('open');
				}
				for (elaa of headWraps) {
					elaa.classList.remove('active');
				}
			}
		})
	}


}




function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});





// for (var i = 0; i < tabNavs.length; i++) {
// 	tabNavs[i].addEventListener('click', function (e) {
// 		e.preventDefault();
// 		var activeTabAttr = e.target.getAttribute('data-tab');
// 		for (var j = 0; j < tabNavs.length; j++) {
// 			var contentAttr = tabPanes[j].getAttribute('data-tab-content');

// 			if (activeTabAttr === contentAttr) {
// 				tabNavs[j].classList.add('active');
// 				tabPanes[j].classList.add('active');
// 			} else {

// 				tabNavs[j].classList.remove('active');
// 				tabPanes[j].classList.remove('active');
// 			}
// 		};
// 	});
// }

for (item of tabNavs) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute('data-tab');
		if (this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			for (el of tabNavs) {
				el.classList.remove('active');
			}
			this.classList.add('active');
			for (var j = 0; j < tabNavs.length; j++) {
				var contentAttr = tabPanes[j].getAttribute('data-tab-content');

				if (activeTabAttr === contentAttr) {
					tabNavs[j].classList.add('active');
					tabPanes[j].classList.add('active');
				} else {

					tabNavs[j].classList.remove('active');
					tabPanes[j].classList.remove('active');
				}
			};
		}
	})
};