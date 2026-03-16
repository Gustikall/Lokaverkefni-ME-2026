'use strict'
//Sækir API lykil frá Geoapify
const key = "63bf8fb801294b10a0bbcfd1ef6013d3"
const ARCGIStkn = "AAPTabQVrqpvyHjnU0anNSfHQeg..e2RE0GIEdh28oDqlqr1B8EsgULZr9VU2eSUIc0wEZoAhHaKdcGaqgwKYCKcamEp8e7EjzlJiaxJ6Lv9wAW5AiRheK9wEaCQHxZMokxW0e8rTtw4b3q-jVr931CjYW8qUS3Xo-Q8-HarRzenfjTOynBRw_AAxaz4vNzu65mAuKYUw6csvKpTag_LwzGGBzIQAfNEbRDKuNTuIWrRHt0WZKSqo0wXAs6Gv5GkbZmhFu0hLWBHl_KloEPnyoTPaAT1_QorSi3bU"


const fromWaypoint = [0,0]
const toWaypoint = [0,0]
fetch(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=drive&apiKey=${key}`).then(res => res.json()).then(result => {})


/*
const noMouseClickingAroundThesePartsOfTown = document.getElementById("srchDiv")
L.DomEvent.disableClickPropagation(noMouseClickingAroundThesePartsOfTown)
const sameAsAbove = document.getElementById("autoCompleteResults")
L.DomEvent.disableClickPropagation(sameAsAbove)
*/
/////////////////////////////////////////////////


//Kortið sjálft --- Nota leaflet og MapTiler
let map = L.map('kortið').setView([64.12895, -21.83516], 14);

let streets = L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'

})

let satallite = L.tileLayer('https://api.maptiler.com/maps/satellite-v4/256/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>' 
})

let osm = L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank"> OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'
})

let esri = L.esri.Vector.vectorBasemapLayer("arcgis/outdoor", {
    token: ARCGIStkn
}).addTo(map);
//////////////////////////////////////////////////////

let markerIcon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})

let marker = L.marker([], {
    draggable: true,
    autoPan: true,
    icon: markerIcon
});

const geocodeService = L.esri.Geocoding.geocodeService();

map.on("click", function(pos) {
    if (marker){
        marker.remove();
    }
    L.esri.Geocoding.reverseGeocode({
        apikey: ARCGIStkn
    }).latlng(pos.latlng).run(function(error, result){
        if (error){
            return;
        }

        L.marker(result.latlng,{draggable:true, icon:markerIcon}).addTo(map).bindPopup(result.address.Match_addr, {direction: "top", offset: [0,-15], riseOnHover: true}).openPopup();
        map.setView(result.latlng)
        console.log(result)

        marker.on("dragend", function(){
            marker.bindTooltip("123").openPopup();
        })
    })
})

/*marker.on("dragend", function(){
    let markerNewLatLng = marker.getLatLng();
    marker.setLatLng(markerNewLatLng)
    map.setView(markerNewLatLng)
    marker.bindTooltip("You moved the marker to " + markerNewLatLng, {direction: "top", offset: [0,-15]})
})*/

//Layer Control
let baseLayers = {
    "OpenStreetMap": osm,
    "Streets": streets,
    "Satallite": satallite,
    "Esri Map": esri,
};
L.control.layers(baseLayers).addTo(map)


const addressSearchControl = L.control.addressSearch(key, {
  position: 'topleft',
  className: "searchBar",
    
  resultCallback: (address) => {
    console.log(address)

    if (marker) {
      marker.remove();
    }
    
    if (!address) {
      return;
    }

    marker = L.marker([address.lat, address.lon], {icon: markerIcon}).addTo(map);
    marker.bindTooltip(address.address_line1 + "<br>" + address.address_line2, {direction: "top", offset: [0,-15]});
    if (address.bbox && address.bbox.lat1 !== address.bbox.lat2 && address.bbox.lon1 !== address.bbox.lon2) {
      map.fitBounds([[address.bbox.lat1, address.bbox.lon1], [address.bbox.lat2, address.bbox.lon2]], { padding: [100, 100] })
    } else {
      map.setView([address.lat, address.lon], 15);
    }
  },


});
map.addControl(addressSearchControl);
