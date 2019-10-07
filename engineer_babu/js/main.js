    $(".menu-btn").click(function(){
    	$(".menu").css("right","0px");
    });
    $(".close-menu").click(function(){
    	$(".menu").css("right","-100%");
    });
		
		$(document).ready(function(){
	        $('.owl-carousel-news').owlCarousel({
	           margin:30,
	           nav:true,
	           navText: [
	               "<i class='fa fa-arrow-left'></i>",
	               "<i class='fa fa-arrow-right'></i>"
	               ],
	           responsive:{
	               0:{
	                   items:1
	               },
	               567:{
	                   items:2
	               },
	               1000:{
	                   items:3
	                }
	           }
	        }); 
    	});