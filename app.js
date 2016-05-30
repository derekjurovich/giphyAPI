$(document).ready(function(){ 

var key = "&api_key=dc6zaTOxFJmzC";
var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";

  
var search;

 $('#subButton').click(function() {
      search = $('#inputText').val();
      search = search.replace(/ /g, "+");
      getGiphy(search);
      $("gifList").empty();
    });



var gif;

function getGiphy(searchGif){
	$.ajax({
				method:"GET",
				url: searchUrl+searchGif+key
			}).done(function(response) {
				gif = response.data;
				for (var i = 0; i < gif.length; i++) {
					$(".gifList").append($('<img>', {src:gif[i].images.downsized_medium.url}));
					}

			})


}	

})