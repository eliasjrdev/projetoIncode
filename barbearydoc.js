/*function initMap() {
  var location = { lat: -2.51386, lng: -44.30448 }; // Coordenadas de latitude e longitude do local desejado
  
  var mapOptions = {
    center: location, // Definindo o centro do mapa como o local desejado
    zoom: 15
  };
  
  var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  
  var marker = new google.maps.Marker({
    position: location, // Definindo a posição do marcador como o local desejado
    map: map,
    title: 'Barbearia'
  });
}*/

function initMap() {
  var barbeariaLocation = {lat: -2.51386, lng: -44.30448};  
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: barbeariaLocation
  });
  var marker = new google.maps.Marker({
      position: barbeariaLocation,
      map: map,
      title: 'Nossa localização'
  });
}

function initMap() {
  const barbearia = { lat: -2.51386, lng: -44.30448 }; // Latitude e Longitude da barbearia
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: barbearia,
  });
  const marker = new google.maps.Marker({
      position: barbearia,
      map: map,
  });
}




