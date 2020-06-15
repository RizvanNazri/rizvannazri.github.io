//Slider

$(document).ready(function () {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.sliderfeed').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

// Flowing scroll

$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
});

// Top button

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

// Popup window

$('.callback').click(function () {
	$('.popup-fast').css({ 'top': $(window).scrollTop() + 65 }).fadeIn();
	$('.bg-popup').fadeIn();

	$('.bg-popup').click(function () {
		$('.popup-fast').fadeOut();
		$('.bg-popup').fadeOut();
	});
});

// Popup scroll

$(window).scroll(function () {
	$('.popup-fast').css({ 'top': $(window).scrollTop() + 65 })
}).scroll();

// Sandwich Menu

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