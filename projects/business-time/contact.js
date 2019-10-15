
// const dotenv = require('dotenv');
// require('dotenv').config();
// const API_KEY = process.env.GOOGLE_API_KEY;
const mapContainer = document.getElementById('map');

//insert script for map generation
let script = document.createElement('script');
script.async = true;
script.defer = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
mapContainer.appendChild(script);


function initMap() {
    // The location of pin
    var location = {lat: 40.745318, lng: -111.874042};
    // The map, centered at pin
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: location});
    // The marker, positioned at pin
    var marker = new google.maps.Marker({position: location, map: map});
};



