$('#panel-services').mouseenter(function() {
	$('#panel-services').removeClass('blur');
	$('#panel-services').addClass('focus');
	$('#panel-products').addClass('blur');
});

$('#panel-services').mouseleave(function() {
	$('#panel-services').removeClass('blur');
	$('#panel-services').removeClass('focus');
	$('#panel-products').removeClass('blur');
});
$('#panel-products').mouseenter(function() {
	$('#panel-products').removeClass('blur');
	$('#panel-products').addClass('focus');
	$('#panel-services').addClass('blur');
});

$('#panel-products').mouseleave(function() {
	$('#panel-products').removeClass('blur');
	$('#panel-products').removeClass('focus');
	$('#panel-services').removeClass('blur');
});