$('#panel-application').mouseenter(function() {
	$('#panel-application').removeClass('blur');
	$('#panel-application').addClass('focus');
	$('#panel-inspection').addClass('blur');
});

$('#panel-application').mouseleave(function() {
	$('#panel-application').removeClass('blur');
	$('#panel-application').removeClass('focus');
	$('#panel-inspection').removeClass('blur');
});
$('#panel-inspection').mouseenter(function() {
	$('#panel-inspection').removeClass('blur');
	$('#panel-inspection').addClass('focus');
	$('#panel-application').addClass('blur');
});

$('#panel-inspection').mouseleave(function() {
	$('#panel-inspection').removeClass('blur');
	$('#panel-inspection').removeClass('focus');
	$('#panel-application').removeClass('blur');
});