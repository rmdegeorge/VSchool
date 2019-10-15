function initMap() {
    // The location of pin
    var location = {lat: 40.745318, lng: -111.874042};
    // The map, centered at pin
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: location});
    // The marker, positioned at pin
    var marker = new google.maps.Marker({position: location, map: map});
};



