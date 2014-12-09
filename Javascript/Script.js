/*
$(document).ready(function() {
  alert("I am an alert box!");
  //Map.getMap;
});

var Map = {

getMap = function(){
	alert("I am an alert box!");
};

function initialize () {
    var mapOptions = {
        center: new google.maps.LatLng(59.999999, 14.9999999),
        zoom: 2
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    
    // Klickevent som anropar skaparfunktionen för markören och kommentarsrutan
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
}

}; //Map-object
*/