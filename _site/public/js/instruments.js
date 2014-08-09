$('#instrModal').modal('hide');

$('.product').click(function() {
	content = $(this).next().html();
	$('.modal-body').html(content);
	$('#instrModal').modal('show');
});
