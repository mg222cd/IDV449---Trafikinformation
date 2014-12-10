"use strict";

//Constructor
var Map = function(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.infoWindow = undefined;
    this.markers = [];
    var mapOptions = {
        center: new google.maps.LatLng (this.latitude, this.longitude),
        zoom: 4
    }
    this.map = new google.maps.Map (document.getElementById('map-canvas'), mapOptions);
};

Map.prototype.setMarker = function(location) {
    var that = this;
    var latLng = new google.maps.LatLng (location.latitude, location.longitude);
    var marker = new google.maps.Marker ({
        position: latLng,
        map: this.map,
    });
    this.markers.push(marker);
    google.maps.event.addListener(marker, 'click', function () {
        that.getInfoWindow(location, marker);
    });
};

Map.prototype.getInfoWindow = function(location, marker) {
    if (this.infoWindow !== undefined) {
        this.infoWindow.close();
    }
    var contentString = "<div class='infoWinContent'>" +
        "<h3>" + location.title + "</h3>" +
        "<p>Skapad: " + location.createddate + "</p>" +
        "<p>Trafikinformation: " + location.description + "</p>" +
        "<p>Plats: " + location.exactlocation + "</p>" +
        "</div";
    this.infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });
    this.infoWindow.open(this.map, marker);
}

Map.prototype.deleteMarkers = function() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    this.markers = [];
}

/*
var map;
function initialize () {
    var mapOptions = {
        center: new google.maps.LatLng(59.999999, 14.9999999),
        zoom: 2
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
*/