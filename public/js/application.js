$(document).ready(function() {

	$('form').on('submit', function(event){

		event.preventDefault();
		
		var url = $(this).attr('action');
		var data = $(this).serialize();

		$('.container').append('<p id="status">processing...</p>');

		$.post(url, data, function(response){
			console.log("in ajax callback");
			$('#status').text('Tweeted!!!');
			$('form').find('input:first-child').val('');
			setTimeout(function(){
				$('#status').remove();
			}, 1000)
		});
	});
});
