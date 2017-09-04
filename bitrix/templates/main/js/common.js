$(window).on('load', function() {
});

document.addEventListener("DOMContentLoaded", function() {
	if ($('.js-jcarousel-catalog2').length) {
		$('.js-jcarousel-catalog2').carouFredSel({
			auto: false,
			width: "100%",
			scroll: {
				items: 1,
				pauseOnHover: true
			},
			items: {
				visible: 3
			},
			prev: '.jcarousel4-catalog-control-prev',
			next: '.jcarousel4-catalog-control-next',
			swipe: {
				onMouse: false,
				onTouch: true
			}
		});
	}
// end of document.ready
});
// end of document.ready
