$(document).ready(function () {

//Trying to figure out which one produces less flickering when triggering mouse events.

/*$('.col-md-4').hover(
	function() {
		$(this).addClass('animated bounceIn');
	}, function() {
		$(this).removeClass('animated bounceIn');
	}
);*/

$('.col-md-3').mouseenter(function() {
	$(this).addClass('animated pulse');
});

$('.col-md-3').mouseleave(function() {
	$(this).removeClass('animated pulse');
});

});