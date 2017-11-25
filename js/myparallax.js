
$(window).scroll(function() {

	var stN = $(this).scrollTop() /-10;
	var stP = $(this).scrollTop() / 10;

// Parallax <IMG>   ~ L E F T ~

	$(".img--l1").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});

	$(".img--l2").css({
		"transform" : "translate3d(0px, " + stN /5 + "%, .01px)"
	});

	$(".img--l3").css({
		"transform" : "translate3d("+ stN /10 +"%, " + stN /5 + "%, .01px)"
	});

	$(".img--l4").css({
		"transform" : "translate3d("+ stP /5 +"%, " + 0 + "%, .01px)"
	});

	$(".img--l5").css({
		"transform" : "translate3d("+ stP /7 +"%, " + 0 + "%, .01px)"
	});


// Parallax <IMG>   ~ R I G H T ~

	$(".img--r1").css({
		"transform" : "translate3d("+ stN /5 +"%, " + 0 + "%, .01px)"
	});

	$(".img--r2").css({
		"transform" : "translate3d(0px, " + stP /4 + "%, .01px)"
	});

	$(".img--r3").css({
		"transform" : "translate3d("+ stP /7 +"%, " + 0 + "%, .01px)"
	});



// Parallax <TEXT>   ~ L E F T ~

	$(".project__item--l1").css({
		"transform" : "translate3d(0px, " + stP /2 + "%, .01px)"
	});

	$(".project__item--l2").css({
		"transform" : "translate3d(0px, " + stP /2 + "%, .01px)"
	});

	$(".project__item--l3").css({
		"transform" : "translate3d(0px, " + stP /1.5 + "%, .01px)"
	});

	$(".project__item--l5").css({
		"transform" : "translate3d(0px, " + stN /2 + "%, .01px)"
	});


// Parallax <TEXT>   ~ R I G H T ~

	$(".project__item--r1").css({
		"transform" : "translate3d("+ stP /8 +"%, " + 0 + "%, .01px)"
	});

	$(".project__item--r2").css({
		"transform" : "translate3d(0px, " + stN /2 + "%, .01px)"
	});

	$(".project__item--r3").css({
		"transform" : "translate3d("+ stN /8 +"%, " + 0 + "%, .01px)"
	});


// Parallax <STUDIO>   ~ L E F T ~

	$(".studio__caption").css({
		"transform" : "translate3d(0px, " + stP + "%, .01px)"
	});

	$(".news__l-caption").css({
		"transform" : "translate3d(0px, " + stP + "%, .01px)"
	});













	// console.log(stN)
	// console.log(stP)

});


