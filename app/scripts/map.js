function initMap() {
	var center = {
		lat: 49.940396,
		lng: 21.916548
	};
	var mapOptions = {
		center: center,
		zoom: 10
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var markerOptions = {
		position: center,
		map: map
	};
	new google.maps.Marker(markerOptions);
}