//Geolocation//



// GetCurrent POsition
// function curSuccess(pos) {
//     // the second coords is part of the geolocation, you can view it in console.log(pos)
//     const coords = pos.coords;
//     console.log(`Latutude: ${coords.latitude}`)
//     console.log(`Longitude: ${coords.longitude}`)
//     console.log(`Within ${coords.accuracy} meters`)
// }

// function curError(err) {
//     console.log(`Error: ${err.code} - ${err.message}`);
// }


// const CurOptions = {
//     enableHighAccuracy: true,   //Uses GPS if available
//     timeout: 5000,              //Time to wait to stop looking for location
//     maximumAge: 0,              //Do not use a cached position
// };
// navigator.geolocation.getCurrentPosition(curSuccess, curError, CurOptions)


// const target = {
//     latitude: 41.5432,
//     longitude: -71.2345
// }

//  function watchSuccess(pos) {
//      // the second coords is part of the geolocation, you can view it in console.log(pos)
//      const coords = pos.coords;
     
//      if (target.longitude === coords.longitude && target.latitude === coords.latitude) {
//         console.log("you have reached your destination");
//         navigator.geolocation.clearWatch(id)
//      } else {
//         console.log("not there yet")
//      }
//  }
 
//  function watchError(err) {
//      console.log(`Error: ${err.code} - ${err.message}`);
//  }
 
 
//  const watchOptions = {
//      enableHighAccuracy: true,   //Uses GPS if available
//      timeout: 5000,              //Time to wait to stop looking for location
//      maximumAge: 0,              //Do not use a cached position
//  };
 
//  const id = navigator.geolocation.getCurrentPosition(watchSuccess, watchError, watchOptions)




//  Here is the copied map JS from leaflet.com, changed var map to const at the beginning
 
const map = L.map('map').setView([51.505, -0.09], 13);  //([Lat, long], zoom)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//  This was from the site, I am instead using my own marker function
//  L.marker([51.5, -0.09]).addTo(map)
//      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//      .openPopup();
// End of copied info from leaflet.com

const marker = L.marker([0,0]).addTo(map);

navigator.geolocation.getCurrentPosition(function(pos) {
   const lat = pos.coords.latitude;
   const lng = pos.coords.longitude;

   marker.setLatLng([lat, lng]).update;  //this sets the current location to the marker
   map.setView([lat, lng], 13);    //The higher the third number, the more zoomed in it is

   marker.bindPopup(`Your cuurent location is approximately ${lat} latitude, ${lng} longitude`)//If you clisk on the marker, this will popup

})