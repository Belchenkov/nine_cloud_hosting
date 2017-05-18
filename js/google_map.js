// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 5,
        scrollwheel: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.7494733,37.35232), // Moscow

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7494733, 37.35232),
        map: map,
        title: 'Moscow',
        icon: 'i/map-pin.png' //"i/map-pin.png" -- marker
    });

    /* Markers a lot
     =========================*/
    var neighborhoods = [
        // Main
        {lat: 59.7494733, lng: 32.35232, title: 'Title 1', content: 'Text 1', icon: 'map-pin.png'},
        {lat: 56.8494733, lng: 37.35232, title: 'Title 2', content: 'Text 2', icon: 'map-pin.png'},
        {lat: 70.8494733, lng: 37.35232, title: 'Title 3', content: 'Text 3', icon: 'map-pin.png'}
    ];

    /* Info windows + Markers
     =========================*/
    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {

        // this variable sets the map bounds and zoom level according to markers position
        var bounds = new google.maps.LatLngBounds();

        // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
        for (var i = 0; i < neighborhoods.length; i++){

            var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
            var name = neighborhoods[i].title;
            var content = neighborhoods[i].content;
            var icon = neighborhoods[i].icon;

            createMarker(latlng, name, content, icon, i * 250);

            // Marker’s Lat. and Lng. values are added to bounds variable
            bounds.extend(latlng);
        }

    }


    function createMarker(latlng, title, content, icon, timeout) {

        window.setTimeout(function() {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                clickable: true,
                icon: {
                    url: "i/" + icon
                },
                animation: google.maps.Animation.DROP
            });

            google.maps.event.addListener(marker, 'click', function() {
                var infoContent = '<div id="info_container">' +
                    '<div class="info_title"><h4>' + title + '</h4></div><div>' + content + '</div></div>';

                infoWindow.setContent(infoContent);
                infoWindow.open(map, marker);

            });

        }, timeout);

    }

    displayMarkers();


    /* Map center on resize
     =========================*/
    var getCen = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(getCen);
    });


    // Scroll click on map
    map.addListener('click', function () {
       map.setOptions({
           scrollwheel: true,
           zoomControl: true
       });
    });

    map.addListener('drag', function () {
        map.setOptions({
            scrollwheel: true,
            zoomControl: true
        });
    });

    map.addListener('mouseout', function () {
        map.setOptions({
            scrollwheel: false,
        });
    });
}