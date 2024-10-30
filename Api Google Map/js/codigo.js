Inicio();

function Inicio() {
    initMap();
}


function initMap() {
    let map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 16
    });

    if (confirm("Desea ver su ubicación?")) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);

                new google.maps.Marker({
                    position: userLocation,
                    map: map
                });
            },
            function (error) {
                console.error('Error al obtener ubicación:', error);
            }
        );
    }
}