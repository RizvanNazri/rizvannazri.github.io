$(window).on('load', function () {
	$('.preloader').delay(1500).fadeOut('slow');
});

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav_link').toggleClass('menu-nav_link_active');
});

$('.flowing-scroll').on('click', function () {
	var el = $(this);
	var dest = el.attr('href');
	if (dest !== undefined && dest !== '') {
		$('html').animate({
			scrollTop: $(dest).offset().top
		}, 1000
		);
	}
	return false;
});

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
