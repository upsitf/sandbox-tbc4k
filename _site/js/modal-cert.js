$('#certModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget); // Button that triggered the modal
	// alert($(button).attr('id'));
	var content = $(button).children('.content').html();
	// alert(content);
	/*
	var content = null;
	for (var i = 0; i < button.childNodes.length; i++) {
	    if (button.childNodes[i].className == "content") {
			content = doc.childNodes[i].innerHTML;
			break;
	    }        
	}
	*/

	var modal = $(this);
	modal.find('.modal-title').text($(button).siblings('h5').html());
	modal.find('.modal-body').html(content);

})