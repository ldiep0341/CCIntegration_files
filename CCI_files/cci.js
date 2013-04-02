$(document).ready(function(){
	/* Dropdown Fix */
	$('#nav ul li').mouseover(function(){
		$(this).children('.children').css('display','inline-block');
	}).mouseout(function(){
		$(this).children('.children').css('display','none');
	});

	/* Sidebar Dropdown Fix */
	$('#sidebar ul li').mouseover(function(){
		$(this).children('.children').css('display','inline-block');
	}).mouseout(function(){
		$(this).children('.children').css('display','none');
	});

	/* Wrench Fix */
	if ($('#sidebar ul').text() == ''){
		$('#sidebar').html('');
	}
});