require(['jquery', 'lbi.bootstrap','lbi.owl'], function ($) {

"use strict";$(function(){if($(".deals-carousel").length>0){var e=$(".deals-carousel ul");e.owlCarousel({loop:true,autoPlay:true,autoplayTimeout:1000,singleItem:!0,slideSpeed:500,navigation:!0,navigationText:!1,pagination:!1})}if($(".cat-carousel").length>0){var a=$(".cat-carousel ul");a.owlCarousel({loop:true,autoPlay:true,autoplayTimeout:1000,items:4,slideSpeed:500,navigation:!0,navigationText:!1,pagination:!1});}if($(".product-gallery").length>0){var t=$(".product-gallery__views ul"),i=$(".product-gallery__previews a");t.owlCarousel({singleItem:!0,navigation:!0,navigationText:!1,pagination:!1});for(var l=function(e){$(i[e]).on("click",function(a){a.preventDefault(),t.trigger("owl.goTo",e)})},n=0;n<i.length;n++)l(n)}$(".footer").length>0&&$(".footer__block").on("click",function(){}),$(".header__btn-mobile").length>0&&!function(){var e=!1;$(".header__btn-mobile").on("click",function(a){a.preventDefault(),e||($(".wrapper").addClass("open"),setTimeout(function(){e=!e},550))}),$(".pusher").on("click",function(a){e&&($(".wrapper").removeClass("open"),setTimeout(function(){e=!e},550))})}(),$(".tabs").length>0&&($(".tab_content").hide(),$(".tab_content:first").show(),$("ul.tabs li").click(function(){$(".tab_content").hide();var e=$(this).attr("rel");$("#"+e).fadeIn(),$("ul.tabs li").removeClass("active"),$(this).addClass("active"),$(".tab_drawer_heading").removeClass("d_active"),$(".tab_drawer_heading[rel^='"+e+"']").addClass("d_active")}),$(".tab_drawer_heading").click(function(){$(".tab_content").hide();var e=$(this).attr("rel");$("#"+e).fadeIn(),$(".tab_drawer_heading").removeClass("d_active"),$(this).addClass("d_active"),$("ul.tabs li").removeClass("active"),$("ul.tabs li[rel^='"+e+"']").addClass("active")}));
$('.switcher__value').click(function(){
		var blockClass = $(this).attr('data-id');
		$('.switcher__value').removeClass('active');
		$(this).addClass('active',1);
		$('.cat-carousel').hide();
		$('.cat-carousel.'+blockClass).show();
	});
	$('a.totop').click(function() {

	  $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
});

$('.foot-search__close').click(function() {
	$('#overlaylbi').hide();
	document.cookie = "ModalShown=1; path=/";
});
$('#newsletter-signup').click(function() {
	document.cookie = "ModalShown=1; path=/";
});
if (document.cookie.indexOf("ModalShown=1")<0) {
	$('#overlaylbi,.foot-search').show();
}
});

});

