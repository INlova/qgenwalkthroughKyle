/*global $*/
$(document).ready(function() {
		function getQuote() {
			$.ajax({
				method: "GET",
				url: 'https://got-quotes.herokuapp.com/quotes',
				success: function(response) {
					$('#quote').text(response.quote);
					//   document.getElementById('quote').innerHTML = response.quote;
					$('#character').text(response.character);
					//   document.getElementById('character').innerHTML = response.character
				}
			});
		}
		getQuote();
		$('#getQuote').on('click', function(e) {
			getQuote();
		});
	})
	