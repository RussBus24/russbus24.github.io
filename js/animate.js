$(document).ready(function () {


$('.col-md-3').mouseenter(function() {
	$(this).addClass('animated pulse');
});

$('.col-md-3').mouseleave(function() {
	$(this).removeClass('animated pulse');
});

});