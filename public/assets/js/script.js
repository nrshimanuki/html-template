(function ($) {

	/* menu
	------------------------------*/
	$('#menu_button, #menu_close').on('click', function() {
		if (!$('#menu_button').hasClass('-open')) {
			$('body').addClass('-menu_open');
			$('#menu_button').addClass('-open');
		} else {
			$('body').removeClass('-menu_open');
			$('#menu_button').removeClass('-open');
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



	/* AjaxZip3
	------------------------------*/
	jQuery('#form_zip02').keyup(function(event){
		AjaxZip3.zip2addr('form_zip01','form_zip02','form_address01','form_address01');
		return false;
	})



}(jQuery));
