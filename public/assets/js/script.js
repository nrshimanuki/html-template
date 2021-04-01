(function ($) {

	/* menu
	------------------------------*/
	$('#menu_button').on('click', function() {
		if (!$(this).hasClass('__open')) {
			$(this).addClass('__open');
			$('body').addClass('__menu_open');
		} else {
			$(this).removeClass('__open');
			$('body').removeClass('__menu_open');
		}
	});


	/* slider
	------------------------------*/
	// $('.slider').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 3500,
	// 	arrows: false,
	// 	dots: true,
	// 	speed: 1800,
	// 	infinite: true,
	// 	fade: true,
	// 	cssEase: 'linear'
	// });


	/* pagetop
	------------------------------*/
	const pageTop = $('#pagetop');
	pageTop.on('click',function() {
		$('html, body').animate({scrollTop: '0'}, 500);
	});

	$(window).on('load scroll resize',function() {
		const showTop = 400;
		if($(window).scrollTop() > showTop) {
			pageTop.fadeIn();
		} else {
			pageTop.fadeOut();
		}
	});

}(jQuery));
