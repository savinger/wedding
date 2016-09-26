var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

/*
styles = [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c2e7cf"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c2e7cf"
            },
            {
                "lightness": "-5"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#0092ff"
            },
            {
                "saturation": "0"
            }
        ]
    }
];
*/

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.5306314, lng: -79.0915919},
    scrollwheel: false,
    zoom: 12,
    styles: styles
  });

  var markers = [{
  	title: 'Litchfield Beach and Golf Resort',
	  placeId: 'ChIJI5-JAls3AIkRzITUWgmij2Y',
  	position: { lat: 33.4840236, lng: -79.0947868 }
  }, {
  	title: 'Hampton Inn Pawley’s Island',
  	placeId: 'ChIJS3QcXVo3AIkR-EOBn7JhV6g',
  	position: { lat: 33.4851585, lng: -79.099529 }
  }, {
  	title: 'Brookgreen Gardens',
  	placeId: 'ChIJqT4lWpw5AIkRbG6TpXH1tzo',
		position: { lat: 33.509577, lng: -79.077817 }
  }];

  for (var i=0; i<markers.length; i++) {
  	new google.maps.Marker({
	    map: map,
	    label: markers[i].title,
	    title: markers[i].title,
	    position: markers[i].position,
	    place: {
	    	location: markers[i].position,
	    	placeId: markers[i].placeId
	    }
	  });
  }
}
