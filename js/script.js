
var map;

var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

var markers = [{
  title: 'Litchfield Beach and Golf Resort',
  placeId: 'ChIJI5-JAls3AIkRzITUWgmij2Y',
  position: { lat: 33.4840236, lng: -79.0947868 },
  address: [ '14276 Ocean Hwy.', 'Pawleys Island, SC 29585' ],
  url: 'https://maps.google.com/?cid=7390303674600555724'
}, {
  title: "Hampton Inn Pawley's Island",
  placeId: 'ChIJS3QcXVo3AIkR-EOBn7JhV6g',
  position: { lat: 33.4851585, lng: -79.099529 },
  address: [ 'Willbrook Blvd.', 'Pawleys Island, SC 29585' ],
  url: 'https://maps.google.com/?cid=12130271541153842168'
}, {
  title: 'Brookgreen Gardens',
  placeId: 'ChIJqT4lWpw5AIkRbG6TpXH1tzo',
  position: { lat: 33.509577, lng: -79.077817 },
  address: [ '1931 Brookgreen Garden Dr.', 'Murrells Inlet, SC 29576' ],
  url: 'https://maps.google.com/?cid=4231120243395882604'
}];

var infoWindow = {

  open: function(marker, content) {
    this.close();
    this._info = new google.maps.InfoWindow();
    this._info.setContent(content);
    this._info.open(map, marker);
  },

  close: function() {
    if (this._info) {
      this._info.close();
      this._info = null;
    }
  }
};

function renderInfoWindow(params) {
  return '<div class="info-window">'
    + '<div>'
      + '<div class="info-window__title">' + params.title + '</div>'
      + '<div>'
        + '<div>' + params.address[0] + '</div>'
        + '<div>' + params.address[1] + '</div>'
      + '</div>'
    + '</div> '
    + '<div class="view-link">'
      + '<a target="_blank" href="' + params.url + '">View on Google Maps</a>'
    + '</div>'
  + '</div>';
}

function createMarker(params) {

  var marker = new google.maps.Marker({
    map: map,
    label: params.title[0],
    title: params.title,
    position: params.position,
    place: {
      location: params.position,
      placeId: params.placeId
    }
  });

  marker.addListener('click', function() {
    infoWindow.open(marker, renderInfoWindow(params));
  });
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 33.50240522749401, lng: -79.0876436883301 },
    scrollwheel: false,
    zoom: 13,
    styles: styles
  });

  map.addListener('click', infoWindow.close.bind(infoWindow));

  for (var i=0; i<markers.length; i++) {
    createMarker(markers[i]);
  }
}
