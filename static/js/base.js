$(document).ready(function() {
	//dummy
	//ABOUT 
	$(".button").click(function() {
		var buttonName = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $("#" + buttonName).offset().top
    		}, 400);
		    return false;


	});



});