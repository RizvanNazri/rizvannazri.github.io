// настройка прелоудера
$(window).on('load', function () {
	$('.preloader').delay(500).fadeOut('slow');
});

// настройка якорей
$('.flowing-scroll').on('click', function () {
	var el = $(this);
	var dest = el.attr('href'); // получаем направление
	if (dest !== undefined && dest !== '') { // проверяем существование
		$('html').animate({
			scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
		}, 1000 // скорость прокрутки
		);
	}
	return false;
});

// бургер-меню
$(document).ready(function () {
	var men = true;
	$("#sandwich").click(function () {
		if (men == false) {
			$(".menu").slideUp();
			men = !men;
		}
		else {
			$(".menu").slideDown();
			men = !men;
		}
	});
	$("#sandwich, .menu_item").click(function () {
		$("#sandwich").toggleClass("active");
	});
});

// кнопка наверх
function topButton() {
	let button = $('.top-button');

	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 150) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({ scrollTop: 0 }, 1000);
	})
}

topButton();

// анимация при прокручивании к блоку
$(function () {
	$(window).scroll(function () {
		// анимации для оффера
		$('.ski').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
		$('.snowboard').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInUp");
			}
		});
		$('.boarder').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInRight");
			}
		});
		// анимации для галереи
		$('.photo-up').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
		$('.photo-right').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
		$('.photo-left').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInRight");
			}
		});
		$('.photo-center').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeIn");
			}
		});
		$('.photo-down').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInUp");
			}
		});
		// анимации для команды
		$('.instructor').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInUp");
			}
		});
	});
})

// анимация счётчика цифр
$(document).ready(function () {

	var a = 0;
	$(window).scroll(function () {

		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
					{
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
			});
			a = 1;
		}
	});
});

// поп-ап окно
$('.btn').click(function () {
	$('.popup-fast').css({ 'top': $(window).scrollTop() + 100 }).fadeIn();
	$('.bg-popup').fadeIn();

	$('.bg-popup').click(function () {
		$('.popup-fast').fadeOut();
		$('.bg-popup').fadeOut();
	});
});

// следование поп-ап окна за экраном
$(window).scroll(function () {
	$('.popup-fast').css({ 'top': $(window).scrollTop() + 100 })
}).scroll();
