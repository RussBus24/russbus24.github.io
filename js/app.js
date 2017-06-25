$( document ).ready(function() {

    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro").offset().top
        }, 900);
    });

    $("#aboutme").click(function() {
        $('html, body').animate({
            scrollTop: $(".aboutme").offset().top
        }, 900);
    });

    $("#portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 900);
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 900);
    });

});
