"use strict";

var TrafficInfo = {
	map : undefined,
	locations : [],
	allCategories : [],
	roadTraffic : [],
	publicTransport : [],
	plannedDisruption : [],
	otherCategories : [],

	init: function() {
		TrafficInfo.map = new Map(62.00, 15.00);
		$("#categoryType").on('click', 'a', function() {
			console.log("INNE");
			TrafficInfo.map.deleteMarkers();
		});
		TrafficInfo.getAllMessages();
	},

	getAllMessages: function() {
		$.ajax({
			type: 'GET',
			url: 'AjaxAction.php',
			dataType: 'json',
			data: {'action': 'handleCache'}
			}).done(function (data) {
				data = JSON.parse(data);
				var messages = data['messages'];
				console.log(messages);
				TrafficInfo.renderMessages(messages);
			}).fail(function (jqXHR, textStatus) {
				console.log(data);
			});
	},

	/*
	getAllMessages: function() {
        $.ajax({
			type: "GET",
			url: "functions.php",
			data: {function: "getMessages"}
		}).done(function(data) { // called when the AJAX call is ready
						
			data = JSON.parse(data);
		    id = data.id;  
			
			for(var mess in data.messages) {
				var obj = data.messages[mess];
			    var text = obj.name +" said:\n" +obj.message;
				var mess = new Message(text, new Date());
                var messageID = MessageBoard.messages.push(mess)-1;
    
                MessageBoard.renderMessage(messageID);
				
			}
			document.getElementById("nrOfMessages").innerHTML = MessageBoard.messages.length;
			MessageBoard.getMessages(id);
		});
    },
    */

	renderMessages: function(messages) {
		for(var i = 0; i < messages.length; i++){
			var location = messages[i];
			location.marker = TrafficInfo.map.setMarker(location);
			this.locations.push(location);
		}
	}

}
window.onload = TrafficInfo.init;