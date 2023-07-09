(function($){

"use strict";

$(document).ready(function() {


	var win_h = $(window).height(),
		win_w = $(window).width(),
		home_slides_arr = [],
		is_moving = false;

	$("body").fitVids();

/*==========================================================================================================================================
/*==========================================================================================================================================
	Functions
============================================================================================================================================
============================================================================================================================================*/

	function render() {

		// Home 
			// Landing - Fullscreen Slideshow
				if($(".landing-slideshow").length > 0) {

					var home_landing_slideshow_speed = parseInt($(".landing-slideshow").attr('data-ssspeed'), 10) || 8000,
						home_landing_animation_speed = parseInt($(".landing-slideshow").attr('data-anspeed'), 10) || 3000;

					$(".landing-slideshow .flexslider").flexslider({
					  
					    prevText: "",
					    nextText: "",
					    animation: 'fade',
					    easing: "linear",
					    slideshow: true,
					    slideshowSpeed: home_landing_slideshow_speed,
					    animationSpeed: home_landing_animation_speed,
					    controlNav: false,
					    directionNav: false,

					    start: function(slider){

					    	var layer = slider.prev().find('.source .animate'),
					    		img_width = layer.prev().width();

					    	layer.animate({width: img_width},home_landing_slideshow_speed,'linear');
					    },
					    before: function(slider){

					    	var layer = slider.prev().find('.source .animate'),
					    		img_width = layer.prev().width();

					    	layer.fadeOut(1,function(){
					    		layer.width(0);
					    		layer.fadeIn(1);
					    		layer.animate({width: img_width},home_landing_slideshow_speed,'linear');
					    	});
					    }
					});
				}

			// Landing - Striped Slides Slideshows
				if($(".striped-slides").length > 0) {

					var home_landing_s_slideshow_speed = 5000,
						home_landing_s_animation_speed = 3000,
						striped_slides_interval,
						cols = $(".striped-slides .flexslider").length;


					striped_slides_interval = setInterval(function(){random_slide(cols)},home_landing_s_slideshow_speed);

					$(".striped-slides .flexslider").flexslider({
					  
					    prevText: "",
					    nextText: "",
					    animation: 'fade',
					    easing: "linear",
					    slideshow: false,
					    slideshowSpeed: home_landing_s_slideshow_speed,
					    animationSpeed: home_landing_s_animation_speed,
					    controlNav: false,
					    directionNav: false
					});
				}
		

		// Gallery
			// Fullscreen Slideshow
				if($(".full-screen.flexslider.normal-nav, .full-screen.flexslider.no-nav").length > 0) {

					var home_f_s_slideshow_speed = parseInt($(".full-screen.flexslider").attr('data-ssspeed'), 10) || 6000,
						home_f_s_animation_speed = parseInt($(".full-screen.flexslider").attr('data-anspeed'), 10) || 2000;


					$(".full-screen.flexslider.normal-nav, .full-screen.flexslider.no-nav").flexslider({
					  
					    prevText: "",
					    nextText: "",
					    animation: 'fade',
					    easing: "linear",
					    slideshow: true,
					    slideshowSpeed: home_f_s_slideshow_speed,
					    animationSpeed: home_f_s_animation_speed,
					    controlNav: false,
					    directionNav: false
					});
				}

			// Slideshow - Vertical & Horizontal Nav
				if($(".full-screen.flexslider.vertical-nav, .full-screen.flexslider.horizontal-nav").length > 0) {

					var gallery_v_h_slideshow_speed = parseInt($(".full-screen.flexslider").attr('data-ssspeed'), 10) || 6000,
						gallery_v_h_animation_speed = parseInt($(".full-screen.flexslider").attr('data-anspeed'), 10) || 2000;


					$(".full-screen.flexslider.vertical-nav, .full-screen.flexslider.horizontal-nav").flexslider({
					  
					    prevText: "",
					    nextText: "",
					    animation: 'fade',
					    easing: "linear",
					    slideshow: true,
					    slideshowSpeed: gallery_v_h_slideshow_speed,
					    animationSpeed: gallery_v_h_animation_speed,
					    controlNav: false,
					    directionNav: false,

					    before: function(slider){

					    	$(".full-screen.flexslider .nav .bullets a.active").removeClass('active');
					    	$(".full-screen.flexslider .nav .bullets a:eq("+slider.animatingTo+")").addClass('active');
					    }
					});
				}

			// Albums
				if($(".gallery-albums").length > 0) {

					$(".gallery-albums .album-cont img").each(function(index, el) {
						
						var o_width = $(this).attr('data-width'),
							o_height = $(this).attr('data-height'),
							c_width = $(this).width();

						$(this).height(c_width*o_height/o_width);
					});

					masonry_init($(".gallery-albums .albums"), ".gallery-albums .album.size-regular");
				}

			// Vertical
				if($(".gallery-vertical").length > 0) {

					$(".gallery-vertical img").each(function(index, el) {
						
						var o_width = $(this).attr('data-width'),
							o_height = $(this).attr('data-height'),
							c_width = $(this).width();

						$(this).height(c_width*o_height/o_width);
					});
				}

			// Grid & Masonry
				if($(".gallery-images").length > 0) {

					$(".gallery-images img").each(function(index, el) {
						
						var o_width = $(this).attr('data-width'),
							o_height = $(this).attr('data-height'),
							c_width = $(this).width();

						$(this).height(c_width*o_height/o_width);
					});
					masonry_init($(".gallery-images .images"), ".img");
				}

			// Horizontal - Normal
				if($(".gallery-h.normal").length > 0) {

					$(".gallery-h.normal .container .img a").each(function(index, el) {
						
						var img = $(this).find('img'),
							img_h = $(this).parent().height(),
							img_o_w = img.attr('data-width'),
							img_o_h = img.attr('data-height'),
							img_c_w = img_h*img_o_w/img_o_h;

						img.width(img_c_w);
						$(this).width(img_c_w);
					});

					var total_width = 0;

					$('.gallery-h.normal .container .img').each(function(index, el) {
						total_width += $(this).width() + 30;
					});

					total_width -= 29;

					$(".gallery-h.normal .container").width(total_width);

					$(".gallery-h.normal .gallery").niceScroll({
						cursoropacitymax: 0,
						mousescrollstep: 60
					});
				}

			// Horizontal - Centered
				if($(".gallery-h.centered").length > 0) {

					$(".gallery-h.centered .container .img a").each(function(index, el) {
						
						var img = $(this).find('img'),
							img_h = $(this).parent().height(),
							img_o_w = img.attr('data-width'),
							img_o_h = img.attr('data-height'),
							img_c_w = img_h*img_o_w/img_o_h;

						img.width(img_c_w);
						$(this).width(img_c_w);
					});

					if(win_w > 576) {
						var total_width = 0,
							first_img = $('.gallery-h .container .img:first-child'),
							last_img = $('.gallery-h .container .img:last-child'),
							active_img = $(".gallery-h .img.active"),
							imgs_length = $('.gallery-h .container .img').length,
							container_margin = 90;

						$('.gallery-h .container .img').each(function(index, el) {

							var value = (imgs_length == (index-1))? 0 : 30;
							total_width += $(this).width() + value;
						});

						var extra_amount_left = (win_w / 2) - ( (first_img.width() / 2) + container_margin ),
							extra_amount_right = (win_w / 2) - ( (last_img.width() / 2) + container_margin );

						total_width += extra_amount_left + extra_amount_right;

						$(".gallery-h .container").width(total_width);

						$(".gallery-h .container").css({
							'padding-left': extra_amount_left+'px',
							'padding-right': extra_amount_right+'px'
						});

						//Centering on active image
						var active_index = active_img.index() + 1,
							req_width = 0;

						if(active_index != 1) {

							for (var i = 0; i < active_index; i++) {

								var current_img = $('.gallery-h .container .img:eq('+i+')');

								if(i == 0 || (i+1) == active_index) {
									req_width += (current_img.width()/2);
								}
								else {
									req_width += current_img.width();
								}

								if((i+1) != active_index) {
									req_width += 30;
								}
							}

							$(".gallery-h .container").css('left', '-'+req_width+'px');
						}

						// Navigation - Mouse Wheel
						$(".gallery-h.centered .gallery .container").mousewheel(function(event) {

							var direction = (event.deltaY == 1)? 'left' : 'right';
							
							gallery_scroll(direction);
							event.preventDefault();
						});

						// Navigation - Left Arrow
						$(".gallery-h.centered .nav .prev").click(function(event) {
							event.preventDefault();

							gallery_scroll('left');
						});

						// Navigation - Right Arrow
						$(".gallery-h.centered .nav .next").click(function(event) {
							event.preventDefault();
							
							gallery_scroll('right');
						});
					}
					else {
						
						$('.gallery-h .gallery .container').removeClass('hovered');
						$('.gallery-h .gallery .container .img').removeClass('active');
						$('.gallery-h .gallery .container .img a').hover(function() {

							$(this).parent().addClass('active');
							$(this).parent().parent().addClass('hovered');
						}, function() {

							$(this).parent().removeClass('active');
							$(this).parent().parent().removeClass('hovered');
						});
						$(".gallery-h .gallery").niceScroll({
							cursoropacitymax: 0,
							mousescrollstep: 60
						});
					}
				}


		// Portfolio
			// Grid & Masonry
				if($(".portfolio").length > 0) {

					$(".portfolio .project-cont img").each(function(index, el) {
						
						var o_width = $(this).attr('data-width'),
							o_height = $(this).attr('data-height'),
							c_width = $(this).width();

						$(this).height(c_width*o_height/o_width);
					});
					masonry_init($(".portfolio .projects"), ".project");
				}

			// Striped
				if($(".portfolio-striped").length > 0) {

					var cols = 4,
						wrapperWidth,
						total_width = 0,
						container_margin = 180,
						slide_amount = 400;

					if($(".portfolio-striped .projects").hasClass('cols-2')) {
						cols = 2;
					}
					else if($(".portfolio-striped .projects").hasClass('cols-3')) {
						cols = 3;
					}
					else if($(".portfolio-striped .projects").hasClass('cols-4')) {
						cols = 4;
					}

					if(win_w > 768 && win_w <= 1024 ) {
						cols = 3;
					}
					else if(win_w > 480 && win_w <= 768 ) {
						cols = 2;
						container_margin = 60;
					}
					else if(win_w <= 480 ) {
						cols = 1;
						container_margin = 60;
					}

					$(".portfolio-striped .project").width((win_w-container_margin)/cols);

					$('.portfolio-striped .project').each(function(index, el) {
						total_width += $(this).width();
					});

					total_width++;

					$('.portfolio-striped .projects').width(total_width);

					slide_amount = $(".portfolio-striped .project").width();

					$(".portfolio-striped .portfolio-inner").niceScroll({
						cursoropacitymax: 0,
						mousescrollstep: 60
					});
				}

			// Single - Style 1
				if($(".portfolio-single.style-1").length > 0) {

					if(win_w >= 768) {

						$(".portfolio-single.style-1 .images a").each(function(index, el) {
							
							var img = $(this).find('img'),
								img_h = img.height(),
								img_o_w = img.attr('data-width'),
								img_o_h = img.attr('data-height'),
								img_c_w = img_h*img_o_w/img_o_h;

							img.width(img_c_w);

							$(this).width(img_c_w);
						});

						var total_width = $(".portfolio-single.style-1 .content > .info").width() + 90 + $(".portfolio-single.style-1 .images").width();

						total_width++;

						$('.portfolio-single.style-1 .content').width(total_width);
					}
				}


		// Blog
			if($(".blog").length > 0) {

				$(".blog .article").each(function(index, el) {
					
					var img = $(this).find('img'),
						o_width = img.attr('data-width'),
						o_height = img.attr('data-height'),
						c_width = img.width();

					img.height(c_width*o_height/o_width);
				});
				masonry_init($(".blog .articles"), ".article");
			}
	}

	function resize() {

		win_w = $(window).width();
		win_h = $(window).height();


		// Header
			if(win_w > 1100) {
				$("header nav").fadeIn(200);

				if($("header nav").getNiceScroll().length >= 1) {
					$("header nav").getNiceScroll().remove();
					$("header nav").css('overflow', 'visible');
				}
			}
			else {
				if($("header nav").getNiceScroll().length <= 0) {
					$("header nav").niceScroll({
						mousescrollstep: 60,
						cursorcolor: "#959595",
				        cursorborder: "0px solid #fff",
					});
				}
			}

		// Gallery - Albums - Masonry
			if($(".gallery-albums").length > 0) {

				$(".gallery-albums .album-cont img").each(function(index, el) {
					
					var o_width = $(this).attr('data-width'),
						o_height = $(this).attr('data-height'),
						c_width = $(this).width();

					$(this).height(c_width*o_height/o_width);
				});
			}

		// Gallery - Masonry
			if($(".gallery-images.masonry").length > 0) {

				$(".gallery-images.masonry img").each(function(index, el) {
					
					var o_width = $(this).attr('data-width'),
						o_height = $(this).attr('data-height'),
						c_width = $(this).width();

					$(this).height(c_width*o_height/o_width);
				});
			}

		// Gallery - Grid
			if($(".gallery-images.grid").length > 0) {

				$(".gallery-images img").each(function(index, el) {
					
					var o_width = $(this).attr('data-width'),
						o_height = $(this).attr('data-height'),
						c_width = $(this).width();

					$(this).height(c_width*o_height/o_width);
				});
			}

		// Gallery - Horizontal Normal
			if($(".gallery-h.normal").length > 0) {

				$('.gallery-h .container').width(99999);

				$('.gallery-h .container .img a').each(function(index, el) {
					
					var anchor = $(this),
						img = $(this).find('img'),
						img_w = img.attr('data-width'),
						img_h = img.attr('data-height'),
						current_height = img.height();

					img.width((current_height*img_w)/img_h);
					anchor.width((current_height*img_w)/img_h);
				});

				var total_width = 0;

				$('.gallery-h.normal .container .img').each(function(index, el) {
					total_width += $(this).width() + 30;
				});

				total_width -= 29;

				$(".gallery-h.normal .container").width(total_width);
			}

		// Gallery - Horizontal Centered
			if($(".gallery-h.centered").length > 0) {

				var total_width = 0,
					first_img = $('.gallery-h .container .img:first-child'),
					last_img = $('.gallery-h .container .img:last-child'),
					active_img = $(".gallery-h .img.active"),
					imgs_length = $('.gallery-h .container .img').length,
					container_margin = (win_w<=768)? 25 : 90;

				$('.gallery-h .container').width(99999);

				$(".gallery-h .container .img a").each(function(index, el) {
					
					var anchor = $(this),
						img = $(this).find('img'),
						img_w = img.attr('data-width'),
						img_h = img.attr('data-height'),
						current_height = img.height();

					img.width((current_height*img_w)/img_h);
					anchor.width((current_height*img_w)/img_h);
				});

				$('.gallery-h .container .img').each(function(index, el) {

					var value = (imgs_length == (index-1))? 30 : 30;
					total_width += $(this).width() + value;
				});

				var extra_amount_left = (win_w / 2) - ( (first_img.width() / 2) + container_margin ),
					extra_amount_right = (win_w / 2) - ( (last_img.width() / 2) + container_margin );

				total_width += extra_amount_left + extra_amount_right;

				$(".gallery-h .container").width(total_width);

				$(".gallery-h .container").css({
					'padding-left': extra_amount_left+'px',
					'padding-right': extra_amount_right+'px'
				});

				//Centering on active image
				var active_index = active_img.index() + 1,
					req_width = 0;

				if(active_index != 1) {

					for (var i = 0; i < active_index; i++) {

						var current_img = $('.gallery-h .container .img:eq('+i+')');

						if(i == 0 || (i+1) == active_index) {
							req_width += (current_img.width()/2);
						}
						else {
							req_width += current_img.width();
						}

						if((i+1) != active_index) {
							req_width += 30;
						}
					}

					$(".gallery-h .container").css('left', '-'+req_width+'px');

				}

			}

		// Gallery - Vertical
			if($(".gallery-vertical").length > 0) {

				$(".gallery-vertical img").each(function(index, el) {
					
					var o_width = $(this).attr('data-width'),
						o_height = $(this).attr('data-height'),
						c_width = $(this).width();

					$(this).height(c_width*o_height/o_width);
				});
			}

		// Portfolio
			if($(".portfolio").length > 0) {

				$(".portfolio .project-cont img").each(function(index, el) {
					
					var o_width = $(this).attr('data-width'),
						o_height = $(this).attr('data-height'),
						c_width = $(this).width();

					$(this).height(c_width*o_height/o_width);
				});
			}

		// Portfolio - Single Style 1
			if($(".portfolio-single.style-1").length > 0) {

				$('.portfolio-single.style-1 .content').width(99999);
				$('.portfolio-single.style-1 .content .images').width(99599);

				$('.portfolio-single.style-1 .content .images a').each(function(index, el) {
					
					var anchor = $(this),
						img = $(this).find('img'),
						img_w = img.attr('data-width'),
						img_h = img.attr('data-height'),
						current_height = img.height();

					img.width((current_height*img_w)/img_h);
					anchor.width((current_height*img_w)/img_h);
				});

				$('.portfolio-single.style-1 .content .images').width('auto');

				var total_width = $(".portfolio-single.style-1 .content > .info").width() + 90 + $(".portfolio-single.style-1 .images").width();

				total_width++;

				$('.portfolio-single.style-1 .content').width(total_width);
			}
			
		// Pages
			if(win_w > 768) {
				// About Me - Page
				if($(".min-style").getNiceScroll().length >= 1) {
					$(".min-style").getNiceScroll().remove();
				}

				// Contact Us 1 - Page
				if($(".contact-1").getNiceScroll().length >= 1) {
					$(".contact-1").getNiceScroll().remove();
				}
			}
			else {

				// About Me - Page
				if($(".min-style").getNiceScroll().length <= 0) {
					$(".min-style").niceScroll({
						mousescrollstep: 60,
						cursorcolor: "#959595",
				        cursorborder: "0px solid #fff",
					});
				}

				// Contact Us 1 - Page
				if($(".contact-1").getNiceScroll().length <= 0) {
					$(".contact-1").niceScroll({
						mousescrollstep: 60,
						cursorcolor: "#959595",
				        cursorborder: "0px solid #fff",
					});
				}
				var wrapper_height = $(".contact-1 .content-wrapper").height();
				$(".contact-1 .map").height(wrapper_height+60);
			}
	
		// Blog
			if($(".blog").length > 0) {

				$(".blog .article").each(function(index, el) {
					
					var img = $(this).find('img'),
						o_width = img.attr('data-width'),
						o_height = img.attr('data-height'),
						c_width = img.width();

					img.height(c_width*o_height/o_width);
				});
			}
	}

	function gallery_scroll(direction) {

		var active_img = $(".gallery-h .img.active"),
			next_img = $(".gallery-h .img.active").next(),
			prev_img = $(".gallery-h .img.active").prev(),
			count = $(".gallery-h .img").length,
			current_left = parseInt($(this).css('left'));

		if( (active_img.index() == 0 && direction == "left") || (active_img.index() == (count-1) && direction == "right") ) {
			is_moving = false;
		}
		else if(!is_moving) {

			is_moving = true;

			if(direction == "right") {

				var scroll_amount = (active_img.width()/2) + (next_img.width()/2) + 30;
				$(".gallery-h .container").animate({left: "-="+scroll_amount},1000,'easeOutExpo',function(){
					is_moving = false;
				});

				active_img.removeClass('active');
				next_img.addClass('active');
			}
			else {
				var scroll_amount = (active_img.width()/2) + (prev_img.width()/2) + 30;
				$(".gallery-h .container").animate({left: "+="+scroll_amount},1000,'easeOutExpo',function(){
					is_moving = false;
				});

				active_img.removeClass('active');
				prev_img.addClass('active');
			}
		}
	}

	function masonry_init(selector, item) {

		selector.isotope({
			layoutMode: 'masonry',
			percentPosition: true,
			masonry: {
			  	columnWidth: item
			}
		});
	}

	function toggleFullScreen(elem) {

	    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
	        if (elem.requestFullScreen) {
	            elem.requestFullScreen();
	        } else if (elem.mozRequestFullScreen) {
	            elem.mozRequestFullScreen();
	        } else if (elem.webkitRequestFullScreen) {
	            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	        } else if (elem.msRequestFullscreen) {
	            elem.msRequestFullscreen();
	        }
	    } else {
	        if (document.cancelFullScreen) {
	            document.cancelFullScreen();
	        } else if (document.mozCancelFullScreen) {
	            document.mozCancelFullScreen();
	        } else if (document.webkitCancelFullScreen) {
	            document.webkitCancelFullScreen();
	        } else if (document.msExitFullscreen) {
	            document.msExitFullscreen();
	        }
	    }
	}

	function random_slide(num) {

		var rand = Math.floor((Math.random() * num));

		if(home_slides_arr.length == 0 || home_slides_arr[0] != rand) {
			home_slides_arr[0] = rand;
			$(".striped-slides .cols .flexslider:eq("+rand+")").flexslider("next");
		}
		else {
			random_slide(num);
		}
	}


	$(window).resize(function(event) {
		resize();
	});

/*==========================================================================================================================================
/*==========================================================================================================================================
	Handlers
============================================================================================================================================
============================================================================================================================================*/
	
	// Preloader
		if($(".bg-video").length <= 0 && $(".contact-1").length <= 0 && $(".contact-2").length <= 0 && $("body > .loader").length > 0) {

			var bg_color = $("body > .loader").attr('data-background-color') || '#1c1c1c',
				text_color = $("body > .loader").attr('data-text-color') || '#ffffff',
				skin = $("body > .loader").attr('data-skin');

			if(skin == "dark") {
				bg_color = "#1c1c1c";
				text_color = "#ffffff";
			}
			else if(skin == "light") {
				bg_color = "#ffffff";
				text_color = "#1c1c1c";
			}

			$("body > .loader").before('<style id="cosy-custom-styler" type="text/css">.loader .circle{border: 2px solid '+text_color+';border-right-color: transparent;}</style>');
			$("#cosy-custom-styler").append('.loader p{color: '+text_color+';}body > .loader{background-color: '+bg_color+';}');

			var imgs = $("img:not('.lazy')").length,
				loaded_imgs = 0;


			if($(".gallery-h.normal").length > 0) {

	    		$("img.lazy").lazyload({
	    			threshold : 400,
				    effect : "fadeIn",
				    container : $(".gallery"),
				    skip_invisible : true
				});
	    	}
	    	else if($(".gallery-h.centered").length <= 0) {

	    		$("img.lazy").lazyload({
	    			threshold : 200,
				    effect : "fadeIn",
				    container : $(".inner-wrapper"),
				    skip_invisible : true
				});
	    	}

			if(imgs <= 0) {
				render();

				if($(".gallery-h.centered").length > 0) {

		    		$("img.lazy").lazyload({
		    			threshold : 400,
					    effect : "fadeIn",
					    container : $(".gallery .container"),
					    skip_invisible : true
					});
		    	}

				$("body > .loader").delay(1500).fadeOut(200, function() {
		    		$("body").addClass('loaded');
		    	});
			}
			else {
				$("img:not('.lazy')").each(function(index, el) {
					
					$(this).imagesLoaded(function(){
						loaded_imgs++;

						if(loaded_imgs == imgs) {

							render();

							if($(".gallery-h.centered").length > 0) {

					    		$("img.lazy").lazyload({
					    			threshold : 400,
								    effect : "fadeIn",
								    container : $(".gallery .container"),
								    skip_invisible : true
								});
					    	}
					    	
							$("body > .loader").delay(1500).fadeOut(200, function() {
					    		$("body").addClass('loaded');
					    	});
						}
					});
				});
			}
		}
		else {

			render();
			$("body > .loader").fadeOut(300);
		}


	// Scrollbar & Flexslider
		if($(".wrapper > .inner-wrapper").length > 0) {

			$(".wrapper > .inner-wrapper").niceScroll({
				mousescrollstep: 60,
				cursorcolor: "#959595",
		        cursorborder: "0px solid #fff",
			});

			if($(".inner-wrapper .flexslider").length > 0) {

				var fs_slideshow_speed = 6000,
					fs_animation_speed = 2000;

				$(".inner-wrapper .flexslider").flexslider({
				  
				    prevText: "",
				    nextText: "",
				    animation: 'fade',
				    easing: "linear",
				    slideshow: true,
				    slideshowSpeed: fs_slideshow_speed,
				    animationSpeed: fs_animation_speed,
				    controlNav: false,
				    directionNav: false
				});


				// Navigation Controls - Previous
				$(".inner-wrapper .flexslider .nav .prev").click(function(event) {
					event.preventDefault();

					$(".inner-wrapper .flexslider").flexslider('prev');
				});

				// Navigation Controls - Next
				$(".inner-wrapper .flexslider .nav .next").click(function(event) {
					event.preventDefault();

					$(".inner-wrapper .flexslider").flexslider('next');
				});
			}
		}


	// Fullscreen Slideshow Functions

		// Navigation Controls - Previous
		$(".full-screen.flexslider .nav .prev").click(function(event) {
			event.preventDefault();

			$(".full-screen.flexslider").flexslider('prev');

			$(".full-screen.flexslider .pause").fadeOut(200,function(){
				$(".full-screen.flexslider .play").fadeIn(200);
			});
		});

		// Navigation Controls - Next
		$(".full-screen.flexslider .nav .next").click(function(event) {
			event.preventDefault();

			$(".full-screen.flexslider").flexslider('next');

			$(".full-screen.flexslider .pause").fadeOut(200,function(){
				$(".full-screen.flexslider .play").fadeIn(200);
			});
		});

		// Navigation Controls - Play
		$(".full-screen.flexslider .nav .play").click(function(event) {
			event.preventDefault();

			$(".full-screen.flexslider").flexslider('play');

			$(this).fadeOut(200,function(){
				$(".full-screen.flexslider .pause").fadeIn(200);
			});
		});

		// Navigation Controls - Pause
		$(".full-screen.flexslider .nav .pause").click(function(event) {
			event.preventDefault();

			$(".full-screen.flexslider").flexslider('pause');

			$(this).fadeOut(200,function(){
				$(".full-screen.flexslider .play").fadeIn(200);
			});
		});

		// Navigation Controls - Fullscreen
		$(".full-screen.flexslider .nav .full").click(function(event) {
			event.preventDefault();

			toggleFullScreen(document.body);
		});


/*==========================================================================================================================================
/*==========================================================================================================================================
	Header
============================================================================================================================================
============================================================================================================================================*/
	
	// Dropdown effect
		$("header nav li").hover(function() {
		 
			    if ( $(this).children('ul').length > 0  && !$(".mobile-navigation").is(':visible') ) {

			    	var children = $(this).find('> ul'),
			    		elem = $(this),
			    		elemOff = parseInt($(this).offset().left),
			    		elemWidth = elem.width();

			        if((elemOff + 200 + elemWidth) > win_w) {
			        	children.addClass('edge');
			        }

			        $(this).find('> ul').fadeIn(300);
			    }
			}, function() {
		 
			    if ( $(this).children('ul').length > 0 && !$(".mobile-navigation").is(':visible') ) {
			        $(this).find('> ul').stop().fadeOut(300);
			    }
		});


	// Unfolding sub-menus in responsive mode
		$("header nav li a").click(function(event) {
		 	
		    if ( $(this).parent().children('ul').length > 0  && $(".mobile-navigation").is(':visible') ) {
		    
		 		event.preventDefault();
		        $(this).parent().find('> ul').slideToggle(300,function(){

					$("header nav").getNiceScroll(0).doScrollBy(1,1);
		        });
		    }
		});


	// Adding Scrollbar
		if($("header").length > 0 && win_w <= 1024) {

			$("header nav").niceScroll({
				mousescrollstep: 60,
				cursorcolor: "#959595",
		        cursorborder: "0px solid #fff",
			});
		}


	// Mobile navigation
		$(".mobile-navigation").click(function(event) {
		     
		    event.preventDefault();
		 
		    $("header nav").slideToggle(100);
		});


	// Adding arrows for mobile menu
		if($("header").length > 0) {

			$("header nav .mCSB_container > ul > li > a").each(function(index, el) {
				
				if(win_w <= 1024 && $(this).parent().children('ul').length > 0) {

					$(this).append('<span class="arrow-down icon1-chevron-down"></span>');
				}
			});
		}


/*==========================================================================================================================================
/*==========================================================================================================================================
	Home
============================================================================================================================================
============================================================================================================================================*/

	// Fullscreen Video
		if($(".bg-video").length > 0) {

			$(".bg-video .player").YTPlayer();

			// Navigation Controls - Volume Up
			$(".bg-video .nav .volume-down").click(function(event) {
				event.preventDefault();

				$(".bg-video .player").YTPUnmute();

				$(this).fadeOut(200,function(){
					$(".bg-video .nav .volume-up").fadeIn(200);
				});
			});

			// Navigation Controls - Volume Down
			$(".bg-video .nav .volume-up").click(function(event) {
				event.preventDefault();

				$(".bg-video .player").YTPMute();

				$(this).fadeOut(200,function(){
					$(".bg-video .nav .volume-down").fadeIn(200);
				});
			});

			// Navigation Controls - Play
			$(".bg-video .nav .play").click(function(event) {
				event.preventDefault();

				$(".bg-video .player").YTPPlay();

				$(this).fadeOut(200,function(){
					$(".bg-video .nav .pause").fadeIn(200);
				});
			});

			// Navigation Controls - Pause
			$(".bg-video .nav .pause").click(function(event) {
				event.preventDefault();

				$(".bg-video .player").YTPPause();

				$(this).fadeOut(200,function(){
					$(".bg-video .nav .play").fadeIn(200);
				});
			});

			// Navigation Controls - Fullscreen
			$(".bg-video .nav .full").click(function(event) {
				event.preventDefault();

				toggleFullScreen(document.body);
			});
		}


/*==========================================================================================================================================
/*==========================================================================================================================================
	Gallery
============================================================================================================================================
============================================================================================================================================*/


	// Slideshow - Vertical & Horizontal Nav

		// Navigation - Bullet click
		$(".full-screen.flexslider .nav .bullets-wrapper a").click(function(event) {
			
			event.preventDefault();

			var id = $(this).index(),
				slider = $(".full-screen.flexslider").data('flexslider');

			if(!$(this).hasClass('active')) {

		    	$(".full-screen.flexslider .nav .bullets-wrapper a.active").removeClass('active');
		    	$(this).addClass('active');

		    	$(".full-screen.flexslider").flexslider('pause');
		    	slider.flexAnimate(id);

				$(".full-screen.flexslider .pause").fadeOut(200,function(){
					$(".full-screen.flexslider .play").fadeIn(200);
				});
			}
		});
		$(".full-screen.flexslider.vertical-nav.scroll .nav .bullets").niceScroll({
			cursoropacitymax: 0,
			mousescrollstep: 30
		});
		var horizontal_bullets = 0,
			horizontal_bullets_count = $(".full-screen.flexslider.horizontal-nav.scroll .nav .bullets-wrapper a").length;

		$(".full-screen.flexslider.horizontal-nav.scroll .nav .bullets-wrapper a").each(function(index, el) {
			horizontal_bullets += 10;

			if(horizontal_bullets_count != (index+1)) {
				horizontal_bullets += 30;
			}
		});
		$(".full-screen.flexslider.horizontal-nav.scroll .nav .bullets-wrapper").width(horizontal_bullets);
		$(".full-screen.flexslider.horizontal-nav.scroll .nav .bullets").niceScroll({
			cursoropacitymax: 0,
			mousescrollstep: 30
		});


	// Horizontal - Normal
		if($(".gallery-h.normal").length > 0) {

			// On Image Hover
			$('.gallery-h.normal .gallery .container .img a').hover(function() {

				$(this).parent().addClass('active');
				$(this).parent().parent().addClass('hovered');
			}, function() {

				$(this).parent().removeClass('active');
				$(this).parent().parent().removeClass('hovered');
			});

			// On Image Click
			if($(".gallery-h.normal .container").hasClass('lightbox')) {
				$(".gallery-h.normal .container .img a").magnificPopup({
				 
				    type: 'image',
				    closeOnContentClick: true,
				    mainClass: 'mfp-fade',
				    preloader: true,

				    gallery: {
					    enabled: true,
						navigateByImgClick: true,
						arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
						tPrev: 'Previous (Left arrow key)', // title for left button
						tNext: 'Next (Right arrow key)', // title for right button
						tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
					}
				});
			}
			else if($(".gallery-h.normal .container").hasClass('off')) {
				$(".gallery-h.normal .container .img a").click(function(event) {
					event.preventDefault();
				});
			}

			// Navigation Controls - Previous
			$(".gallery-h.normal .nav .prev").click(function(event) {
				event.preventDefault();

				var scroll_amount = 400;

				$(".gallery-h.normal .gallery").getNiceScroll(0).doScrollLeftBy(scroll_amount);
			});

			// Navigation Controls - Next
			$(".gallery-h.normal .nav .next").click(function(event) {
				event.preventDefault();

				var scroll_amount = 400 * (-1);

				$(".gallery-h.normal .gallery").getNiceScroll(0).doScrollLeftBy(scroll_amount);
			});
		}


	// Horizontal - Centered
		if($(".gallery-h.centered").length > 0) {

			if($(".gallery-h.centered .container").hasClass('lightbox')) {
				$(".gallery-h.centered .container .img a").magnificPopup({
				 
				    type: 'image',
				    closeOnContentClick: true,
				    mainClass: 'mfp-fade',
				    preloader: true,

				    gallery: {
					    enabled: true,
						navigateByImgClick: true,
						arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
						tPrev: 'Previous (Left arrow key)', // title for left button
						tNext: 'Next (Right arrow key)', // title for right button
						tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
					}
				});
			}
			else if($(".gallery-h.centered .container").hasClass('off')) {
				$(".gallery-h.centered .container .img a").click(function(event) {
					event.preventDefault();
				});
			}
		}


	// Albums
		if($(".gallery-albums").length > 0) {

			// Filters
			$(".gallery-albums .filters a").click(function(event) {
				event.preventDefault();

				var target = $(this).attr('data-filter');

				if(!$(this).hasClass('active')) {

					if(target == "*") {

						$(".gallery-albums").removeClass('filtered');
						$(".gallery-albums .album.active").removeClass('active');
					}
					else {


						$(".gallery-albums").addClass('filtered');
						$(".gallery-albums .album.active").removeClass('active');

						$(".gallery-albums .album"+target).addClass('active');
					}

					$(".gallery-albums .filters a.active").removeClass('active');
					$(this).addClass('active');
				}
			});

			// Love icon
			$(".gallery-albums .album .love").click(function(event) {
				event.preventDefault();

				if($(this).is(':visible')) {

					var id = $(this).parent().attr('href');

					$(this).next().fadeIn(200, function() {
						$(this).prev().fadeOut(100);
						$.cookie(id, 1, { expires : 1000 });
					});
				}
			});

			$(".gallery-albums .album").each(function(index, el) {
				
				var id = $(this).find('.overlay').attr('href'),
					love = $(this).find('.love');

				if(typeof $.cookie(id) !== 'undefined') {

					love.next().fadeIn(200, function() {
						love.fadeOut(100);
					});
				}
			});

			$(".gallery-albums .album .love-2").click(function(event) {
				event.preventDefault();
				
				var id = $(this).parent().attr('href'),
					love = $(this).prev();

				if(typeof $.cookie(id) !== 'undefined') {

					if($.removeCookie(id)) {
						$(this).fadeOut(100, function() {
							love.fadeIn(200);
						});
					}
				}
			});
		}


	// Kenburns
		if($(".full-screen.flexslider.kenburns").length > 0) {

			var gallery_k_slideshow_speed = 6000,
				gallery_k_animation_speed = 2000;

			$(".full-screen.flexslider.kenburns").flexslider({
			  
			    prevText: "",
			    nextText: "",
			    animation: 'fade',
			    easing: "linear",
			    slideshow: true,
			    slideshowSpeed: gallery_k_slideshow_speed,
			    animationSpeed: gallery_k_animation_speed,
			    controlNav: false,
			    directionNav: false
			});
		}


	// Vertical
	
		// On Image Hover
		$('.gallery-vertical a').hover(function() {

			$(this).addClass('active');
			$(this).parent().addClass('hovered');
		}, function() {

			$(this).removeClass('active');
			$(this).parent().removeClass('hovered');
		});

		// On Image Click
		$(".gallery-vertical a").magnificPopup({
		 
		    type: 'image',
		    closeOnContentClick: true,
		    mainClass: 'mfp-fade',
		    preloader: true,

		    gallery: {
			    enabled: true,
				navigateByImgClick: true,
				arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
				tPrev: 'Previous (Left arrow key)', // title for left button
				tNext: 'Next (Right arrow key)', // title for right button
				tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}
		});


	// Images
		if($(".gallery-images").length > 0) {

			// Filters
			$(".gallery-images .filters a").click(function(event) {
				event.preventDefault();

				var target = $(this).attr('data-filter');

				if(!$(this).hasClass('active')) {

					if(target == "*") {

						$(".gallery-images").removeClass('filtered');
						$(".gallery-images .img.active").removeClass('active');
					}
					else {


						$(".gallery-images").addClass('filtered');
						$(".gallery-images .img.active").removeClass('active');

						$(".gallery-images .img"+target).addClass('active');
					}

					$(".gallery-images .filters a.active").removeClass('active');
					$(this).addClass('active');
				}
			});

			// Love icon
			$(".gallery-images .img .love").click(function(event) {
				event.preventDefault();

				if($(this).is(':visible')) {

					var id = $(this).parent().find('a').attr('href'),
						img_id = $(this).parent().parent().parent().attr('data-id'),
						likes = $(this).parent().find('.likes');

					if($(this).parent().find('.preview-2').length > 0) {
						id = $(this).parent().find('.preview-2').attr('href');
					}
					if($(".gallery-images").hasClass('style-title')) {
						id = $(this).parent().find('a').attr('href');
					}

					$.ajax({
						url: ajaxcall.ajaxurl,
						data: {
							'action': 'image_like',
							'id' : img_id
						},
						success:function(data) {
							likes.text(data);
						},
						error: function(errorThrown){
							console.log(errorThrown);
						}
					});

					$(this).next().fadeIn(200, function() {
						$(this).prev().fadeOut(100);
						$.cookie(id, 1, { expires : 1000 });
					});
				}
			});

			$(".gallery-images .img").each(function(index, el) {
				
				var id = $(this).find('.overlay .preview').attr('href'),
					love = $(this).find('.love');

				if($(this).find('.preview-2').length > 0) {
					id = $(this).find('.preview-2').attr('href');
				}
				if($(".gallery-images").hasClass('style-title')) {
					id = $(this).find('.overlay a').attr('href');
				}

				if(typeof $.cookie(id) !== 'undefined') {

					love.next().fadeIn(200, function() {
						love.fadeOut(100);
					});
				}
			});

			$(".gallery-images .img .love-2").click(function(event) {
				event.preventDefault();
				
				var id = $(this).parent().find('.preview').attr('href'),
					img_id = $(this).parent().parent().parent().attr('data-id'),
					love = $(this).prev(),
					likes = $(this).parent().find('.likes');

				if($(this).parent().find('.preview-2').length > 0) {
					id = $(this).parent().find('.preview-2').attr('href');
				}
				if($(".gallery-images").hasClass('style-title')) {
					id = $(this).parent().find('a').attr('href');
				}

				$.ajax({
					url: ajaxcall.ajaxurl,
					data: {
						'action': 'image_like',
						'dislike': 1,
						'id' : img_id
					},
					success:function(data) {
						likes.text(data);
					},
					error: function(errorThrown){
						console.log(errorThrown);
					}
				});

				if(typeof $.cookie(id) !== 'undefined') {

					if($.removeCookie(id)) {
						$(this).fadeOut(100, function() {
							love.fadeIn(200);
						});
					}
				}
			});

			$(".gallery-images .img .love, .gallery-images .img .love-2").hover(function() {
				$(this).parent().find('.likes').addClass('active');
			}, function() {
				$(this).parent().find('.likes').removeClass('active');
			});

			// On Image Click
			if($(".gallery-images").hasClass('lightbox')) {
				$(".gallery-images .img a.img-cont, .gallery-images.style-title .img .overlay a.video").magnificPopup({
				 
				    type: 'iframe',
				    closeOnContentClick: false,
				    mainClass: 'mfp-fade',
				    preloader: true,
				    iframe: {
							markup: '<div class="mfp-iframe-scaler">'+
							        '<div class="mfp-close"></div>'+
							        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
							      '</div>', 

							patterns: {
								youtube: {
								  index: 'youtube.com/',
								  id: 'v=', 
								  src: '//www.youtube.com/embed/%id%?autoplay=1'
								},
								vimeo: {
								  index: 'vimeo.com/',
								  id: '/',
								  src: '//player.vimeo.com/video/%id%?autoplay=1'
								},
								gmaps: {
								  index: '//maps.google.',
								  src: '%id%&output=embed'
								}
							},
							srcAction: 'iframe_src',
					}
				});

				$(".gallery-images .img .preview, .gallery-images.style-title .img .overlay a:not('.video'), .gallery-images .img .preview-2, .gallery-images .img .preview-3").magnificPopup({
				 
				    type: 'image',
				    closeOnContentClick: true,
				    mainClass: 'mfp-fade',
				    preloader: true,

				    gallery: {
					    enabled: true,
						navigateByImgClick: true,
						arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
						tPrev: 'Previous (Left arrow key)', // title for left button
						tNext: 'Next (Right arrow key)', // title for right button
						tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
					}
				});
			}
			else if($(".gallery-images").hasClass('off')) {
				$(".gallery-images .img .preview, .gallery-images.style-title .img .overlay a:not('.video'), .gallery-images .img .preview-2, .gallery-images .img .preview-3, .gallery-images .img a.img-cont, .gallery-images.style-title .img .overlay a.video").click(function(event) {
					event.preventDefault();
				});
			}
		}


/*==========================================================================================================================================
/*==========================================================================================================================================
	Portfolio
============================================================================================================================================
============================================================================================================================================*/

	// Filters
		if($(".portfolio").length > 0) {
			
			$(".portfolio .filters a").click(function(event) {
				event.preventDefault();

				var target = $(this).attr('data-filter');

				if(!$(this).hasClass('active')) {

					if(target == "*") {

						$(".portfolio").removeClass('filtered');
						$(".portfolio .project.active").removeClass('active');
					}
					else {


						$(".portfolio").addClass('filtered');
						$(".portfolio .project.active").removeClass('active');

						$(".portfolio .project"+target).addClass('active');
					}

					$(".portfolio .filters a.active").removeClass('active');
					$(this).addClass('active');
				}
			});
		}


	// Striped
		if($(".portfolio-striped").length > 0) {
			
			// Navigation - Next
			$(".portfolio-striped .nav .next").click(function(event) {
				event.preventDefault();

				var slide_amount = $('.portfolio-striped .project').width() * (-1);

				$(".portfolio-striped .portfolio-inner").getNiceScroll(0).doScrollLeftBy(slide_amount);
			});

			// Navigation - Previous
			$(".portfolio-striped .nav .prev").click(function(event) {
				event.preventDefault();

				var slide_amount = $('.portfolio-striped .project').width();

				$(".portfolio-striped .portfolio-inner").getNiceScroll(0).doScrollLeftBy(slide_amount);
			});
		}


	// Single - Style 1
		if($(".portfolio-single.style-1").length > 0) {

			if(win_w >= 768) {

				$(".portfolio-single.style-1 .inner-wrapper").niceScroll({
					cursoropacitymax: 0,
					mousescrollstep: 60
				});

				// Navigation - Next
				$(".portfolio-single.style-1 .nav .next").click(function(event) {
					event.preventDefault();

					$(".portfolio-single.style-1 .inner-wrapper").getNiceScroll(0).doScrollLeftBy('-550');
				});

				// Navigation - Previous
				$(".portfolio-single.style-1 .nav .prev").click(function(event) {
					event.preventDefault();

					$(".portfolio-single.style-1 .inner-wrapper").getNiceScroll(0).doScrollLeftBy('550');
				});
			}
			else {

				$(".portfolio-single.style-1 .inner-wrapper").getNiceScroll().remove();
				$(".portfolio-single.style-1 .inner-wrapper").niceScroll({
					cursoropacitymax: 0,
					mousescrollstep: 60
				});
			}

			// On Image Hover
			$('.portfolio-single.style-1 .content .images a').hover(function() {

				$(this).addClass('active');
				$(this).parent().parent().addClass('hovered');
			}, function() {

				$(this).removeClass('active');
				$(this).parent().parent().removeClass('hovered');
			});


			// On Image Click
			$(".portfolio-single.style-1 .content .images a").magnificPopup({
			 
			    type: 'image',
			    closeOnContentClick: true,
			    mainClass: 'mfp-fade',
			    preloader: true,

			    gallery: {
				    enabled: true,
					navigateByImgClick: true,
					arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
					tPrev: 'Previous (Left arrow key)', // title for left button
					tNext: 'Next (Right arrow key)', // title for right button
					tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
				}
			});
		}


	// Single - Style 3
		if($(".portfolio-single.style-3").length > 0) {

			$(".portfolio-single.style-3").imagesLoaded(function(){

				var container_margin = (win_w <= 768)? 0 : 120;

				$(".portfolio-single.style-3").css('padding-top', (win_h-50)+'px');
				$(".portfolio-single.style-3 .cover").width(win_w-container_margin);
				$(".portfolio-single.style-3 .cover").height(win_h-120);
			});
		}


/*==========================================================================================================================================
/*==========================================================================================================================================
	Pages
============================================================================================================================================
============================================================================================================================================*/

	// About Me
		if($(".min-style").length > 0 && win_w < 768) {

			$(".min-style").niceScroll({
				mousescrollstep: 60,
				cursorcolor: "#959595",
		        cursorborder: "0px solid #fff",
			});
		}


	// About Us
		if($(".med-style").length > 0) {

			$(".med-style").niceScroll({
				mousescrollstep: 60,
				cursorcolor: "#959595",
		        cursorborder: "0px solid #fff",
			});
		}


	// Contact Us 1

		// Map Initialization
			if($(".contact-1 .map").length > 0) {

				var height = (win_w < 768)? ($(".contact-1 .content-wrapper").height()+60) : win_h,
					add = $(".contact-1 .map").attr('data-address') || 'London, United Kindgom';

				$(".contact-1 .map").append('<div class="map-wrapper" id="map"></div>');
				
				$(".contact-1 .map-wrapper").width(win_w);
				$(".contact-1 .map-wrapper").height(height);

				$("#map").gMap({
				   
				    address: add,
				    zoom: 12,
				    scrollwheel: true,
				    maptype: 'ROADMAP',
				   
				    controls: {
				           panControl: false,
				           zoomControl: true,
				           mapTypeControl: false,
				           scaleControl: false,
				           streetViewControl: false,
				           overviewMapControl: false
				    },
				    markers: [
				        {
				            address: add
				        }
				    ]
				});
			}

		// Scrollbar
			if($(".contact-1").length > 0){

				if(win_w <= 1400) {

					$(".contact-1").niceScroll({
						mousescrollstep: 60,
						cursorcolor: "#959595",
				        cursorborder: "0px solid #fff",
					});
					var wrapper_height = $(".contact-1 .content-wrapper").height();
					$(".contact-1 .map").height(wrapper_height+60);
				}
			}

		// Form Close button
			$(".contact-1 .close").click(function(event) {
				event.preventDefault();

				$(".contact-1 .content-wrapper").fadeOut(300, function() {
					$(".contact-1 .form-btn").delay(200).fadeIn(300);
					$(".contact-1 .map").addClass('active');
				});
			});

		// Form Open Button
			$(".contact-1 .form-btn").click(function(event) {
				event.preventDefault();

				$(this).fadeOut(300);
				$(".contact-1 .map").removeClass('active');
				$(".contact-1 .content-wrapper").fadeIn(300);
			});



/*==========================================================================================================================================
/*==========================================================================================================================================
	Blog
============================================================================================================================================
============================================================================================================================================*/

	// Filters
		if($(".blog").length > 0) {

			$(".blog .filters a").click(function(event) {
				event.preventDefault();

				var target = $(this).attr('data-filter');

				if(!$(this).hasClass('active')) {

					if(target == "*") {

						$(".blog .article.active").removeClass('active');
						$(".blog").removeClass('filtered');
					}
					else {


						$(".blog").addClass('filtered');
						$(".blog .article.active").removeClass('active');

						$(".blog .article"+target).addClass('active');
					}

					$(".blog .filters a.active").removeClass('active');
					$(this).addClass('active');
				}
			});
		}

	// Widgets

		// Flickr Widget
			if($(".sidebar").length > 0) {
					
				$(".sidebar").imagesLoaded(function(){
					
					// Flickr Widget
					$(".widget.flickr").each(function(index, el) {
						
						var wanted_id = $(this).attr('data-id') || '52617155@N08';

						$(this).find('ul').jflickrfeed({
							limit: 6,
							qstrings: {
								id: wanted_id
							},
							itemTemplate: 
							'<li>' +
								'<a href="{{image_b}}" target="_blank" rel="gallery">' +
									'<img src="{{image_q}}" alt="{{title}}" />' +
								'</a>' +
							'</li>'
						});
					});
					
					// On Image Hover
					$('body').on('mouseenter', '.sidebar .widget.flickr li', function(event) {
						$(this).addClass('active');
					});
					$('body').on('mouseleave', '.sidebar .widget.flickr li', function(event) {
						$(this).removeClass('active');
					});

					// Widget hover out
					$('.sidebar .widget.flickr ul').hover(function() {
						$(this).addClass('hovered');
					}, function() {
						$(this).removeClass('hovered');
					});
				});
			}
		

/*==========================================================================================================================================
/*==========================================================================================================================================
	Shortcodes
============================================================================================================================================
============================================================================================================================================*/
	
	// Buttons
		var linkOriginalColor, linkWantedColor, linkOriginalBGColor, linkWantedBGColor, linkOriginalBorderColor, linkWantedBorderColor;

		$("a[class^='button-'][data-hoverbgColor]").hover(function() {

			linkOriginalColor = $(this).css('background-color');
			linkWantedColor = $(this).attr('data-hoverbgColor');

			$(this).css("background-color", linkWantedColor);
			}, function() {
			$(this).css("background-color", linkOriginalColor);
		});
			
		$("a[class^='button-'][data-hovercolor]").hover(function() {

			linkOriginalBGColor = $(this).css('color');
			linkWantedBGColor = $(this).attr('data-hovercolor');

			$(this).css("color", linkWantedBGColor);
			}, function() {

			$(this).css("color", linkOriginalBGColor);
		});
			
		$("a[class^='button-'][data-hoverbordercolor]").hover(function() {

			linkOriginalBorderColor = $(this).css('border-color');
			linkWantedBorderColor = $(this).attr('data-hoverbordercolor');

			$(this).css("border-color", linkWantedBorderColor);
			}, function() {

			$(this).css("border-color", linkOriginalBorderColor);
		});


	// Google Map
		// Map Initialization
			if($(".map-2").length > 0) {

				var address = $(".map-2").attr('data-address');

				$(".map-2 .map-content").gMap({
				   
				    address: address,
				    zoom: 12,
				    scrollwheel: true,
				    maptype: 'ROADMAP',
				   
				    controls: {
				           panControl: false,
				           zoomControl: true,
				           mapTypeControl: false,
				           scaleControl: false,
				           streetViewControl: false,
				           overviewMapControl: false
				    },
				    markers: [
				        {
				            address: address
				        }
				    ]
				});
			}

		// Map Open
			$(".map-2 .open").click(function(event) {
				event.preventDefault();

				$(this).fadeOut(300);
			});



});


})(jQuery);