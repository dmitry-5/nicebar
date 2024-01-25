$(function() {
	/*burger*/
	$(".e-list").slideUp(function() {
		$(".e-button").removeClass("open");
	});

	$(".e-button").on("click", function() {
		if ($(this).hasClass("open")) {
			$(".e-list").slideUp(function() {
				$(".e-button").removeClass("open");
			});
		} else {
			$(this).addClass("open");
			setTimeout(function() {
				$(".e-list").stop().slideDown();
			}, 200);
		}
	});
	



/*---------------SLIDER-----------------*/
      $('.first-slider .slider').bxSlider({
      	speed: 1000
      });
	
/*-------------------ANCHOR-----------------*/

/*----------ABOUTAS----------*/

	$('ul li .about_uss').click(function () {
		$('html, body').animate({
			scrollTop: $("#about_us").offset().top
		}, 1500);
	});	

/*------------MENU---------*/

	$('ul li .nutritionn').click(function () {
		$('html, body').animate({
			scrollTop: $("#nutrition").offset().top
		}, 1500);
	});	

/*--------NUTRITION-----------*/

	$('ul li .contactsss').click(function () {
		$('html, body').animate({	
			scrollTop: $("#contacts").offset().top
		}, 2000);
	});	

/*-----------UP------------*/

	$('.up').click(function () {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 1500);
	});
/*-------------------------------------------*/


});