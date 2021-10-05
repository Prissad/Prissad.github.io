
jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	webresume_tm_menu();
	webresume_tm_modalbox_news();
	webresume_tm_modalbox_education()
	webresume_tm_modalbox_about();
	webresume_tm_modalbox_portfolio();
	webresume_tm_my_progress();
	webresume_tm_mycounter();
	webresume_tm_projects();
	webresume_tm_portfolio();
	webresume_tm_cursor();
	webresume_tm_imgtosvg();
	webresume_tm_popup();
	webresume_tm_data_images();
	webresume_tm_owl_carousel();
	webresume_tm_education();
	
	jQuery(window).load('body', function(){
		webresume_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -------------------------------------------------
// --------------------  MENU  ---------------------
// -------------------------------------------------

function webresume_tm_menu(){
	
	"use strict";
	
	var list	 = jQuery('.webresume_tm_all_wrap .leftpart .menu ul li,.webresume_tm_mobile_menu .menu ul li');
	var vContent = jQuery('.webresume_tm_all_wrap');
	var vSection = jQuery('.webresume_tm_section');
	
	list.on('click',function(){
		var element = jQuery(this);
		var myHref	= element.find('a').attr('href');
		if(!element.hasClass('active')){
			list.removeClass('active');
			element.addClass('active');
			vSection.removeClass('active');
			vContent.find(myHref).addClass('active').animate({ scrollTop: 0 });
		}
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function webresume_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox	= jQuery('.webresume_tm_modalbox');
	var list 		= jQuery('.webresume_tm_news ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.details .title a,.webresume_tm_full_link,.webresume_tm_read_more a');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title');
		var titleHref	= element.find('.title a').html();
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = modalBox.find('.title');
			title.html(titleHref);
			webresume_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
}

// -------------------------------------------------
// -----------  MODALBOX EDUCATION  ----------------
// -------------------------------------------------

function webresume_tm_modalbox_education(){
	
	"use strict";
	
	var modalBox	= jQuery('.webresume_tm_modalbox_education');
	var list 		= jQuery('.webresume_tm_education .timeline li');
	var closePopup	= modalBox.find('.close');

	var modalBody = modalBox.find('.description_wrap');
	
	list.each(function(){
		var element 	= jQuery(this);
		var buttons 	= element.find('.member-socials li');
		var imgData		= element.data('img');
		var title		= element.data('title');
		var contentBig		= element.data('content-big');
		var content		= element.data('content');
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');			
			modalBody.append(
				  "<div class='image'>"
				+ "	<img src='" + imgData + "'></img>"
				+ "</div>"
				+ "<div class='details'>"
				+ "	<h1 class='title'>" + title + "</h1>"	
				+ "</div>"
				+ "<hr/>"
				+ "<div class='main_content'>"
				+ "	<div class='descriptions'>"
				+ "		<p class='bigger'>" + contentBig + "</p>"	
				+ 		content	
				+ "	</div>"
				+ "</div>"
			)
			/*mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});*/
			//modalBox.appendChild(title);
			//webresume_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBody.html('');
		jQuery('body').removeClass('modal');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX ABOUT  ------------------
// -------------------------------------------------

function webresume_tm_modalbox_about(){
	
	"use strict";
	
	var modalBox	= jQuery('.webresume_tm_modalbox_about');
	var opener		= jQuery('.webresume_tm_about .webresume_tm_button a');
	var closer		= modalBox.find('.close');
	
	opener.on('click',function(){
		modalBox.addClass('opened');
		webresume_tm_my_progress();
		webresume_tm_mycounter();
		return false;
	});
	closer.on('click',function(){
		modalBox.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function webresume_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox	= jQuery('.webresume_tm_modalbox');
	var button		= jQuery('.webresume_tm_portfolio .popup_info');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var details 	= parent.find('.details_all_wrap').html();
		var title 		= parent.find('.entry').data('title');
		var category 	= parent.find('.entry').data('category');
		
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.top_image').html(parent.find('.popup_info').html());
		modalBox.find('.portfolio_main_title').html('<h3>'+title+'</h3>'+'<span>'+category+'</span>');
		webresume_tm_popup();
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function webresume_tm_projects() {
	
	"use strict";
	
	jQuery('.webresume_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.webresume_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.webresume_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.webresume_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.webresume_tm_portfolio_titles').removeClass('visible');
		});
	});
}

// filterable 

function webresume_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.webresume_tm_portfolio .portfolio_list');
		var filter		 = jQuery('.webresume_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function webresume_tm_my_progress(){
	"use strict";
	
	jQuery('.webresume_progress .bar_in').css({width:'0px'});
	jQuery('.webresume_progress .bar').removeClass('open');
	function tdProgress(container){
		container.find('.progress_inner').each(function() {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.bar');
			var pBar 			= progress.find('.bar_in');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');});
		});
	}
	jQuery('.webresume_progress').each(function() {
		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function webresume_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

function webresume_tm_mycounter(){
	
	"use strict";
	
	jQuery('.webresume_tm_counter').removeClass('stop');
	
	jQuery('.webresume_tm_counter').each(function() {

	var el		= jQuery(this);
		el.waypoint({
			handler: function(){

				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'95%'	
		});
	});
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function webresume_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){webresume_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function webresume_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function webresume_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.html').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function webresume_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function webresume_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function webresume_tm_owl_carousel(){

	"use strict";
	
	var carousel_lang_framework	= jQuery('.partners .lang-framework');
	var carousel_database = jQuery('.partners .databases');
	var carousel_ops = jQuery('.partners .ops');
	var carousel_game_dev = jQuery('.partners .game-dev');
	var carousel_other_tools = jQuery('.partners .other-tools');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}

	carousel_lang_framework.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: true,
		navSpeed: true,
		navText: ["<img src='img/nav/nav-left.png'></img>","<img src='img/nav/nav-right.png'></img>"],
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:4},
			1040:{items:4},
			1200:{items:5},
			1600:{items:6},
			1920:{items:6}
		}
	});

	carousel_database.owlCarousel({
		loop: true,
		items: 3,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: true,
		navSpeed: true,
		navText: ["<img src='img/nav/nav-left.png'></img>","<img src='img/nav/nav-right.png'></img>"],
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1200:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});

	carousel_ops.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: true,
		navSpeed: true,
		navText: ["<img src='img/nav/nav-left.png'></img>","<img src='img/nav/nav-right.png'></img>"],
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:4},
			1040:{items:4},
			1200:{items:5},
			1600:{items:6},
			1920:{items:6}
		}
	});

	carousel_game_dev.owlCarousel({
		loop: true,
		items: 3,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: true,
		navSpeed: true,
		navText: ["<img src='img/nav/nav-left.png'></img>","<img src='img/nav/nav-right.png'></img>"],
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1200:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});

	carousel_other_tools.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: true,
		navSpeed: true,
		navText: ["<img src='img/nav/nav-left.png'></img>","<img src='img/nav/nav-right.png'></img>"],
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:4},
			1040:{items:4},
			1200:{items:5},
			1600:{items:6},
			1920:{items:6}
		}
	});

	webresume_tm_imgtosvg();
}

// -------------------------------------------------
// ----------------  EDUCATION  --------------------
// -------------------------------------------------

function webresume_tm_education() {

	"use strict";
	
	jQuery('.webresume_tm_education .member-title').click(function(e) {
		$(this).next().slideToggle();
		$(this).next().next().slideToggle();
	});

};