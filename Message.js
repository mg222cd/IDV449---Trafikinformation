"use strict";

var TrafficInfo = {
	map : undefined,
	categoryType : 4,
	locations : [],
	allCategories : [],
	roadTraffic : [],
	publicTransport : [],
	plannedDisruption : [],
	otherCategories : [],

	init: function() {
		TrafficInfo.map = new Map(62.00, 15.00);
		TrafficInfo.categoryBinding();
		TrafficInfo.getAllMessages();
		TrafficInfo.messageBinding();
	},

	categoryBinding: function() {
		var that = this;
		$("#categoryType").on("click", "a", function() {
			TrafficInfo.map.deleteMarkers();
			that.categoryType = parseInt($(this).data("category-type"));
			that.renderCategoryTypeToList();
		});
	},

	messageBinding: function() {
		var that = this;
		$("#trafficListing").on("click", "li", function(){
			var msgId = parseInt($(this).data('message-id'));
   			google.maps.event.trigger(that.locations[msgId].marker, 'click');
	  	});
	},

	getAllMessages: function() {
		$(document).ready(function () {
			$.ajax({
				type: 'GET',
				url: 'AjaxAction.php',
				dataType: 'json',
				data: {action: 'handleCache'}
			}).done(function (data) {
					var messages = data['messages'];
					TrafficInfo.renderMessages(messages);
				}).fail(function (jqXHR, textStatus) {
					console.log("Läsfel, status: " + textStatus);
				});
		});
	},

	renderMessages: function(messages) {
		for(var i = 0; i < messages.length; i++){
			var location = messages[i];
			location.marker = TrafficInfo.map.setMarker(location);
			this.locations.push(location);
		}
	},

	renderCategoryTypeToList : function() {
		var that = this;
		var trafficListing = "";
		for(var i = 0; i < this.locations.length; i++) {
			var locationByCategory = this.locations[i];			
			if(this.categoryType === 4 || this.categoryType === locationByCategory.category) {
				trafficListing += '<li data-message-id="'+ i +'">' + '<a href="#">' +  locationByCategory.title + '</a>' + '</li>';
				TrafficInfo.map.setMarker(locationByCategory);
			}
		}
		$('#trafficListing').html(trafficListing);
	}

}
window.onload = TrafficInfo.init;