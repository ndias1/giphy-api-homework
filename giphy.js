$(document).on("click", "button", function(event){

var topic = $(this).attr("data-topic");
var queryURL="http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {

      console.log(queryURL);
      console.log(response);
   
    });
})

$(document).on("click", "#userSubmitButton", function(event){

	var userTopicText = $("#userTopicText").val();

topics.push(userTopicText);
createButton();

if ($('#userTopicText').val()) { $('#userTopicText').val(''); }
})

function createButton() {
	
	$("#characters").empty();
	//go through topics list & create buttons
	//for loop to go through the array
	//append the html div
	//each button needs data value that is equal to the string at each index
	//button empties every time the function runs
	for (i = 0; i < topics.length; i++){
	  $("#characters").append('<button type="button" class="btn btn-secondary btn-sm" data-topic='+topics[i]+'>'+topics[i]+'</button>');
	}
}

$(document).ready(function(){
	createButton();
})

var topics = ["rick sanchez", 
			 "morty smith", 
			 "summer smith", 
			 "birdperson"];
