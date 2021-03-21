$(document).on('ready', function() {
		$(".regular").slick({
			slidesToShow: 3,
			slidesToScroll: 3
		});
		$('.slider-for').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.slider-nav'

		});
		$('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			autoplay: true,
			infinite: false,
			arrows: false,
			autoplaySpeed: 3000,
			dots: true,
			centerMode: true,
			focusOnSelect: true			
		});
    });
