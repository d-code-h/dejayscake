/*
================================================================
* Template:  	 Simone - Personal Portfolio Template
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File
================================================================
*/


(function ($) {
	"use strict";

	// Preloader
	$(window).on('load', function () {
		$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(333);
	});


	// Header Sticky
	$(window).on('scroll',function() {
		var stickytop = $('#header.sticky-top .bg-transparent');
		var stickytopslide = $('#header.sticky-top-slide');
		
		if ($(this).scrollTop() > 1){  
			stickytop.addClass("sticky-on-top");
			stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
		}
		else {
			stickytop.removeClass("sticky-on-top");
			stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
		}
		
		if ($(this).scrollTop() > 180){  
			stickytopslide.find(".primary-menu").addClass("sticky-on");
			stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('sticky-logo'));
		}
		else{
			stickytopslide.find(".primary-menu").removeClass("sticky-on");
			stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('default-logo'));
		}
	});

	// Sections Scroll
	if($("body").hasClass("side-header")){
	$('.smooth-scroll').on('click', function() {
		event.preventDefault();
	    var sectionTo = $(this).attr('href');
		$('html, body').stop().animate({
	      scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
	});
	   }else {
	$('.smooth-scroll').on('click', function() {
		event.preventDefault();
	    var sectionTo = $(this).attr('href');
		$('html, body').stop().animate({
	      scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
	});
	}

	// Mobile Menu
	$('.navbar-toggler').on('click', function() {
		$(this).toggleClass('show');
	});
	$(".navbar-nav a").on('click', function() {
	    $(".navbar-collapse, .navbar-toggler").removeClass("show");
	});

	// Overlay Menu & Side Open Menu
	$('.navbar-side-open .collapse, .navbar-overlay .collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
	    e.preventDefault();
	}),
	$('.navbar-side-open [data-toggle="collapse"], .navbar-overlay [data-toggle="collapse"]').on('click', function(e) {
	   e.preventDefault();
	   $($(this).data('target')).toggleClass('show');
	})

	/*---------------------------------
	   Carousel (Owl Carousel)
	----------------------------------- */
	$(".owl-carousel").each(function (index) {
	    var a = $(this);
		$(this).owlCarousel({
			autoplay: a.data('autoplay'),
			center: a.data('center'),
			autoplayTimeout: a.data('autoplaytimeout'),
			autoplayHoverPause: a.data('autoplayhoverpause'),
			loop: a.data('loop'),
			speed: a.data('speed'),
			nav: a.data('nav'),
			dots: a.data('dots'),
			autoHeight: a.data('autoheight'),
			autoWidth: a.data('autowidth'),
			margin: a.data('margin'),
			stagePadding: a.data('stagepadding'),
			slideBy: a.data('slideby'),
			lazyLoad: a.data('lazyload'),
			navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			animateOut: a.data('animateout'),
			animateIn: a.data('animatein'),
			video: a.data('video'),
			items: a.data('items'),
			responsive:{
	        0:{items: a.data('items-xs'),},
	        576:{items: a.data('items-sm'),},
			768:{items: a.data('items-md'),},
	        992:{items: a.data('items-lg'),}
	        }
	    });
	});

	// Venobox Setup
	$(window).on('load', function() {
	    var portfolioIsotope = $('.portfolio-container').isotope({
	      itemSelector: '.portfolio-item',
	      layoutMode: 'fitRows'
	    });

	    $('#portfolio-flters li').on('click', function() {
	      $("#portfolio-flters li").removeClass('filter-active');
	      $(this).addClass('filter-active');

	      portfolioIsotope.isotope({
	        filter: $(this).data('filter')
	      });
	    });
	    // Initiate venobox (lightbox feature used in portofilo)
	    $(document).ready(function() {
	      $('.venobox').venobox();
	    });
	  });

	/*------------------------------------
	    Parallax Background
	-------------------------------------- */
	$(".parallax").each(function () {
	$(this).parallaxie({
		speed: 0.5,
	});
	});

	/*------------------------------------
	    Counter
	-------------------------------------- */
	$(".counter").each(function () {
	    $(this).appear(function () {
	        $(this).countTo({
				speed: 1800,
			});
	    });
	});

	/*------------------------------------
	    Text Rotator
	-------------------------------------- */
	$(".text-rotator").each(function () {
	    $(this).Morphext({
			speed: 3000, // Overrides default 2000
		});
	});

	/*------------------------------------
	    Typed
	-------------------------------------- */

	$(".typed").each(function() {
	var typed = new Typed('.typed', {
	    stringsElement: '.typed-strings',
		loop: true,
		typeSpeed: 100,
	    backSpeed: 50,
		backDelay: 1500,
	});
	});

	/*------------------------------------
	    WOW animation
	-------------------------------------- */

	$(".wow").each(function() {
	 if ($(window).width() > 767) {
	   var wow = new WOW({
	     boxClass: 'wow',
	     animateClass: 'animated',
	     offset: 0,
	     mobile: false,
	     live: true
	   });
	  new WOW().init();
	 }
	});

	/*------------------------
	   tooltips
	-------------------------- */
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

	/*------------------------
	   Scroll to top
	-------------------------- */
	$(function () {
			$(window).on('scroll', function(){
				if ($(this).scrollTop() > 400) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			});
	$('#back-to-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	/*------------------------
	   Contact Form
	-------------------------- */
	// var form = $('#contact-form'); // contact form
	// var submit = $('#submit-btn'); // submit button

	// // form submit event
	// form.on('submit', function (e) {
	// 	e.preventDefault(); // prevent default form submit

	// 	if (typeof $('#google-recaptcha-v3').val() != "undefined") {
	// 		grecaptcha.ready(function () {
	// 			var site_key = $('#google-recaptcha-v3').attr('src').split("render=")[1];
	// 			grecaptcha.execute(site_key, {action: 'contact'}).then(function (token) {
	// 				var gdata = form.serialize() + '&g-recaptcha-response=' + token;
	// 				$.ajax({
	// 					url: '/',  // form action url
	// 					type: 'POST', 		  // form submit method get/post
	// 					dataType: 'json', 	  // request type html/json/xml
	// 					data: gdata, 		  // serialize form data
	// 					beforeSend: function () {
	// 						submit.attr("disabled", "disabled");
	// 						var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center mr-2"></span>Sending.....'; // change submit button text
	// 						if (submit.html() !== loadingText) {
	// 							submit.data('original-text', submit.html());
	// 							submit.html(loadingText);
	// 						}
	// 					},
	// 					success: function (data) {
	// 						submit.before(data.Message).fadeIn("slow"); // fade in response data 
	// 						submit.html(submit.data('original-text'));// reset submit button text
	// 						submit.removeAttr("disabled", "disabled");
	// 						if (data.response == 'success') {
	// 							form.trigger('reset'); // reset form
	// 						}
	// 						setTimeout(function () {
	// 							$('.alert-dismissible').fadeOut('slow', function(){
	// 								$(this).remove();
	// 							});
	// 						}, 3000);
	// 					},
	// 					error: function (e) {
	// 						console.log(e)
	// 					}
	// 				});
	// 			});
	// 		});
	// 	} else {
	// 		$.ajax({
	// 			url: '/', // form action url
	// 			type: 'POST', // form submit method get/post
	// 			dataType: 'json', // request type html/json/xml
	// 			data: form.serialize(), // serialize form data
	// 			beforeSend: function () {
	// 				submit.attr("disabled", "disabled");
	// 				var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center mr-2"></span>Sending.....'; // change submit button text
	// 				if (submit.html() !== loadingText) {
	// 					submit.data('original-text', submit.html());
	// 					submit.html(loadingText);
	// 				}
	// 			},
	// 			success: function (data) {
	// 				submit.before(data.Message).fadeIn("slow"); // fade in response data 
	// 				submit.html(submit.data('original-text'));// reset submit button text
	// 				submit.removeAttr("disabled", "disabled");
	// 				if (data.response == 'success') {
	// 					form.trigger('reset'); // reset form
	// 				}
	// 				setTimeout(function () {
	// 					$('.alert-dismissible').fadeOut('slow', function(){
	// 						$(this).remove();
	// 					});
	// 				}, 3000);
	// 				if (typeof $('#recaptcha-v2').val() != "undefined") {
	// 					grecaptcha.reset(); // reset reCaptcha
	// 				}
	// 			},
	// 			error: function (e) {
	// 				console.log(e)
	// 			}
	// 		});
	// 	}
	// });

	var form = $('#contact-form'); // contact form
	var submit = $('#submit-btn'); // submit button

	// form submit event
	form.on('submit', function () {
		submit.attr("disabled", "disabled");
		var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center mr-2"></span>Sending.....'; // change submit button text
		submit.html(loadingText);
		var successMessage = '<div class="alert alert-success rounded-pill">Thank You! I will get back to you soon.</div>'
		submit.before(successMessage).fadeIn("slow"); // fade in response data 
	});

	$('.print').click(function(){
		window.print();
	});
})(jQuery)