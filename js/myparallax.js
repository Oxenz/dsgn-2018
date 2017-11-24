
$(window).scroll(function() {

	var stN = $(this).scrollTop() /-10;
	var stP = $(this).scrollTop() / 10;

	$(".l1").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});
	$(".l2").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});
	$(".l3").css({
		"transform" : "translate3d(0px, " + stN /3 + "%, .01px)"
	});
	$(".l4").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});



	$(".project-item__view").css({
		"transform" : "translate3d(0px, " + stP *2 + "%, .01px)"
	});


	$(".project-item__like").css({
		"transform" : "translate3d("+ stP + "px, " + stP /50 + "px, .01px)"
	});



	$(".r1").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});

	console.log(stN)
});


