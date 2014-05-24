$(document).ready(function(){
	// handle the mouseenter functionality
	$(".project-item").mouseenter(function(){
		$(this).addClass("hover");
	})
	// handle the mouseleave functionality
	.mouseleave(function(){
		$(this).removeClass("hover");
	});
});