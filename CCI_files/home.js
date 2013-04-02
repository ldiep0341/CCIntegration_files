function animateBanner(){
	var prev = position;
	var next = position + 1;

	if (next > banner_count - 1){
		next = 0;
	}

	position = next;
	nextImage(prev,next);
	tm = setTimeout('animateBanner()',7000);
}

function nextImage(prev,next){
	clearTimeout(tm);
	$('#banner_images a').eq(prev).stop().fadeOut();
	$('#banner_images a').eq(next).stop().fadeIn(1000,function(){
		$('#banner_images a').each(function(){
			$(this).css('z-index','10');
		});
		$('#banner_control ul li').each(function(){
			$(this).removeClass('this_banner');
		});
		$('#banner_control ul li').eq(next).addClass('this_banner');
		$(this).css('z-index','20');
		tm = setTimeout('animateBanner()',7000);
	});
}

var position = 0;
var banner_count = 0;
var tm = 0;

$(document).ready(function(){
	banner_count = $('#banner_images a').length;

	/* Animated Banner */
	$('#banner_control ul li').click(function(){
		var position_next = $(this).index();

		nextImage(position,position_next);
		position = position_next;
	});

	tm = setTimeout('animateBanner()',7000);
});