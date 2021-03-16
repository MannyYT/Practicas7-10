var coords = {
    lat: 0,
    lng: 0,
  };
  
  var propiedades = {
    center: coords,
    zoom: 2,
  };
  
  function getMarkers() {
    const markers = [
      {
        name: "Canada",
        longitude: "-106.346771",
        latitude: "56.130366",
      },
      {
        name: "China",
        longitude: "104.195397",
        latitude: "35.86166",
      },
      {
        name: "Dinamarca",
        longitude: "9.501785",
        latitude: "56.26392",
      },
    ];
  
    return markers;
  }
  
  var iniciaMapa = () => {
    const map = new google.maps.Map(document.getElementById("map"), propiedades);
  
    const marcadores = getMarkers();
  
    for (marcador of marcadores) {
      let marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
        title: marcador.name,
      });
    }
  };